<template>
  <div class="hello">
    <hr />
    <!-- <h1>{{ msg }}</h1> -->
    <p>
      <b
        >You have entered the Safety Dungeon. There are many rooms to
        explore:</b
      >
    </p>
    <div><GetRooms /></div>
  </div>
</template>

<script>
import GetRooms from "./GetRooms";

export default {
  name: "hello",
  components: {
    GetRooms,
  },
  data() {
    return {};
  },
};
</script>
