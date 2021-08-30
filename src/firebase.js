import * as app from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from './config';
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


class Firebase {
  constructor() {
    this.app = app.initializeApp(config);

    this.db = getFirestore();
    this.storage = getStorage();
  }

  createPost = (newPost) => {
    return addDoc(collection(this.db, "posts"), newPost);
  }

  getPosts = async() => {
    const q = query(collection(this.db, "posts"));
    const querySnapshot = await getDocs(q);

    var posts = []
    querySnapshot.forEach((doc) => {
      var post = doc.data()
      post._id = doc.id;
      posts.push(post)
    });
    return posts
  }

  fetchImage = (name) => {
    return getDownloadURL(ref(this.storage, name))
  }
}

export default new Firebase();
