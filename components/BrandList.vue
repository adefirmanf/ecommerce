<template>
  <section class="section-specials padding-y bg border-bottom">
    <div class="container">
      <header class="section-heading">
        <h3 class="section-title">Top Brand</h3>
      </header>

      <div class="row items-wrap">
        <div class="col-md-4">
          <div
            class="card-banner"
            style="min-height:230px; background-image: url('kakuu-brand.jpg');"
          >
            <div class="card-img-overlay text-white">
              <article>
                <h5 class="card-title"></h5>
                <div class="text-bottom max-height">
                  <h5 class="title">
                    <img
                      class="invert"
                      src="kakuu-basic-logo.png"
                      style="width:50%; margin-bottom: -40px;"
                    />
                  </h5>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="card-banner"
            style="min-height:230px; background-image: url('uniqlo-brand.jpg');"
          >
            <div class="card-img-overlay text-white">
              <article>
                <h5 class="card-title"></h5>
                <div class="text-bottom max-height">
                  <h5 class="title">
                    <img class="invert" src="uniqlo.png" style=" width:50%" />
                  </h5>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="card-banner"
            style="min-height:230px; background-image: url('united-arrows.jpg');"
          >
            <div class="card-img-overlay text-white">
              <article>
                <h5 class="card-title"></h5>
                <div class="text-bottom max-height">
                  <img
                    class="invert"
                    src="united-arrows.png"
                    style="width:50%; margin-bottom: 20px; margin-left: 10px;"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.invert {
  filter: invert(100%);
}
.opacity {
  opacity: 0.8;
}
.maxHeight {
  max-height: 90px !important;
}
</style>
