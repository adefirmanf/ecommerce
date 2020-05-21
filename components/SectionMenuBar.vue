<template>
  <section class="section-specials padding-y-sm bg border-bottom">
    <div class="container">
      <header class="section-heading ">
        <h3 class="title-section">Promo</h3>
      </header>
      <!-- col // -->

      <div class="row">
        <div class="col-md-6">
          <div class="card-banner overlay-gradient" v-bind:style="styleImg">
            <div class="card-img-overlay white">
              <h3 class="card-title">Surprice Deal <br /></h3>
              <p class="card-text" style="max-width: 400px">
                Get Discount 20% for Rakuten Product
              </p>
              <a href="" class="btn btn-warning">Learn More</a>
              <br />
              <small> * Terms and conditions apply </small>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-banner overlay-gradient" v-bind:style="styleImg2">
            <div class="card-img-overlay white">
              <h3 class="card-title">Holiday Deal <br /></h3>
              <p class="card-text" style="max-width: 400px">
                Get Discount 50% for Nike Product
              </p>
              <a href="" class="btn btn-warning">Learn More</a>
              <br />
              <small> * Terms and conditions apply </small>
            </div>
          </div>
        </div>
        <!-- col.// -->
      </div>
      <!-- col // -->
      <!-- row.// -->
    </div>
    <!-- container.// -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      styleImg: {
        "min-height": "230px",
        "background-image": "url('japanese-fashion.jpg')"
      },
      styleImg2: {
        "min-height": "230px",
        "background-image": "url('japanese-shoes.jpg')"
      }
    };
  }
};
</script>
<style scoped>
.text-wrap {
  text-align: center;
}
.card-product-grid {
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
