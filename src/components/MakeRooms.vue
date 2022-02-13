<template>
  <div>
    <!-- interface to make a room -->
    <form @submit.prevent="submitRoom(room)">
      <input type="room" required v-model="room" />
      <div class="submit"><button>Make a new room</button></div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
// import * as firebaseui from "firebaseui";
import "firebase/auth";
import "firebase/database";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

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

async function makeRoom(db, name) {
  const roomsCol = collection(db, "rooms");
  await addDoc(roomsCol, {
    name: name,
  });
  console.log("Sent room to db");
}

export default {
  components: {},
  methods: {
    submitRoom(name) {
      makeRoom(db, name).then(console.log("Room added"));
    },
  },
  data() {
    return {
      room: "",
    };
  },
  setup() {},
  mounted() {
    // makeRoom(db).then(console.log("Room added"));
  },
};
</script>
