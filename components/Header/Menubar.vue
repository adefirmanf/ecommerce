<template>
  <header class="section-header">
    <section class="header-main border-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2 col-4">
            <a href="/" class="brand-wrap">
              <img class="logo" src="~/assets/img/20200403_SocialDistance.svg" />
            </a>
          </div>
          <div class="col-lg col-sm col-md col-6 flex-grow-0">
            <div class="category-wrap dropdown d-inline-block float-md-right">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-bars"></i> Kategori
              </button>
              <div class="dropdown-menu" x-placement="bottom-start">
                <a class="dropdown-item" href="#">Machinery / Mechanical Parts / Tools</a>
                <a class="dropdown-item" href="#">Consumer Electronics / Home Appliances</a>
                <a class="dropdown-item" href="#">Auto / Transportation</a>
                <a class="dropdown-item" href="#">Apparel / Textiles / Timepieces</a>
                <a class="dropdown-item" href="#">Home &amp; Garden / Construction / Lights</a>
                <a class="dropdown-item" href="#">Beauty &amp; Personal Care / Health</a>
              </div>
            </div>
            <!-- category-wrap.// -->
          </div>
          <div class="col-lg-4 col-sm-12">
            <form action="#" class="search">
              <div class="input-group w-100">
                <input type="text" class="form-control" placeholder="Search" />
                <div class="input-group-append">
                  <button class="btn btn-light" type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <!-- search-wrap .end// -->
          </div>
          <!-- col.// -->
          <div class="col-lg-4 col-sm-6 col-12">
            <div class="widgets-wrap float-md-right">
              <div class="widget-header mr-3 dropdown show">
                <a href="#" class="icon icon-sm" data-toggle="dropdown" aria-expanded="true">
                  <i class="fa fa-shopping-cart"></i>
                </a>
                <span class="badge badge-pill badge-danger notify">{{totalCart}}</span>
              </div>
              <div class="widget-header">
                <a href="#" data-toggle="dropdown" aria-expanded="false">
                  <div class="text">
                    <div class="icontext">
                      <div class="icon">
                        <i class="icon-sm fa fa-user"></i>
                      </div>
                      <div class="text">
                        <small class="text-muted">Sign in | Join</small>
                        <div>
                          My account
                          <i class="fa fa-caret-down"></i>
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
  </header>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("GET_CARTS");
  },
  computed: {
    totalCart() {
      return this.$store.getters.GET_CARTS.length;
    }
  }
};
</script>