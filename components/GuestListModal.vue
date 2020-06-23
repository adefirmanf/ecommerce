<template v-if="reviews">
  <div>
    <modal name="guest-book" height="auto" :scrollable="true" width="50%">
      <div class="card-body">
        <h4 class="card-title">Guest Book</h4>
        <div class="row">
          <aside class="col-md-5">
            <div
              class="guest-list icontext mr-4"
              v-for="(data, i) in reviews"
              :key="i"
            >
              <a
                href="#"
                :class="textCard[i]"
                @click.prevent="cardSelected(data)"
              >
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-2">
                        <img
                          class="icon icon-xs rounded-circle"
                          :src="data.img"
                        />
                      </div>
                      <div class="col-md-10">
                        <table style="width : 175px">
                          <tr style="width : 50%">
                            <td class="overflow-list">{{ data.name }}</td>
                            <td class="text-right">
                              <span :class="badge(data.label)">{{
                                data.label || "unverified"
                              }}</span>
                            </td>
                          </tr>
                          <tr style="width : 50%">
                            <td class="overflow-list">
                              <small class="text-muted">{{ data.email }}</small>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </aside>
          <main class="col-md-6">
            <b>{{ selectedData.name }}</b>
            <div>
              <ul class="rating-stars">
                <li
                  :style="{ width: 20 * selectedData.rate + '%' }"
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
              <small class="text-muted">{{
                selectedData.date
                  ? selectedData.date.toDate()
                  : selectedData.date
              }}</small>
            </div>
            <p class="content">{{ selectedData.review }}</p>
          </main>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-8">
            <ul class="rating-stars">
              <li style="width:80%" class="stars-active">
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
            <small class="label-rating text-muted">132 reviews</small>
          </div>
          <div class="col-md-4 d-flex justify-content-end">
            <a
              href="#"
              @click.prevent="writeReview"
              class="btn btn-light btn-sm rounded-pill"
            >
              <i class="fas fa-edit"></i>
              <span class="text">Write your review</span>
            </a>
          </div>
        </div>
      </div>
    </modal>
    <Review></Review>
  </div>
</template>
<script>
import Review from "./ReviewModal";
export default {
  components: {
    Review
  },
  data() {
    return {
      loaded: false,
      reviewsData: []
    };
  },
  created() {
    this.reviewsData = this.$store.getters.GET_DATA_REVIEWS;
  },
  computed: {
    textCard() {
      return this.$store.getters.GET_DATA_REVIEWS.map(() => {
        return {
          "text-dark": true,
          "text-light": false
        };
      });
    },
    reviews() {
      return this.$store.getters.GET_DATA_REVIEWS;
    },
    selectedData() {
      return this.$store.getters.GET_DATA_REVIEWS_SELECTED;
    }
  },
  methods: {
    writeReview() {
      this.$modal.show("review");
    },
    cardSelected(val) {
      this.$store.commit("setSelectedLocalData", val);
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
.guest-list {
  margin-top: 2px;
  margin-bottom: 2px;
}
.content {
  padding-top: 10px;
  padding-bottom: 10px;
}
.overflow-list {
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
</style>
