<template>
  <div class="home" fluid>
    <div class="ml-4 pl-1">
      <b-button
        variant="warning"
        class="mb-4"
        @click="$router.replace({ name: 'Home' })"
      >
        <b-icon icon="house"></b-icon>
      </b-button>
    </div>
    <div class="heading">
      <h2>
        Tv Show your are searching for is not found !!!!!!!!
      </h2>
    </div>
  </div>
</template>

<style scoped>
.heading {
  text-align: center;
  padding: 5px;
  color: rgb(248, 250, 250);
  min-height: 100vh;
}
.home {
  background-color: rgb(24, 27, 59);
}
</style>
