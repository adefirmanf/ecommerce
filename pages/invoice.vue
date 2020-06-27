<template>
  <div>
    <Header></Header>
    <Invoice :address="address" :carts="carts"></Invoice>
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
      let a = this.$store.getters.GET_ADDRESS;
      console.log("ADDRESS", a);
      return a;
    },
    carts() {
      let a = this.$store.getters.GET_CARTS_BY_GROUP_QTY;
      console.log("CARTS", a);
      return a;
    }
  }
};
</script>