<template>
  <div class="hello">
    <hr />
    <p>
      <b>You have entered the Safety Dungeon. Would you like to add a room?</b>
    </p>
    <div><MakeRooms /></div>
    <hr />
    <p>
      <b>There are many rooms to explore. Refresh to see your new room.</b>
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
