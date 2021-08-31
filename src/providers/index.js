import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';
import firebase from 'firebase';
import firebaseConfig from '../config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
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

export { authProvider, dataProvider }
