<template>
  <div class="mt-3">
    <img class="card-border" :src="castImage" v-if="castImage" />
    <div v-else class="card">
      <h3>Image Not Available</h3>
    </div>
    <div class="mt-2 ">
      <span class=" cast-person-name text-white">
        {{ cast.person.name }}
      </span>
      <div class="text-warning">as</div>
      <span class="text-white cast-character-name">
        {{ cast.character.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCasts",
  props: ["cast"],
  data() {
    return {};
  },
  computed: {
    castImage() {
      if (this.cast.character.image) {
        return (
          this.cast.character.image.medium || this.cast.character.image.original
        );
      }
      if (this.cast.person.image) {
        return this.cast.person.image.medium || this.cast.person.image.original;
      }
      return null;
    }
  }
};
</script>
