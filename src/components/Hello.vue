<template>
  <div class="hello">
    <hr />
    <p>
      <b
        >You have entered the Safety Dungeon. We secretly added a new room
        (check the console)</b
      >
    </p>
    <div><MakeRooms /></div>
    <hr />
    <!-- <h1>{{ msg }}</h1> -->
    <p>
      <b>There are many rooms to explore. Refresh to see the secret room.</b>
    </p>
    <div><GetRooms /></div>
  </div>
</template>

<script>
import GetRooms from "./GetRooms";
import MakeRooms from "./MakeRooms";

export default {
  name: "hello",
  components: {
    GetRooms,
    MakeRooms,
  },
  data() {
    return {};
  },
};
</script>
