<template>
  <div>
    <Header></Header>
    <Shipping :carts="cartList"></Shipping>
    <Footer></Footer>
  </div>
</template>

<script>
import Shipping from "~/components/Shipping.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Shipping,
    Footer,
    Header
  },
  data() {
    return {
      price: 0,
      test: []
    };
  },
  async created() {
    await this.$store.dispatch("GET_CARTS");
  },
  computed: {
    cartList() {
      return this.$store.getters.GET_CARTS_BY_GROUP_QTY;
    }
  }
};
</script>
