<template>
  <section class="section-specials padding-y-sm bg border-bottom">
    <div class="container">
      <header class="section-heading ">
        <h3 class="title-section">Promo</h3>
      </header>
      <!-- col // -->
      <div class="items-wrap">
        <article class="padding-y-sm">
          <div class="row">
            <div class="col-md-6">
              <div class="card-banner " v-bind:style="styleImg">
                <div class="card-img-overlay white">
                  <div class="text-bottom ">
                    <h5 class="title">
                      Surprice Deal <br />
                      <small> Get Discount 20% for Uniqlo Product</small><br />
                      <a href="" class="btn btn-warning">Disc 20%</a>
                      <br />
                      <span class="footer-text"
                        >*Terms and conditions apply</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card-banner" v-bind:style="styleImg2">
                <div class="card-img-overlay white">
                  <h3 class="card-title"><br /></h3>
                  <p class="card-text" style="max-width: 400px"></p>

                  <br />
                  <div class="text-bottom ">
                    <h5 class="title">
                      Holiday Deal <br />
                      <small> Get Discount up to 15% for Nike Products</small
                      ><br />
                      <a href="" class="btn btn-warning">Disc 15%</a>
                      <br />
                      <span class="footer-text"
                        >*Terms and conditions apply</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div class="row">
          <!-- <div class="col-md-3">
            <div class="card-banner " v-bind:style="styleImg3">
              <div class="card-img-overlay white">
                <h3 class="card-title">Bag Offer <br /></h3>
                <p class="card-text" style="max-width: 200px">
                  Get Discount 10% for Louis Vuitton
                </p>
                <a href="" class="btn btn-warning">Disc 10%</a>
                <br />
                <small> * Terms and conditions apply </small>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-banner " v-bind:style="styleImg4">
              <div class="card-img-overlay white">
                <h3 class="card-title">Holiday Deal <br /></h3>
                <p class="card-text" style="max-width: 200px">
                  Get Discount 50% for Nike Product
                </p>
                <a href="" class="btn btn-warning">Learn More</a>
                <br />
                <small> * Terms and conditions apply </small>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-banner " v-bind:style="styleImg5">
              <div class="card-img-overlay white">
                <h3 class="card-title">Holiday Deal <br /></h3>
                <p class="card-text" style="max-width: 200px">
                  Get Discount 50% for Nike Product
                </p>
                <a href="" class="btn btn-warning">Learn More</a>
                <br />
                <small> * Terms and conditions apply </small>
              </div>
            </div>
          </div> -->
          <!-- <div class="col-md-12">
            <div class="card-banner " v-bind:style="styleImg6">
              <div class="card-img-overlay white">
                <div class="text-bottom ">
                  <h5 class="title">
                    Special Offer <br />
                    <small> Get Discount 30% for K-Mall Products</small><br />
                    <a href="" class="btn btn-warning">Disc 30%</a>
                    <br />
                    <span class="footer-text">*Terms and conditions apply</span>
                  </h5>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <!-- col.// -->
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
      },
      styleImg3: {
        "min-height": "230px",
        "background-image": "url('bag-fashion.jpg')"
      },
      styleImg4: {
        "min-height": "230px",
        "background-image": "url('shoes-fashion.jpg')"
      },
      styleImg5: {
        "min-height": "230px",
        "background-image": "url('watch-fashion.jpg')"
      },
      styleImg6: {
        "min-height": "230px",
        "background-image": "url('k-fashion.jpg')",
        "background-position": "center"
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
.footer-text {
  font-size: 10px;
}
</style>
