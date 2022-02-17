<template>
  <div>
    <DisplayRoom
      v-for="room in roomsList"
      :name="room.data().name"
      :key="room.id"
    >
    </DisplayRoom>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/database";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot
} from "firebase/firestore";

import DisplayRoom from "./DisplayRoom";

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
const roomsCol = collection(db, "rooms");

async function getRooms() {
  const roomsSnapshot = await getDocs(roomsCol);
  const roomsList = roomsSnapshot.docs;
  // const roomsList = roomsSnapshot.docs.map((doc) => doc.data());
  return roomsList;
}

function subscribeToRoomUpdates(onUpdate){
  onSnapshot(roomsCol, (rooms) => {
    onUpdate(rooms.docs)
  })
}

export default {
  components: {
    DisplayRoom,
  },
  data() {
    const roomsList = [];
    return {
      roomsList,
    };
  },
  setup() {},
  mounted() {
    subscribeToRoomUpdates((rooms) => {
        this.roomsList = rooms;
    });
  },
};
</script>
