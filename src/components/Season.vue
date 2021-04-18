<template>
  <div class="text-color mb-3 mt-4">
    <img
      class="card-border"
      :src="season.image.medium || season.image.original"
      v-if="season.image"
    />
    <div v-else class="card">
      <h3>Image Not Available</h3>
    </div>
    <div class="mt-1 text-white" v-if="season.number">
      Season {{ season.number }}
    </div>
    <div class="mt-1 text-white" v-else>NA</div>
  </div>
</template>

<script>
export default {
  props: ["season"]
};
</script>

<style scoped>
.heading {
  color: #00d0d0;
}
.star-icon {
  color: #c25406;
}
img:hover {
  opacity: 0.8;
}
.card {
  width: 209px;
  height: 300px;
}
</style>
