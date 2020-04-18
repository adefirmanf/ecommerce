<template>
  <div>
    <Header></Header>
    <Shipping></Shipping>
    <Footer></Footer>
  </div>
</template>

<script>
import Shipping from "~/components/Shipping.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Shipping,
    Footer,
    Header
  }
};
</script>