<template>
  <div id="app">
    <div class="container-fluid">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
#app {
  text-align: center;
  background-color: rgb(24, 27, 59);
}
</style>
