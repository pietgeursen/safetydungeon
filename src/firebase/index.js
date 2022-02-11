import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebase/auth";
import "firebase/database";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyB3_ktYCDAvZR8ViEgmkKT8CDMPm1Q53Zo",
  authDomain: "safetydungeon.firebaseapp.com",
  projectId: "safetydungeon",
  storageBucket: "safetydungeon.appspot.com",
  messagingSenderId: "156587932337",
  appId: "1:156587932337:web:116ae943f4f2ff92790090",
};

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const db = getFirestore(app);

async function makeRoom(db) {
  const roomsCol = collection(db, 'rooms');
  await addDoc(roomsCol, {
    name: "pit trap",
  });
  console.log("Added room");
}

// makeRoom(db)

const authUiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [{
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    customParameters: {
      prompt: "select_account",
    },
  }, ],
};

const authUi = new firebaseui.auth.AuthUI(auth);

export default app;
export {
  auth,
  authUi,
  authUiConfig
};