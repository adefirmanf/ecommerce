<template>
  <section class="section-specials padding-y bg border-bottom">
    <div class="container">
      <header class="section-heading">
        <h3 class="section-title">Today Special</h3>
      </header>
      <!-- row.// -->
      <div class="card-banner" v-bind:style="styleImg">
        <div class="card-img-overlay white">
          <h3 class="card-title"><br /></h3>
          <p class="card-text" style="max-width: 400px"></p>
          <div class="text-bottom ">
            <h5 class="title">
              #RamadhanSpecial <br />
              <small>
                Make your ramadhan be more special with Muslim fashion</small
              >
            </h5>
          </div>
        </div>
      </div>
    </div>

    <!-- container.// -->
  </section>
</template>
<style scoped>
.timer > div {
  display: inline-block;
  text-align: center;
  margin-right: 5px;
}

.timer .num {
  padding: 7px 3px;
  display: block;
  background-color: #212529;
  min-width: 44px;
  color: #fff;
  font-size: 22px;
  border-radius: 6px;
  line-height: 1.2;
}
.text-wrap {
  text-align: center;
}
.card-product-grid {
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
<script>
export default {
  data() {
    return {
      styleImg: {
        "min-height": "230px",
        "background-position": "top",
        "background-image": "url('ramadhan-fashion.jpg')"
      },
      styleImg2: {
        "min-height": "230px",
        "background-image": "url('japanese-shoes.jpg')"
      }
    };
  }
};
</script>
