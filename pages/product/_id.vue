  <template>
  <div>
    <Header></Header>
    <ProductDetail :product="product" @addToCart="addToCart" :similiarProduct="similiarProduct"></ProductDetail>
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
      product: {},
      similiarProduct: []
    };
  },
  async created() {
    const [merchant, id, sku] = this.$route.params.id.split("_");
    const payload = {
      merchant: {
        name: merchant,
        productId: id,
        sku: sku
      }
    };
    // TODO : GETTING FROM ROUTE NAME
    //Avoid the null object, we should assigned to this.product from pre-render API response
    // this.product = this.$store.getters.GET_PRODUCT_BY_ID;

    //Give the brief of moment to fetch detail product
    await this.$store.dispatch("GET_DETAIL_PRODUCT", payload);

    //And re-assign the this.product
    this.product = this.$store.getters.GET_PRODUCT_BY_ID;
    try {
      await this.$store.dispatch("GET_DATA_PRODUCTS", {
        search: this.product.name,
        merchant: "shopee"
      });
    } catch (err) {}
    this.similiarProduct = this.$store.getters.GET_SIMILIAR_PRODUCT;
  },
  async mounted() {},
  methods: {
    addToCart(data) {
      this.$store.commit("setCarts", data);
    },
    changeMerchant(data) {}
  }
};
</script>
<style>
</style>