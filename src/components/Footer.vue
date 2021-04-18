<template>
  <b-container fluid class="footer">
    Copyright &copy; {{ getFormattedDate() }} —
    <strong>Tv-show application</strong>
  </b-container>
</template>

<script>
import formattedDate from "../filters/dateFilter.js";
export default {
  name: "Footer",
  methods: {
    getFormattedDate() {
      return formattedDate();
    }
  }
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: auto;
  background-color: rgb(234, 238, 240);
  color: #000;
  text-align: center;
  font-size: small;
}
</style>
