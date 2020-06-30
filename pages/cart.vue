<template>
  <div>
    <Header></Header>
    <CartDetail :carts="cartList" :price="price"></CartDetail>
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
  data() {
    return {
      test: []
    };
  },
  async created() {
    await this.$store.dispatch("GET_CARTS");
  },
  computed: {
    cartList() {
      return this.$store.getters.GET_CARTS_BY_GROUP_QTY;
    },
    price() {
      return this.$store.getters.GET_CARTS.map(a => a.price).reduce(
        (a, b) => a + b
      );
    }
  }
};
</script>