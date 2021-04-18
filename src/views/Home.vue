<template>
  <b-container fluid class="home">
    <template v-if="popularShow.length > 0">
      <h3><strong>Popular Shows</strong></h3>
      <div>
        <b-row class="row">
          <b-col
            lg="2"
            md="4"
            sm="6"
            v-for="(popular, index) in popularShow"
            :key="index"
          >
            <card :show="popular"> </card>
          </b-col>
        </b-row>
      </div>
    </template>
    <template v-else>
      <div class="d-flex justify-content-center mb-3 spin">
        <b-spinner class="spinner" variant="warning" type="grow"></b-spinner>
      </div>
    </template>
    <template v-if="genres.length > 0">
      <div v-for="(genre, index) in genres" :key="index">
        <h3 class="mt-4">
          {{ genre.name }}
        </h3>
        <div>
          <b-row>
            <b-col
              lg="2"
              md="4"
              sm="6"
              v-for="(show, index) in genre.shows"
              :key="index"
            >
              <card :show="show"> </card>
            </b-col>
          </b-row>
        </div>
      </div>
    </template>
  </b-container>
</template>

<script>
import Card from "../components/Card.vue";
import { getAllShow } from "../service/tvshow.api.js";
export default {
  name: "Home",
  data() {
    return {
      shows: [],
      popularShow: []
    };
  },
  components: {
    Card
  },
  mounted() {
    getAllShow().then(({ data }) => {
      this.shows = data;
      this.popularShow = this.mostRatedShow(this.shows);
    });
  },
  computed: {
    genresTitle() {
      const gener = Array.from(
        new Set(this.shows.flatMap(show => show.genres))
      );
      return gener.sort();
    },
    genres() {
      return this.genresTitle.map(gener => {
        return {
          name: gener,
          shows: this.mostRatedShow(
            this.shows.filter(show => show.genres.includes(gener))
          )
        };
      });
    }
  },
  methods: {
    mostRatedShow(shows) {
      return shows
        .filter(show => show.rating.average)
        .sort((prevValue, nextValue) =>
          prevValue.rating.average < nextValue.rating.average ? 1 : -1
        )
        .slice(0, 10);
    }
  }
};
</script>
<style scoped>
.home {
  background: rgb(24, 27, 59);
}
h3 {
  color: rgb(255, 251, 5);
  padding-top: 10px;
  text-align: left;
  padding-left: 10px;
}

.popular {
  margin-top: 20px;
}
.spinner {
  width: 4rem;
  height: 4rem;
  margin-top: 8rem;
}
.spin {
  min-height: 100vh;
}
.row {
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
