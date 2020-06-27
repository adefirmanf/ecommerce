<template>
  <section class="section-name padding-y-sm">
    <div class="row">
      <div class="container">
        <!-- sect-heading -->

        <div class="row" v-if="loaded">
          <!-- Set loop in here -->
          <!-- <div v-if="loaded"> -->
          <div
            class="col-md-2"
            v-for="list in productList"
            :key="list.href"
            @click="selectProduct(list)"
          >
            <div
              :href="
                'product/' +
                  list.merchant.name +
                  '_' +
                  list.merchant.productId +
                  '_' +
                  list.merchant.sku
              "
              class="card card-product-grid"
            >
              <a
                :href="
                  'product/' +
                    list.merchant.name +
                    '_' +
                    list.merchant.productId +
                    '_' +
                    list.merchant.sku
                "
                class="img-wrap custom-padding"
                v-lazy-container="{ selector: 'img', loading: 'lazy-load.png' }"
                v-on:click.prevent
              >
                <img :data-src="list.img[0]" />
              </a>
              <figcaption class="info-wrap">
                <a
                  :href="
                    'product/' +
                      list.merchant.name +
                      '_' +
                      list.merchant.productId +
                      '_' +
                      list.merchant.sku
                  "
                  class="title"
                >{{ list.name }}</a>
                <div class="price mt-1">Rp.{{ list.price.toLocaleString() }}</div>

                <img
                  v-if="list.merchant.name == 'blibli'"
                  src="~/assets/img/blibli.png"
                  class="img-xs"
                />
                <img v-else src="~/assets/img/shopee2.png" class="img-xs" />
                <br />
                <ul class="rating-stars">
                  <li :style="{ width: 20 * list.review.rating + '%' }" class="stars-active">
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
                <small class="text-muted">{{ list.review.count }}</small>
                <!-- price-wrap.// -->
              </figcaption>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <!-- Lazy load API !-->
        <div class="row" v-else>
          <div class="col-md-2" v-for="(data, index) in totalLoadedImg" :key="index">
            <div href="#" class="card card-product-grid">
              <a href="#" class="img-wrap custom-padding">
                <img src="~/assets/img/lazy-load.png" />
              </a>
            </div>
          </div>
        </div>
        <!-- row.// -->
      </div>
    </div>
    <!-- container // -->
  </section>
</template>
<script>
export default {
  name: "HomeItems",
  props: {
    title: {
      type: String,
      required: true
    },
    productList: {
      type: Array,
      required: true
    },
    loaded: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      totalLoadedImg: 12,
      blibliImg: "~/assets/img/blibli.png",
      shopeeImg: "~/assets/img/shopee.png"
    };
  },
  methods: {
    selectProduct(data) {
      this.$emit("productSelected", data);
    }
  }
};
</script>
<style scoped>
.img-wrap.custom-padding {
  padding: 4px;
  background-color: #f8f9fa;
}
.img-xs {
  height: auto !important;
}
</style>
