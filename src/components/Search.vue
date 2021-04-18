<template>
  <b-container fluid class="search">
    <b-row class="ml-3">
      <b-button variant="warning" class="mb-4" @click="$router.go(-1)">
        <b-icon icon="arrow-left"></b-icon>
      </b-button>
    </b-row>
    <template v-if="shows.length">
      <div>
        <h2 class="text-warning">
          <strong
            >Search result of show : {{ this.$route.params.query }}
          </strong>
        </h2>
        <b-row>
          <b-col lg="3" md="4" sm="6" v-for="show in shows" :key="show.id">
            <card :show="show"> </card>
          </b-col>
        </b-row>
      </div>
    </template>
    <template v-else>
      <div class="d-flex justify-content-center mb-3 spin">
        <b-spinner class="spinner" variant="warning" type="grow"></b-spinner>
      </div>
    </template>
  </b-container>
</template>

<script>
import Card from "../components/Card.vue";
import { searchShows } from "../service/tvshow.api.js";
export default {
  name: "Search",
  components: {
    Card
  },
  data() {
    return {
      shows: []
    };
  },
  created() {
    this.getSearchedShows();
  },
  methods: {
    async getSearchedShows() {
      this.shows = (await searchShows(this.$route.params.query)).data.map(
        shows => shows.show
      );
      if (this.shows.length == 0) {
        this.$router.push({
          name: "not-found"
        });
      }
    }
  },
  watch: {
    $route() {
      this.getSearchedShows();
    }
  }
};
</script>

<style scoped>
.search {
  background-color: rgb(24, 27, 59);
}
.spinner {
  width: 4rem;
  height: 4rem;
  margin-top: 8rem;
}
.spin {
  min-height: 100vh;
}
</style>
