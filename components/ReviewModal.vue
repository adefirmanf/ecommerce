<template>
  <modal name="review" height="auto" :scrollable="true" width="50%">
    <div class="card-body">
      <h4 class="card-title">Review by {{name}}</h4>
      <div class="row">
        <aside class="col-md-5 d-flex justify-content-center">
          <div class="img-wrap">
            <img class="icon icon-lg rounded-circle" :src="image" />
            <figcaption class="info-wrap">
              <p class="title text" v-if="!isAuth">You need login to show your profile picture</p>
              <p class="text">{{review}}</p>
              <h3>{{rate}} / 5</h3>
            </figcaption>
          </div>
        </aside>
        <main class="col-md-7">
          <div class="form-group">
            <small class="form-text text-muted">Your name</small>
            <input name class="form-control" v-model="name" type="text" />
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-md-8">
                <small class="form-text text-muted">Your email</small>
              </div>
              <div class="col-md-4 pull-right text-right">
                <span :class="badge">{{isAuth ? 'verified' : 'unverified'}}</span>
              </div>
            </div>
            <input name class="form-control" v-model="email" type="text" :disabled="isAuth" />
          </div>
          <div class="form-group">
            <small class="form-text text-muted">Tell other what you think about this website</small>
            <textarea class="form-control" v-model="review" type="textbox" rows="2" />
            <small class="text-muted">Most helpful reviews have 100 words or more</small>
          </div>
          <div class="form-group">
            <ul class="rating-stars">
              <li :style="{'width': 20*rate+'%'}" class="stars-active">
                <a href v-for="(s, index) in initStars" :key="index">
                  <i class="fa fa-star" @click.prevent="rateUp(index)"></i>
                </a>
              </li>
              <li>
                <a href v-for="(s, index) in initStars" :key="index">
                  <i class="fa fa-star" @click.prevent="rateUp(index)"></i>
                </a>
              </li>
            </ul>
            <small class="label-rating text-muted">Rating required</small>
          </div>
          <div class="d-flex justify-content-end">
            <button
              @click.prevent="submitReview"
              class="btn btn-success btn-sm"
              :disabled="validate"
            >
              <span class="text">Submit</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  data() {
    return {
      buttonText: "Submit",
      name: "",
      email: "",
      review: "",
      label: "unverified",
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * (1000 - 1)
      ) + 1}/512`,
      initStars: [true, true, true, true, true],
      rate: 0
    };
  },
  mounted() {
    if (this.$store.getters.GET_AUTH_STATUS) {
      const user = this.$store.getters.GET_USER.profile
        ? this.$store.getters.GET_USER.profile
        : this.$store.getters.GET_USER;
      this.name = user.name ? user.name : user.email.split("@")[0];
      this.email = user.email;
      this.image = user.picture;
      this.label = "verified";
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.GET_AUTH_STATUS;
    },
    validate() {
      if (
        this.name == "" ||
        this.review == "" ||
        this.rate == 0 ||
        this.buttonText == "Loading"
      ) {
        return true;
      }
      return false;
    },
    badge() {
      if (this.isAuth) {
        return "badge btn-success ";
      } else {
        return "badge badge-light";
      }
    }
  },
  methods: {
    rateUp(position) {
      this.rate = position + 1;
    },
    async submitReview() {
      this.buttonText = "Loading";
      await this.$store
        .dispatch("ADD_DATA_REVIEW", {
          name: this.name,
          email: this.email,
          review: this.review,
          image: this.image,
          label: this.label,
          rate: this.rate
        })
        .then(ok => {
          if (ok) {
            this.buttonText = "Done";
          }
        });
      await this.$store.dispatch("FETCH_DATA_REVIEWS").then(ok => {
        this.$modal.hide("review");
      });
    }
  }
};
</script>
<style scoped>
.inline {
  float: left;
}
</style>