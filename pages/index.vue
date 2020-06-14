<template>
  <div>
    <Header></Header>
    <SectionHeader></SectionHeader>
    <PromoList></PromoList>

    <!-- <SectionMenuBar></SectionMenuBar> -->
    <RecommendedProducts :productList="productList" :loaded="loaded" @productSelected="setProduct"></RecommendedProducts>
    <FlashSale></FlashSale>

    <div class="container">
      <header class="section-heading heading-line">
        <h3 class="title-section">You'll Want These</h3>
      </header>
      <vue-tabs type="pills" active-tab-color="#ff9017">
        <v-tab title="Fashion Pria">
          <CategoryProducts
            :title="title[0]"
            :productList="productByCategoryList"
            :loaded="loaded"
            @productSelected="setProduct"
          ></CategoryProducts>
        </v-tab>
        <v-tab title="Fashion Wanita">
          <CategoryProducts
            :title="title[1]"
            :productList="productByCategoryList"
            :loaded="loaded"
            @productSelected="setProduct"
          ></CategoryProducts>
        </v-tab>
        <v-tab title="Tas Wanita">
          <CategoryProducts
            :title="title[1]"
            :productList="productByCategoryList"
            :loaded="loaded"
            @productSelected="setProduct"
          ></CategoryProducts>
        </v-tab>
        <v-tab title="Tas Pria">
          <CategoryProducts
            :title="title[1]"
            :productList="productByCategoryList"
            :loaded="loaded"
            @productSelected="setProduct"
          ></CategoryProducts>
        </v-tab>
        <v-tab title="Sepatu Wanita">
          <CategoryProducts
            :title="title[1]"
            :productList="productByCategoryList"
            :loaded="loaded"
            @productSelected="setProduct"
          ></CategoryProducts>
        </v-tab>
      </vue-tabs>
    </div>
    <BrandList></BrandList>
    <GuestBook></GuestBook>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header.vue";
import SectionHeader from "~/components/SectionHeader.vue";
import PromoList from "~/components/PromoList.vue";
import SectionMenuBar from "~/components/SectionMenuBar.vue";
import RecommendedProducts from "~/components/RecommendedProducts.vue";
import FlashSale from "~/components/FlashSale.vue";
import CategoryProducts from "~/components/CategoryProductList.vue";
import BrandList from "~/components/BrandList.vue";
import Footer from "~/components/Footer.vue";
import GuestBook from "~/components/GuestBook.vue";

export default {
  components: {
    Header,
    SectionHeader,
    PromoList,
    SectionMenuBar,
    FlashSale,
    RecommendedProducts,
    CategoryProducts,
    BrandList,
    Footer,
    GuestBook
  },
  data() {
    return {
      title: ["Fashion Pria", "Fashion Wanita", "Sepatu", "Tas"],
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
    },
    productByCategoryList() {
      return this.$store.getters.GET_ALL_PRODUCTS_CATEGORIES;
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
.heading-line {
  position: relative;
}
.vue-tabs .tab-content {
  padding-left: 0px !important;
}
</style>
