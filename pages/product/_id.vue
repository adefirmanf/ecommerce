  <template>
  <div>
    <Header></Header>
    <ProductDetail
      :product="product"
      @addToCart="addToCart"
      @addToCartRedirect="addToCartRedirect"
      :similiarProduct="similiarProduct"
    ></ProductDetail>
    <Footer></Footer>
    <modal name="login" height="auto" width="30%" :scrollable="true">
      <div class="card">
        <div class="alert alert-warning" role="alert">You need login before purchasing from our site</div>
        <Login @okLogin="okLogin"></Login>
        <div class="card-footer">
          <a href>No, thanks. I will purchase from original website</a>
        </div>
      </div>
    </modal>
  </div>
  <!-- section-header.// -->
</template>

<script>
import Header from "~/components/Header.vue";
import Login from "~/components/Login.vue";
import ModalWhenNotLoggedIn from "~/components/ModalWhenNotLoggedIn.vue";
import ProductDetail from "~/components/ProductDetail.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Login,
    ModalWhenNotLoggedIn,
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
      this.$store.commit("setCarts", data);
      if (!this.$store.getters.GET_AUTH_STATUS) {
        this.$modal.show("login");
      } else {
        this.$router.push("../../cart");
      }
    },
    changeMerchant(data) {},
    okLogin() {
      this.$modal.hide("login");
      this.$router.push("../../cart");
    }
  }
};
</script>
<style>
</style>