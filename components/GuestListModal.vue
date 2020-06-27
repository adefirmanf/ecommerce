<template v-if="reviews">
  <div>
    <modal name="guest-book" height="auto" :scrollable="true" width="50%">
      <div class="card-body">
        <h4 class="card-title">Guest Book</h4>
        <div class="row">
          <aside class="col-md-5">
            <div class="guest-list icontext mr-4" v-for="(data, i) in reviews" :key="i">
              <a href="#" :class="textCard[i]" @click.prevent="cardSelected(data)">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-2">
                        <img class="icon icon-xs rounded-circle" :src="data.img" />
                      </div>
                      <div class="col-md-10">
                        <table style="width : 175px">
                          <tr style="width : 50%">
                            <td class="overflow-list">{{ data.name }}</td>
                            <td class="text-right">
                              <span :class="badge(data.label)">
                                {{
                                data.label || "unverified"
                                }}
                              </span>
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
              <small class="text-muted">{{selectedData.email}}</small>
              <span :class="badge(selectedData.label)">
                {{
                selectedData.label || "unverified"
                }}
              </span>
            </div>
            <div>
              <ul class="rating-stars">
                <li :style="{ width: 20 * selectedData.rate + '%' }" class="stars-active">
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
                selectedData.date
                ? selectedData.date.toDate()
                : selectedData.date
                | dateFormat}}
              </small>
            </div>

            <p class="content">{{ selectedData.review }}</p>
          </main>
        </div>
      </div>
      <div class="card-footer">
        <ul data-v-e590382c class="pagination">
          <li data-v-e590382c :class="{'page-item': true, 'disabled': page == 1}">
            <a data-v-e590382c href="#" @click.prevent="nav(-1)" class="page-link">Previous</a>
          </li>
          <li data-v-e590382c class="page-item" v-for="i in maxPage" :key="i">
            <a
              data-v-e590382c
              @click.prevent="changePage(i)"
              href="#"
              :class="{'page-link' : true, 'active-link':page == i}"
            >{{i}}</a>
          </li>
          <li data-v-e590382c :class="{'page-item': true, 'disabled': page == maxPage}">
            <a
              data-v-e590382c
              href="#"
              @click.prevent="nav(1)"
              :class="{'page-link': true, 'disabled': page == 1}"
            >Next</a>
          </li>
        </ul>
        <hr />
        <div class="row">
          <div class="col-md-8">
            <ul class="rating-stars">
              <li :style="{ width: 20 * score + '%' }" class="stars-active">
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
            <small class="label-rating text-muted" v-if="score">
              <b>{{score.toFixed(2)}} / 5</b> Rate
            </small>
            <small class="label-rating text-muted">
              <b>{{totalReviewers}}</b> Reviews
            </small>
          </div>
          <div class="col-md-4 d-flex justify-content-end">
            <a href="#" @click.prevent="writeReview" class="btn btn-light btn-sm rounded-pill">
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
import _ from "lodash";
export default {
  components: {
    Review
  },
  data() {
    return {
      loaded: false,
      maxData: 4,
      page: 1,
      activeLink: {
        "page-link": true,
        "active-link": true
      }
    };
  },
  filters: {
    dateFormat(val) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      if (!val) {
        return "";
      }
      return `${val.getDate()} ${
        months[val.getMonth() + 1]
      } ${val.getFullYear()} ${val.getHours() + 1}:${val.getMinutes()}`;
    }
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
    totalReviewers() {
      return this.$store.getters.GET_DATA_REVIEWS.length;
    },
    score() {
      const fetch = this.$store.getters.GET_DATA_REVIEWS;
      if (fetch.length > 1) {
        const totalReviews = fetch.map(n => n.rate).reduce((a, b) => a + b);
        return totalReviews / this.totalReviewers;
      }
    },
    reviews() {
      return _.chunk(this.$store.getters.GET_DATA_REVIEWS, 4)[this.page];
    },
    maxPage() {
      if (this.reviews) {
        return _.chunk(this.$store.getters.GET_DATA_REVIEWS, 4).length - 1;
      }
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
    },
    changePage(index) {
      this.page = index;
    },
    nav(nav) {
      this.page = this.page + nav;
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
.active-link {
  background-color: rgb(22, 80, 224);
  color: white;
}
</style>
