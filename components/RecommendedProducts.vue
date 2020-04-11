<template>
  <section class="section-name padding-y-sm">
    <div class="container">
      <header class="section-heading">
        <a href="#" class="btn btn-outline-primary float-right">See all</a>
        <h3 class="section-title">Recommended Items</h3>
      </header>
      <!-- sect-heading -->

      <div class="row">
        <!-- Set loop in here -->
        <div
          class="col-md-3"
          v-for="list in productList"
          :key="list.href"
          @click="selectProduct(list)"
        >
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap">
              <img :src="list.img[0]" />
            </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">{{list.name}}</a>
              <div class="price mt-1">{{list.price}}</div>
              <!-- price-wrap.// -->
            </figcaption>
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
    }
  },
  methods: {
    selectProduct(data) {
      this.$emit("productSelected", data);
    }
  }
};
</script>