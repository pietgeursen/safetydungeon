<template>
  <div id="app">
    <template v-if="$store.state.user">
      <h2>You are logged in!</h2>
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
  </div>
</template>

<script>
import Auth from './Auth';

export default {
  name: 'app',
  components: {
    Auth,
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT');
    },
  },
  mounted() {
    this.$store.dispatch('AUTH_CHECK');
  },
};
</script>
