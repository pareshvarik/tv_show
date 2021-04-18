<template>
  <b-container fluid class="header">
    <b-navbar toggleable="sm">
      <router-link to="/">
        <b-navbar-brand class="text-white navbar ml-1">
          <b-icon icon="camera-reels" class="navbar-icon"></b-icon>
          TvShow
        </b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon
            v-if="expanded"
            class="text-white"
            icon="chevron-bar-up"
          ></b-icon>
          <b-icon v-else class="text-white" icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-row>
              <b-col>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                  v-model="searchQuery"
                ></b-form-input>
              </b-col>
              <b-button
                size="sm"
                class="bg-dark border-dark  btn-search"
                @click="search()"
                ><b-icon icon="search" class="text-white search-icon"></b-icon
              ></b-button>
            </b-row>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "Search",
        params: {
          query: this.searchQuery
        }
      });
      this.searchQuery = "";
    }
  }
};
</script>

<style scoped>
.name {
  margin-left: 10px;
}
.header {
  background: rgb(24, 27, 59);
}
.navbar-icon {
  width: 2rem;
  height: 2rem;
}
.search-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
