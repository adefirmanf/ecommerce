<template>
  <div>
    <div class="card-body custom">
      <vue-tabs class="custom" type="pills" active-tab-color="#ffffff" active-text-color="black">
        <v-tab title="Sign in">
          <article>
            <h4 class="card-title">
              Sign In
              <br />
              <small class="text-muted">Hello, Welcome back</small>
            </h4>
            <div class="form-group">
              <small class="form-text text-muted">Username / Email</small>
              <input name v-model="signin.email" class="form-control" type="text" />
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <small class="form-text text-muted">Password</small>
              <input name v-model="signin.password" class="form-control" type="password" />
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
              <button @click="signInWithEmail" class="btn btn-primary float-right btn-block">Login</button>
            </div>
          </article>
        </v-tab>
        <v-tab title="Sign up">
          <article>
            <h4 class="card-title">
              Sign Up
              <br />
              <small class="text-muted">It's free and only takes a minute.</small>
            </h4>
            <div class="form-group">
              <small class="form-text text-muted">Email</small>
              <input name v-model="signup.email" class="form-control" type="text" />
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <small class="form-text text-muted">Password</small>
              <input name v-model="signup.password" class="form-control" type="password" />
            </div>
            <div class="form-group">
              <small class="form-text text-muted">Repeat Password</small>
              <input name v-model="signup.password2nd" class="form-control" type="password" />
            </div>
            <div class="form-group text-center">
              <span class="padding-y-sm text-center text-muted">
                By clicking "Create your account" below, you agree to our
                <a href>terms of service</a> and
                <a href>privacy policy</a>
              </span>
            </div>
            <div class="form-group">
              <button
                @click="signUpWithEmail"
                class="btn btn-primary float-right btn-block"
              >Create your account</button>
            </div>
          </article>
        </v-tab>
      </vue-tabs>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-md-12 text-center">
          <span class="text-muted">Or Sign In / Up using</span>
        </div>
        <div class="col-md-6 padding-y-sm">
          <a href="#" @click.prevent="signInWithFacebook" class="btn btn-light btn-block mb-4">
            <i class="fab fa-facebook-f" v-if="socialButton"></i> &nbsp;
            Facebook
          </a>
        </div>
        <div class="col-md-6 padding-y-sm">
          <a href="#" @click.prevent="signInWithGoogle" class="btn btn-light btn-block mb-4">
            <i class="fab fa-google" v-if="socialButton"></i> &nbsp; Google
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";

// import config from "../google-credentials";

// firebase.initializeApp(config.config);
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
    return {
      signup: {
        email: "",
        password: "",
        password2nd: ""
      },
      signin: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    clear() {
      this.signin.email = "";
      this.signin.password = "";
    },
    signUpWithEmail() {
      if (this.signup.password !== this.signup.password2nd) {
        this.clear();
        return alert("Password doesn't match with 2nd Password");
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.signup.email, this.signup.password)
        .then(results => {
          let temp;
          if (results.additionalUserInfo.isNewUser) {
            let { user } = results;
            temp = {
              additionalUserInfo: {
                profile: {
                  name: "",
                  id: "",
                  email: user.email,
                  emailVerified: user.emailVerified
                }
              }
            };
          }
          console.log(temp);
          this.$store.dispatch("AUTHENTICATION", temp);
          this.$emit("okLogin", temp);
        })
        .catch(err => {
          console.log(err);
          if (err.code == "auth/email-already-in-use") {
            alert("E-mail already in use");
            this.clear();
          }
        });
    },
    signInWithEmail() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.signin.email, this.signin.password)
        .then(results => {
          this.$store.dispatch("AUTHENTICATION", results);
          this.$emit("okLogin", results);
        })
        .catch(err => {
          console.log(err);
          if (err.code == "auth/account-exists-with-different-credential") {
            alert("Account already linked with different social media");
            this.clear();
          }
          if (err.code == "auth/email-already-in-use") {
            alert("E-mail already in use");
            this.clear();
          }
          if (err.code == "auth/user-not-found") {
            alert("Username / Password is invalid. Please try again");
            this.clear();
          }
          if (err.code == "auth/wrong-password") {
            alert("Username / Password is invalid. Please try again");
            this.clear();
          }
        });
    },
    signInWithFacebook() {
      firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then(results => {
          this.$store.dispatch("AUTHENTICATION", results);
          this.$emit("okLogin", results);
        })
        .catch(err => {
          if (err.code == "auth/account-exists-with-different-credential") {
            alert("Account already linked with different social media");
          }
        });
    },
    signInWithGoogle() {
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(results => {
          console.log(results);
          this.$store.dispatch("AUTHENTICATION", results);
          this.$emit("okLogin", results);
        })
        .catch(err => {
          if (err.code == "auth/account-exists-with-different-credential") {
            alert("Account already linked with different social media");
          }
        });
    }
  }
};
</script>
<style>
.vue-tabs .tab-content {
  padding-left: 0px !important;
}
.form-control ::placeholder {
  color: red !important;
}
.custom .vue-tabs .nav-pills > li.active > a,
.custom .vue-tabs .nav-pills > li.active > a:focus,
.custom .vue-tabs .nav-pills > li.active > a:hover {
  background-color: #eeeeee !important;
  box-shadow: none !important;
}
</style>
