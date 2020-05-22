<template>
  <header class="section-header">
    <section class="header-main border-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2 col-4">
            <a href="/" class="brand-wrap">
              <img class="logo" src="logocaribaju-cropped.png" />
            </a>
          </div>
          <div class="col-lg col-sm col-md col-6 flex-grow-0">
            <div
              class="category-wrap dropdown show d-inline-block float-md-right"
            >
              <button
                type="button"
                class="btn dropdown-toggle"
                data-toggle="dropdown show"
                aria-expanded="false"
              >
                <i class="fa fa-bars"></i> Kategori
              </button>
              <div class="dropdown-menu" x-placement="bottom-start">
                <a class="dropdown-item" href="#"
                  >Machinery / Mechanical Parts / Tools</a
                >
                <a class="dropdown-item" href="#"
                  >Consumer Electronics / Home Appliances</a
                >
                <a class="dropdown-item" href="#">Auto / Transportation</a>
                <a class="dropdown-item" href="#"
                  >Apparel / Textiles / Timepieces</a
                >
                <a class="dropdown-item" href="#"
                  >Home &amp; Garden / Construction / Lights</a
                >
                <a class="dropdown-item" href="#"
                  >Beauty &amp; Personal Care / Health</a
                >
              </div>
            </div>
            <!-- category-wrap.// -->
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group w-100">
              <input
                type="text"
                class="form-control"
                :placeholder="'Cari ' + placeholder"
                v-model="product"
              />
              <div class="input-group-append">
                <button @click="search()" class="btn btn-light" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
            <!-- search-wrap .end// -->
          </div>
          <!-- col.// -->
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="widgets-wrap float-md-right">
              <div class="widget-header mr-3 dropdown show">
                <a
                  href="#"
                  @click.prevent="cart"
                  class="icon icon-sm"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <i class="fa fa-shopping-cart"></i>
                </a>
                <span class="badge badge-pill badge-danger notify">{{
                  totalCart
                }}</span>
              </div>
              <div class="widget-header dropdown">
                <a
                  href="#"
                  @click.prevent="show"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="text">
                    <div class="icontext">
                      <div class="icon">
                        <i class="icon-sm fa fa-user"></i>
                      </div>
                      <div class="text">
                        <div v-if="email">{{ email }}</div>
                        <div v-if="!isAuth">
                          <small class="text-muted">Sign In / Join</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <!-- widgets-wrap.// -->
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- container.// -->
    </section>
    <!-- header-main .// -->
    <modal name="login2" height="auto" width="30%" :scrollable="true">
      <div class="card">
        <Login @okLogin="okLogin"></Login>
      </div>
    </modal>
  </header>
</template>

<script>
import Login from "~/components/Login.vue";
export default {
  components: {
    Login
  },
  data() {
    return {
      isAuth: false,
      randomPlaceholder: ["Baju Muslim", "Ransel", "Sandal Pria", "Gaun"],
      product: "",
      modal: {
        "dropdown-menu": true,
        "dropdown-menu-right": true,
        show: false
      }
    };
  },
  async created() {
    await this.$store.dispatch("GET_AUTH_AND_USER");
    await this.$store.dispatch("GET_CARTS");
  },
  async mounted() {
    this.isAuth = this.$store.getters.GET_AUTH_STATUS;
  },
  computed: {
    placeholder() {
      return this.randomPlaceholder[
        Math.floor(Math.random() * this.randomPlaceholder.length)
      ];
    },
    totalCart() {
      return this.$store.getters.GET_CARTS.length;
    },
    email() {
      const user = this.$store.getters.GET_USER.profile;
      return user.email || "Guest";
    }
  },
  methods: {
    show() {
      this.$modal.show("login2");
    },
    okLogin() {
      this.$modal.hide("login2");
    },
    search() {
      if (!this.product) {
        this.product = this.placeholder;
      }
      this.$emit("searchProduct", this.product);
    },
    cart() {
      if (this.isAuth) {
        this.$router.push("/cart");
      } else {
        this.$modal.show("login2");
      }
    }
  }
};
</script>
