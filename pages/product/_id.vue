  <template>
  <div>
    <Header></Header>
    <ProductDetail
      :product="product"
      @addToCart="addToCart"
      @addToCartRedirect="addToCartRedirect"
      :similiarProduct="similiarProduct"
    ></ProductDetail>
    <modal name="login" height="auto" :scrollable="true" width="30%">
      <div class="card">
        <Login></Login>
      </div>
    </modal>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import Header from "~/components/Header.vue";
import Login from "~/components/Login.vue";
import ProductDetail from "~/components/ProductDetail.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Login,
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
    addToCartRedirect(data) {
      if (!this.$store.getters.GET_AUTH_STATUS) {
        this.$modal.show("login");
      }
      this.$store.commit("setCarts", data);
    },
    changeMerchant(data) {}
  }
};
</script>
<style>
</style>