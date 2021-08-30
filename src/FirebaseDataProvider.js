import {
	GET_LIST,
	GET_ONE,
	CREATE,
	UPDATE,
	UPDATE_MANY,
	DELETE,
	DELETE_MANY,
	GET_MANY,
	GET_MANY_REFERENCE,
} from 'react-admin';
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from './config';
import { collection, query, getDocs, doc, getDoc, addDoc, where, limit, orderBy } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';
import { makeObjectCopy } from './utils';

var app = firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var auth = getAuth();
var db = getFirestore();
var storage = getStorage();
var storageRoot = ref();


/**
 * Utility function to flatten firestore objects, since 'id' is not a field in FireStore
 *
 * @param {DocumentSnapshot} DocumentSnapshot Firestore document snapshot
 * @returns {Object} the DocumentSnapshot.data() with an additionnal "Id" attribute
 */
 function getDataWithId(DocumentSnapshot) {
	var dataWithId = {}
	// console.log('getDataWithId Id=', DocumentSnapshot.id)
	if (DocumentSnapshot) {
			dataWithId =  {
					id : DocumentSnapshot.id,
					...DocumentSnapshot.data()
			}
	}
	// console.log(dataWithId);
	return dataWithId
}

/**
* Utility function to upload a file in a Firebase storage bucket
*
* @param {File} rawFile the file to upload
* @param {File} storageRef the storage reference
* @returns {Promise}  the promise of the URL where the file can be download from the bucket
*/
async function uploadFileToBucket(rawFile, storageRef) {
	console.log('Beginning upload');
	return storageRef.put(rawFile)
			.then( snapshot => {
					console.log('Uploaded file !');
					// Add url
					return storageRef.getDownloadURL();
			})
			.catch( (error) => {
					console.log(error);
					throw new Error( { message: error.message_ , status:401} )
			});
}

/**
* Utility function to create or update a file in Firestore
*
* @param {String} resource resource name, will be used as a directory to prevent an awful mess in the bucket
* @param {File} rawFile the file to upload if it is not already there
* @param {Function} uploadFile the storage reference
* @returns {Promise}  the promise of the URL where the file can be download from the bucket
*/
async function createOrUpdateFile(resource, rawFile, uploadFile) {
	console.log("Beginning upload file to storage bucket for file :", rawFile.name);
	var storageRef = storageRoot.child(resource + '/' + rawFile.name);
	// Check if the file already exist (same name, same size)
	// In this case, no need to upload
	return storageRef.getMetadata()
			.then( metadata => {
					console.log(metadata)
					if ( metadata && metadata.size === rawFile.size) {
							console.log("file already exists");
							return storageRef.getDownloadURL();
					} else {
							return uploadFile(rawFile, storageRef)
					}
			})
			.catch(
					() => { console.log('File does not exist'); return uploadFile(rawFile, storageRef) }
			);
}

