<template>
  <div>
    <Header></Header>
    <CartDetail :carts="getCarts"></CartDetail>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import Header from "~/components/Header.vue";
import CartDetail from "~/components/CartDetail.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    CartDetail,
    Footer
  },
  computed: {
    getCarts() {
      return this.$store.getters.GET_CARTS;
    }
  }
};
</script>