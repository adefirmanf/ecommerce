<template>
  <div class="always-on-top">
    <Menubar :totalCarts="totalCarts" @searchProduct="searchProduct"></Menubar>
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
      totalCarts: 0
    };
  },
  mounted() {
    this.$store.dispatch("GET_CARTS");
    this.totalCarts = this.$store.getters.GET_CARTS.length;
  },
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