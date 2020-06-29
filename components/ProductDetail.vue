<template>
  <section class="section-main bg padding-y margin-y">
    <div class="card" v-if="Object.keys(product).length > 1">
      <div class="row no-gutters">
        <aside class="col-md-6">
          <article class="gallery-wrap gallery-padding">
            <div class="img-big-wrap">
              <a href="#">
                <img :src="renderImg" />
              </a>
            </div>
            <!-- img-big-wrap.// -->
            <div class="thumbs-wrap">
              <a
                href="#"
                class="item-thumb"
                v-for="(img, index) in product.img"
                :key="index"
                @click.prevent="changeMainImg(index)"
              >
                <div>
                  <img :src="img.thumbnail || img" />
                </div>
              </a>
            </div>
            <!-- thumbs-wrap.// -->
          </article>
          <!-- gallery-wrap .end// -->
        </aside>
        <main class="col-md-6 border-left">
          <article class="content-body">
            <h4 class="title">{{ product.name }}</h4>

            <div class="rating-wrap my-3">
              <ul class="rating-stars">
                <li style="width:80%" class="stars-active">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </li>
              </ul>
              <small class="label-rating text-muted">132 reviews</small>
              <small class="label-rating text-success">
                <i class="fa fa-clipboard-check"></i> 154 orders
              </small>
              <small class="label-rating text-success">
                <img
                  v-if="product.merchant.name == 'blibli'"
                  src="~/assets/img/blibli.png"
                  class="img-xs"
                />
                <img v-else src="~/assets/img/shopee2.png" class="img-xs" />
              </small>
            </div>
            <!-- rating-wrap.// -->

            <div class="mb-3">
              <var class="price h4">Rp.{{ parseInt(product.price).toLocaleString() }}</var>
            </div>

            <p v-html="renderDescription(product.description)" />

            <hr />
            <div class="form-row">
              <div class="form-group col-md">
                <a href class="text-dark">
                  <div class="card merchant-list selected">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-1">
                          <img src="~/assets/img/blibli.png" class="img-fluid" />
                        </div>
                        <div class="col-md-9">
                          {{ product.name }}
                          <div class="price">Rp.{{ parseInt(product.price).toLocaleString() }}</div>
                        </div>
                        <div class="col-md-3"></div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href class="text-dark">
                  <div class="card merchant-list">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-1">
                          <img src="~/assets/img/shopee.png" class="img-fluid" />
                        </div>
                        <div class="col-md-9" v-if="similiarProduct.length > 1">
                          {{ similiarProduct[0].name }}
                          <div class="price" v-if="similiarProduct.length > 1">
                            Rp.{{
                            parseInt(
                            similiarProduct[0].price
                            ).toLocaleString()
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <!-- col.// -->
            </div>
            <!-- row.// -->
            <button @click.prevent="addToCartRedirect(product)" class="btn btn-primary">Buy now</button>
            <button @click.prevent="addToCart(product)" class="btn btn-outline-primary">
              <span class="text">Add to cart</span>
              <i class="fas fa-shopping-cart"></i>
            </button>
          </article>
          <!-- product-info-aside .// -->
        </main>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
  </section>
</template>
<script>
import Loading from "./Loading";
export default {
  components: {
    Loading
  },
  name: "ProductDetail",
  props: {
    product: {
      type: Object,
      required: true
    },
    similiarProduct: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      defaultPositionImg: 0
    };
  },
  created() {},
  computed: {
    renderImg() {
      return (
        this.product.img[this.defaultPositionImg].full ||
        this.product.img[this.defaultPositionImg]
      );
    }
  },
  mounted() {},
  methods: {
    addToCart(data) {
      this.$emit("addToCart", data);
    },
    addToCartRedirect(data) {
      this.$emit("addToCartRedirect", data);
    },
    renderDescription(data) {
      return data;
    },
    changeMainImg(position) {
      this.defaultPositionImg = position;
    }
  }
};
</script>
<style scoped>
.h4 {
  font-size: 26px !important;
}
.merchant-list {
  margin-top: 10px;
  margin-bottom: 10px;
}
.selected {
  opacity: 0.4;
}
.img-xs {
  height: auto !important;
}
</style>
