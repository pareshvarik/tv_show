<template>
  <div class="mb-3 mt-4">
    <router-link
      class="heading"
      :to="{
        name: 'ShowDetail',
        params: { id: show.id },
      }"
    >
      <img
        class="card-border"
        :src="show.image.medium || show.image.original"
        v-if="show.image"
      />
      <div v-else class="card">
        <h2 class="text-dark">Image Not Available</h2>
      </div>

      <div class="mt-1" v-if="show.name">
        {{ show.name }}
        <div class="mt-1">
          <span>
            <b-icon icon="star-fill" class="star-icon mx-1"></b-icon>
          </span>
          <span class="text show-average" v-if="show.rating.average">
            {{ show.rating.average }}
          </span>
          <span v-else class="text"> NA </span>
          <span class="mx-2 text">|</span>
          <span>
            <b-icon icon="calendar3" class="mx-1 heading"></b-icon>
          </span>
          <span class="text show-premiered" v-if="show.premiered">
            {{ show.premiered }}
          </span>
          <span v-else class="text"> NA </span>
          <div class="text-white text-sm show-genres">
            {{ show.genres.join(", ") }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["show"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 209px;
  height: 300px;
}
.text {
  color: #f7f7f4;
}
.heading {
  color: #f7f7f4;
}
.star-icon {
  color: #fffb00;
}

</style>
