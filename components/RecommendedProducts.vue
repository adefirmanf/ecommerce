<template>
  <section class="section-name padding-y-sm">
    <div class="container">
      <header class="section-heading">
        <a href="#" class="btn btn-outline-primary float-right">See all</a>
        <h3 class="section-title">Recommended Items</h3>
      </header>
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
          <div href="#" class="card card-product-grid">
            <a
              href="#"
              class="img-wrap custom-padding"
              v-lazy-container="{selector : 'img', loading: '/lazy-load.png'}"
            >
              <img :data-src="list.img[0]" />
            </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">{{list.name}}</a>
              <div class="price mt-1">Rp.{{list.price.toLocaleString()}}</div>
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
              <img src="/lazy-load.png" />
            </a>
          </div>
        </div>
      </div>
      <!-- row.// -->
    </div>
    <!-- container // -->
  </section>
</template>
<script>
export default {
  name: "HomeItems",
  props: {
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
      totalLoadedImg: 12
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
  padding: 2px;
  background-color: #f8f9fa;
}
</style>