<template>
  <div>
    <Header></Header>
    <div class="register">
      <div class="mx-auto" style="width:500px;">
        <Registration></Registration>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "~/components/Header.vue";
import Registration from "~/components/Registration";
import Login from "~/components/Login";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    Login,
    Registration
  }
};
</script>
<style>
.register {
  margin-top: 120px !important;
}
</style>
