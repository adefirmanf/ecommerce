<template>
  <div>
    <Header></Header>
    <Invoice :address="address" :carts="carts" :totalShipping="totalShipping"></Invoice>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import Header from "~/components/Header.vue";
import Invoice from "~/components/Invoice.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Invoice,
    Footer
  },
  data() {
    return {};
  },
  computed: {
    address() {
      return this.$store.getters.GET_ADDRESS;
    },
    carts() {
      return this.$store.getters.GET_CARTS_BY_GROUP_QTY;
    },
    totalShipping() {
      return this.$store.getters.GET_TOTAL_PRICE_COURIER;
    }
  }
};
</script>