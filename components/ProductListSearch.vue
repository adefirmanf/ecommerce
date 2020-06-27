<template>
  <section class="section-content padding-y margin-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-3">
          <div class="card">
            <!-- filter-group  .// -->
            <article class="filter-group">
              <header class="card-header">
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapse_2"
                  aria-expanded="true"
                  class="text-muted"
                >
                  <i class="icon-control fa fa-chevron-down"></i>
                  <h6 class="title">Merchants</h6>
                </a>
              </header>
              <div class="filter-content collapse show" id="collapse_2" style>
                <div class="card-body">
                  <label
                    class="custom-control custom-checkbox"
                    v-for="(merchant, i) in listMerchant"
                    :key="i"
                  >
                    <input
                      type="checkbox"
                      @click="filterByMerchant(merchant)"
                      :checked="merchant.active"
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">
                      {{merchant.alias}}
                      <!-- <b class="badge badge-pill badge-light float-right">{{120}}</b> -->
                    </div>
                  </label>
                </div>
                <!-- card-body.// -->
              </div>
            </article>
            <!-- filter-group .// -->
            <article class="filter-group">
              <header class="card-header">
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapse_3"
                  aria-expanded="true"
                  class="text-muted"
                >
                  <i class="icon-control fa fa-chevron-down"></i>
                  <h6 class="title">Price range</h6>
                </a>
              </header>
              <div class="filter-content collapse show" id="collapse_3" style>
                <div class="card-body">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Min</label>
                      <input class="form-control" placeholder="Rp" type="number" v-model="min" />
                      <small>Rp. {{min | formatNumber}}</small>
                    </div>
                    <div class="form-group text-right col-md-6">
                      <label>Max</label>
                      <input class="form-control" placeholder="Rp" type="number" v-model="max" />
                      <small>Rp. {{max | formatNumber}}</small>
                    </div>
                    <!-- <button @click="filterByPrice" class="btn btn-primary btn-block">Filter</button> -->
                  </div>
                  <!-- form-row.// -->
                </div>
                <!-- card-body.// -->
              </div>
            </article>
            <!-- filter-group .// -->
            <article class="filter-group">
              <header class="card-header">
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapse_4"
                  aria-expanded="true"
                  class="text-muted"
                >
                  <i class="icon-control fa fa-chevron-down"></i>
                  <h6 class="title">Rating</h6>
                </a>
              </header>
              <div class="filter-content collapse show" id="collapse_4" style>
                <div class="card-body">
                  <div class="form-group">
                    <ul class="rating-stars">
                      <li :style="{'width': 20*rate+'%'}" class="stars-active">
                        <a href v-for="(s, index) in initStars" :key="index">
                          <i class="fa fa-star" @click.prevent="rateUp(index)"></i>
                        </a>
                      </li>
                      <li>
                        <a href v-for="(s, index) in initStars" :key="index">
                          <i class="fa fa-star" @click.prevent="rateUp(index)"></i>
                        </a>
                      </li>
                    </ul>
                    <label>
                      <small class="label-rating text-muted">{{rate}}+</small>
                    </label>
                  </div>
                </div>
                <!-- card-body.// -->
              </div>
            </article>
            <!-- filter-group .// -->

            <!-- filter-group .// -->
          </div>
          <!-- card.// -->
        </aside>
        <!-- col.// -->
        <main class="col-md-9">
          <header class="border-bottom mb-4 pb-4">
            <div class="form-inline">
              <span class="mr-md-auto">
                {{ concatProducts.length }} Items found for
                <b>{{ this.$route.query.search }}</b>
              </span>
              <select class="mr-2 form-control">
                <option>Latest items</option>
                <option>Trending</option>
                <option>Most Popular</option>
                <option>Cheapest</option>
              </select>
              <div class="btn-group">
                <a
                  href="#"
                  class="btn btn-outline-secondary"
                  data-toggle="tooltip"
                  title
                  data-original-title="List view"
                >
                  <i class="fa fa-bars"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-outline-secondary active"
                  data-toggle="tooltip"
                  title
                  data-original-title="Grid view"
                >
                  <i class="fa fa-th"></i>
                </a>
              </div>
            </div>
          </header>
          <!-- sect-heading -->

          <div class="row">
            <div
              class="col-md-3"
              v-for="(product, index) in concatProducts"
              :key="index"
              @click="selectProduct(product)"
            >
              <a href="#">
                <div class="card card-product-grid">
                  <div class="img-wrap custom-padding">
                    <img
                      v-lazy-container="{
                        selector: 'img',
                        loading: 'lazy-load.png'
                      }"
                      :src="product.img[0]"
                      :data-src="product.img[0]"
                    />
                    <a class="btn-overlay" href="#">
                      <i class="fa fa-search-plus"></i> Quick view
                    </a>
                  </div>
                  <!-- img-wrap.// -->
                  <figcaption class="info-wrap">
                    <a href="#" class="title">{{ product.name }}</a>
                    <div class="price-wrap mt-1">
                      <div class="price">Rp.{{ product.price.toLocaleString() }}</div>
                      <img
                        v-if="product.merchant.name == 'blibli'"
                        src="~/assets/img/blibli.png"
                        class="img-xs"
                      />
                      <img v-else src="~/assets/img/shopee2.png" class="img-xs" />
                      <br />
                      <ul class="rating-stars">
                        <li
                          :style="{ width: 20 * product.review.rating + '%' }"
                          class="stars-active"
                        >
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
                      <small class="text-muted">
                        {{
                        product.review.count
                        }}
                      </small>
                      <!-- <del class="price-old">$1980</del> -->
                      <!-- price-wrap.// -->
                    </div>
                  </figcaption>
                </div>
              </a>
            </div>
            <!-- col.// -->

            <!-- col.// -->
          </div>
          <!-- row end.// -->

          <nav class="mt-4" aria-label="Page navigation sample">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#">Previous</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a @click="testModal" class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </main>
        <!-- col.// -->
      </div>
      <Loading></Loading>
    </div>
    <!-- container .//  -->
  </section>
