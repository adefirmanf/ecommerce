<template>
  <div>
    <Header></Header>
    <SectionHeader></SectionHeader>
    <SectionSpecial></SectionSpecial>
    <SectionMenuBar></SectionMenuBar>
    <RecommendedProducts :productList="productList" :loaded="loaded" @productSelected="setProduct"></RecommendedProducts>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header.vue";
import SectionHeader from "~/components/SectionHeader.vue";
import SectionSpecial from "~/components/SectionSpecial.vue";
import SectionMenuBar from "~/components/SectionMenuBar.vue";
import RecommendedProducts from "~/components/RecommendedProducts.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    SectionHeader,
    SectionSpecial,
    SectionMenuBar,
    RecommendedProducts,
    Footer
  },
  data() {
    return {
      loaded: false
    };
  },
  async mounted() {
    await this.$store.dispatch("GET_DATA_PRODUCTS", {
      search: "kaos",
      merchant: "blibli"
    });
    this.loaded = true;
  },
  computed: {
    productList() {
      return this.$store.getters.GET_ALL_PRODUCTS_RECOMMENDED;
    }
  },
  methods: {
    async setProduct(data) {
      this.$store.commit("storeProduct", data);
      this.$router.push({
        path: `/product/${data.merchant.name}_${data.merchant.productId}_${data.merchant.sku}/`
      });
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Inter", Arial, "Helvetica Neue", "Segoe UI", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  font-size: 91%;
  line-height: 1.5;
  color: #343a40;
  text-align: left;
  background-color: #fff;
}
figcaption > a {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

