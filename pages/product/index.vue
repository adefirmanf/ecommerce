<template>
  <div>
    <Header></Header>
    <ProductListSearch :products="products" :loaded="loaded" @productSelected="setProduct"></ProductListSearch>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import Header from "~/components/Header.vue";
import ProductListSearch from "~/components/ProductListSearch.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    ProductListSearch,
    Footer
  },
  data() {
    return {
      products: [],
      loaded: false,
      filter: {
        merchant: [],
        priceRange: {
          min: 0,
          max: 0
        },
        rating: []
      }
    };
  },
  async mounted() {
    await this.$store.dispatch("GET_DATA_PRODUCTS", {
      search: this.$route.query.search,
      merchant: "shopee"
    });
    this.loaded = true;
    this.products = this.$store.getters.GET_ALL_PRODUCTS;
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
