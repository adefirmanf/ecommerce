<template>
  <div class="card-body">
    <h4 class="card-title mb-4">Sign in</h4>
    <form>
      <a
        href="#"
        @click="signInWithFacebook"
        class="btn btn-facebook btn-block mb-2"
      >
        <i class="fab fa-facebook-f" v-if="socialButton"></i> &nbsp; Sign in
        with Facebook
      </a>
      <a
        href="#"
        @click="signInWithGoogle"
        class="btn btn-google btn-block mb-4"
      >
        <i class="fab fa-google" v-if="socialButton"></i> &nbsp; Sign in with
        Google
      </a>
      <div class="form-group">
        <input name class="form-control" placeholder="Username" type="text" />
      </div>
      <!-- form-group// -->
      <div class="form-group">
        <input
          name
          class="form-control"
          placeholder="Password"
          type="password"
        />
      </div>
      <!-- form-group// -->

      <div class="form-group">
        <a href="#" class="float-right">Forgot password?</a>
        <label class="float-left custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" checked />
          <div class="custom-control-label">Remember</div>
        </label>
      </div>
      <div class="form-group"></div>
      <!-- form-group form-check .// -->
      <div class="form-group">
        <button type="submit" class="btn btn-primary float-right btn-block">
          Login
        </button>
        Not a member?
        <a href class="text">Register here</a>
      </div>

      <!-- form-group// -->
    </form>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";

import config from "../google-credentials";

firebase.initializeApp(config.config);
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export default {
  props: {
    socialButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    signInWithFacebook() {
      firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then(results => {
          console.log(results);
        })
        .catch(err => {
          if (err.code == "auth/account-exists-with-different-credential") {
            alert(
              "Handle error login when account already signed-in with different provider"
            );
          }
        });
    },
    signInWithGoogle() {
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(results => {
          this.$store.dispatch("AUTHENTICATION", results);
          this.$emit("okLogin", results);
        })
        .catch(err => {
          console.log(err);
          firebase.auth
            .signInWithPopup(err.credential.providerId)
            .then(results => {
              console.log(results);
            });
        });
    }
  }
};
</script>
