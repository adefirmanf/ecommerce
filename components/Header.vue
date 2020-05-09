<template>
  <div class="always-on-top">
    <Menubar @searchProduct="searchProduct"></Menubar>
    <!-- <Navbar></Navbar> -->
  </div>
</template>

<script>
import Menubar from "~/components/Header/Menubar.vue";
import Navbar from "~/components/Header/Navbar.vue";

export default {
  components: {
    Menubar,
    Navbar
  },
  data() {
    return {
      products: [],
      totalCarts: 1
    };
  },
  mounted() {},
  methods: {
    async searchProduct(data) {
      this.$router.push({
        path: "product",
        query: { search: data }
      });
    }
  }
};
</script>
<style>
.always-on-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
  background-color: white;
}
</style>