/**
 * Maps react-admin queries to Firebase
 *
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a data response
 */
 export const firestoreProvider = (type, resource, params) => {
	switch (type) {
			case GET_LIST: {
				console.debug("Get List", resource, params)
				const { page, perPage } = params.pagination;
				const { field, order } = params.sort;
				const filter = params.filter;
				// query all the docs from the first to page*perPage
				console.debug("Making query", field, resource)
				var q = field === 'id' ? query(collection(db, resource), limit(page*perPage)) : query(collection(db, resource), orderBy(field, order.toLowerCase()));
				if (filter) {
						// query = Object.keys(filter).reduce( (q, k) => q.where(k,"==",filter[k]) , query);
						console.error("Under development")
				}

				return getDocs(q)
					.then( QuerySnapshot => {
						// slice the results
						var totalCount = QuerySnapshot.docs.length;
						var firstDocToDisplayCount = page === 1 ? 1 : Math.min( (page-1)*perPage , totalCount )
						var firstDocToDisplay = QuerySnapshot.docs.slice(firstDocToDisplayCount-1);
						return {
								data: firstDocToDisplay.map( doc => getDataWithId(doc) ),
								total: totalCount
						}

					}).catch(err => {
						console.error(err);
						return Promise.reject(err);
					})
			}

			case GET_ONE: {
					const docRef = doc(db, resource, params.id);
					return getDoc(docRef)
						.then( doc => {
								if (doc.exists()) {
										return { data : getDataWithId(doc) };
								} else {
										throw new Error({ message:'No such doc', status: 404});
								}
						})
						.catch( error => {
								throw new Error({ message:error, status:404});
						});
			}

			case UPDATE:
			case CREATE: {
					// Check if there is a file to upload
					var listOfFiles = Object.keys(params.data).filter( key => params.data[key].rawFile)
					return Promise
						.all(
							listOfFiles.map( key => {
								// Upload file to the Storage bucket
								return createOrUpdateFile(resource, params.data[key].rawFile, uploadFileToBucket)
									.then( downloadURL => {
										return { key : key, downloadURL : downloadURL }
									})
							}))
						.then(arrayOfResults => {
								arrayOfResults.map( (keyAndUrl) => {
										// Remove rawFile attr as it will raise an error when setting the data
										delete params.data[keyAndUrl.key].rawFile;
										// Set the url to get the file
										params.data[keyAndUrl.key].downloadURL = keyAndUrl.downloadURL;
										return params.data
								});

								if (type===CREATE) {
									console.log("Creating the data");
									return addDoc(collection(db, resource), params.data)
										.then( doc => {
												var data = makeObjectCopy(params.data);
												data.id = doc.id
												return { data : data }
										})

								}

								if (type===UPDATE) {
									console.log("Updating the data");
									return collection(db, resource)
										.doc(params.id)
										.set(params.data)
										.then( () => { return { data : params.data } } )
								}
						});
			}

			case UPDATE_MANY: {
					// Will crash if there is a File Input in the params
					// TODO
					return params.ids.map( id =>
							collection(db, resource)
											.doc(id)
											.set(params.data)
											.then( () => id )
					)

			}

			case DELETE: {
					console.log('Delete record id', params.id)
					return collection(db, resource)
											.doc(params.id)
											.delete()
											.then( () => { return { data :  params.previousData } } )
			}

			case DELETE_MANY: {
					return {
							data : params.ids.map( id =>
																	db
																	.collection(db, resource)
																	.doc(id)
																	.delete()
																	.then( () => id )
							)
					}
			}

			case GET_MANY: {
					// Do not use FireStore Ref because react-admin will not be able to create or update
					// Use a String field containing the ID instead

					return Promise
									.all(params.ids.map( id => collection(db, resource).doc(id).get() ))
									.then(arrayOfResults => {
											return {
													data : arrayOfResults.map( documentSnapshot => getDataWithId(documentSnapshot) )
											}

									});

			}

			case GET_MANY_REFERENCE: {

					const { target, id } = params;
					const { field, order } = params.sort;
					return collection(db, resource)
									.where(target, "==", id)
									.orderBy(field, order.toLowerCase())
									.get()
									.then( QuerySnapshot =>
											{
													return {
															data : QuerySnapshot.docs.map( DocumentSnapshot => getDataWithId(DocumentSnapshot) ),
															total : QuerySnapshot.docs.length
													}
											}
									);

			}

			default: {
					throw new Error(`Unsupported Data Provider request type ${type}`);
			}
	}

};

/**
 * Ultra simple authentication provider
 *
 * @param {string} type Request type, e.g AUTH_LOGI
 * @param {Object} params Request parameters. Includes login and pwd
 * @returns {Promise} the Promise for a data response
 */
 export const firebaseAuthProvider = (type, params) => {
	if (type === AUTH_LOGIN) {
			const { username, password } = params;
			return auth()
									.signInWithEmailAndPassword(username, password)
									.catch( (error) => { throw new Error({ message:error.message, status: 401}) } )
	}

	if (type === AUTH_LOGOUT) {
			return auth().signOut()
					.catch( (error) => { throw new Error({ message:error.message, status: 500}) } );
	}

	if (type === AUTH_CHECK) {
			return auth().currentUser ? Promise.resolve() : Promise.reject();
	}

	if (type === AUTH_GET_PERMISSIONS) {
			// Try to find a "user" collection and return the role attribute
			return collection(db, "user")
					.doc(auth().currentUser)
					.then( doc => {
							if (doc.exists) {
									return doc.data().role;
							} else {
									return 'user'
							}
					})
					.catch( error => {
							return 'user'
					});
	}

	return Promise.resolve();
}