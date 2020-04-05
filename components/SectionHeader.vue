<template>
  <section class="section-main bg padding-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-3">
          <nav class="card">
            <ul class="menu-category">
              <li>
                <a href="#">Best clothes</a>
              </li>
              <li class="has-submenu">
                <a href="#">More items</a>
                <ul class="submenu">
                  <li>
                    <a href="#">Submenu name</a>
                  </li>
                  <li>
                    <a href="#">Great submenu</a>
                  </li>
                  <li>
                    <a href="#">Another menu</a>
                  </li>
                  <li>
                    <a href="#">Some others</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
        <!-- col.// -->
        <div class="col-md-9">
          <article class="banner-wrap">
            <img src="~/assets/img/rakuten-banner.jpg" class="w-100 h-200 rounded" />
          </article>
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container //  -->
  </section>
</template>
<style scoped>
.padding-y {
  margin-top: 120px;
}
</style>