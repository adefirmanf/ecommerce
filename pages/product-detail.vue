<template>
  <div>
    <Header></Header>
    <ProductDetail :product="product"></ProductDetail>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import Header from "~/components/Header.vue";
import ProductDetail from "~/components/ProductDetail.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    ProductDetail,
    Footer
  },
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    this.product = this.$store.getters.GET_PRODUCT_BY_ID;
    console.log(this.product);
  }
};
</script>
<style>
</style>