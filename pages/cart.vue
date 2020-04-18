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
      cartList: [],
      price: 0
    };
  },
  mounted() {
    this.cartList = this.$store.getters.GET_CARTS;
    this.price = this.cartList.map(a => a.price).reduce((a, b) => a + b);
  },
  computed: {}
};
</script>