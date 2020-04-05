<template>
  <section class="section-specials padding-y border-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <header class="section-heading">
            <h3 class="section-title">Deals and offers</h3>
          </header>
          <figure class="itemside">
            <div class="timer">
              <div>
                <span class="num">04</span>
                <small>Days</small>
              </div>
              <div>
                <span class="num">12</span>
                <small>Hours</small>
              </div>
              <div>
                <span class="num">58</span>
                <small>Min</small>
              </div>
              <div>
                <span class="num">02</span>
                <small>Sec</small>
              </div>
            </div>
          </figure>
          <!-- iconbox // -->
        </div>
        <!-- col // -->
        <div class="row no-gutters items-wrap">
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="~/assets/img/1.jpg" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">Shirt</a>
                <span class="badge badge-danger">-20%</span>
              </div>
            </figure>
          </div>
          <!-- col.// -->
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="~/assets/img/2.jpg" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">Summer clothes</a>
                <span class="badge badge-danger">-5%</span>
              </div>
            </figure>
          </div>
          <!-- col.// -->
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="images/items/5.jpg" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">Another category</a>
                <span class="badge badge-danger">-20%</span>
              </div>
            </figure>
          </div>
          <!-- col.// -->
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="images/items/6.jpg" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title">Home apparel</a>
                <span class="badge badge-danger">-15%</span>
              </div>
            </figure>
          </div>
          <!-- col.// -->
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="images/items/7.jpg" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title text-truncate">Smart watches</a>
                <span class="badge badge-danger">-10%</span>
              </div>
            </figure>
          </div>
          <!-- col.// -->
        </div>
        <!-- col // -->
      </div>
      <!-- row.// -->
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