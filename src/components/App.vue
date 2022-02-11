<template>
  <div id="app">
    <template v-if="$store.state.user">
      <p>You are logged in!</p>
      <div class="logout">
        <button @click="logout">Logout</button>
      </div>
      <router-view></router-view>
    </template>
    <template v-else>
      <div class="login">
        <Auth />
      </div>
    </template>
    <!-- <hr />
    <h2>Display multiple rooms</h2>
    <div><GetRooms /></div> -->
  </div>
</template>

<script>
import Auth from "./Auth";

import DisplayRoom from "./DisplayRoom";
import GetRooms from "./GetRooms";

export default {
  name: "app",
  components: {
    Auth,
    DisplayRoom,
    GetRooms,
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
    },
  },
  mounted() {
    this.$store.dispatch("AUTH_CHECK");
  },
};
</script>
