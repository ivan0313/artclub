import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';
import firebase from 'firebase';
import firebaseConfig from './config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const authProvider = FirebaseAuthProvider(firebaseConfig);
export const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  // watch: ['posts'];
  // dontwatch: ['comments'];
  persistence: 'local',
  // disableMeta: true
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});

// class FirebaseDataProviderModified {
//   constructor(authProvider, dataProvider) {
//     this.authProvider = authProvider;
//     this.dataProvider = dataProvider;
//   }

//   getUserWithAuth = ()

//   getList = async(resource, params) => {
//     console.debug("Running getList", resource, params);
//     if (resource === 'users') {
//       const userData = await this.dataProvider.getList(resource, params)
//       return Promise.all(userData.map())
//       // {
//       //   data: res.map( doc => this.getUserWithAuth(doc.data, res.users) ),
//       //   total: res.total,
//       // }

//     } else {
//       return this.dataProvider.getList(resource, params)
//     }
//   }

// }

// export const dataProviderModified = new FirebaseDataProviderModified(authProvider, dataProvider);
