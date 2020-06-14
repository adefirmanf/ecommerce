<template>
  <div>
    <output class="always-on-top-guest box" id="code_icontext_notify">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <carousel
              :perPage="1"
              :autoplay="true"
              :paginationEnabled="false"
              :easing="'ease-in'"
              :autoplayTimeout="10000"
              :loop="true"
            >
              <slide v-for="(data, i) in reviews" :key="i">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="icontext mr-4">
                        <a href="#" class="icontext" data-toggle="dropdown" aria-expanded="false">
                          <img class="icon icon-xs rounded-circle" :src="data.img" />
                          <div class="text">
                            {{data.name}}
                            <span
                              :class="badge(data.label)"
                            >{{data.label || 'unverified'}}</span>
                            <br />
                            <small class="text-muted">{{data.email}}</small>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-8 d-flex justify-content-center">
                      <div class="icontext">
                        <div class="text">
                          <ul class="rating-stars">
                            <li :style="{'width': 20*data.rate+'%'}" class="stars-active">
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
                          <div class="overflow">
                            <small class="text-muted">{{data.review}}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
          <div class="col-md-3 d-flex justify-content-end">
            <button
              type="button"
              @click="guestBook"
              class="btn btn-outline-warning btn-sm rounded-pill"
            >Guest Book</button>
          </div>
        </div>
      </div>
      <!-- <div class="container">
        <div class="row">
          <div class="col-md-3 d-flex justify-content-end">
            <button
              type="button"
              @click="guestBook"
              class="btn btn-outline-warning btn-sm rounded-pill"
            >Guest Book</button>
          </div>
        </div>
      </div>-->
    </output>
    <GuestBookList></GuestBookList>
  </div>
</template>
<style>
.always-on-top-guest {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  background-color: white;
}
</style>
<script>
import GuestBookList from "./GuestListModal";
export default {
  components: {
    GuestBookList
  },
  async mounted() {
    await this.$store.dispatch("FETCH_DATA_REVIEWS");
  },
  computed: {
    reviews() {
      return this.$store.getters.GET_DATA_REVIEWS;
    }
  },
  methods: {
    guestBook() {
      this.$modal.show("guest-book");
      this.$store.getters.GET_DATA_REVIEWS;
    },
    badge(label) {
      switch (label) {
        case "verified":
          return "badge btn-success";
        default:
          return "badge badge-light";
      }
    }
  }
};
</script>
<style>
.overflow {
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
</style>