</template>
<script>
import Loading from "./Loading";
export default {
  components: {
    Loading
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    loaded: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      rate: 0,
      initStars: [true, true, true, true, true],
      listMerchant: [
        {
          merchantName: "blibli",
          alias: "Blibli",
          active: true
        },
        {
          merchantName: "shopee",
          alias: "Shopee",
          active: true
        }
      ],
      min: 0,
      max: 0,
      listProduct: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  created() {
    this.$nextTick(() => {
      this.$modal.show("loading");
    });
  },
  filters: {
    formatNumber: function(value) {
      return Number(value).toLocaleString();
    }
  },
  computed: {
    concatProducts() {
      if (this.loaded) {
        this.$modal.hide("loading");
        let tempProduct = [];
        this.listMerchant.map(({ merchantName, active } = data) => {
          this.products.map(({ merchant, data } = n) => {
            if (merchantName == merchant && active == true) {
              tempProduct.push(data);
            }
          });
        });
        const filterPrice = data => {
          if (this.min == 0 && this.max == 0) {
            return this.min <= data.price;
          } else {
            return this.min <= data.price && data.price <= this.max;
          }
        };
        const filterRating = data => {
          return this.rate <= data.review.rating;
        };
        return tempProduct
          .flat()
          .filter(filterPrice)
          .filter(filterRating);
      } else {
        return [];
      }
    },
    brandImg() {
      switch (brand) {
        case "blibli":
          return "~/assets/img/blibli.png";
        case "shopee":
          return "~/assets/img/shopee.png";
          break;
      }
    }
  },
  methods: {
    selectProduct(data) {
      this.$emit("productSelected", data);
    },
    testModal() {
      this.$modal.show("test");
    },
    filterByMerchant(merchant) {
      this.listMerchant.map(n => {
        if (n.merchantName == merchant.merchantName) {
          n.active = !merchant.active;
        }
      });
    },
    rateUp(position) {
      if (this.rate == position + 1) {
        this.rate = 0;
      } else {
        this.rate = position + 1;
      }
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
