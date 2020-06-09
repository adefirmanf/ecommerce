<template>
  <div>
    <Header></Header>
    <Invoice></Invoice>
    <Footer></Footer>
  </div>
  <!-- section-header.// -->
</template>

<script>
import Header from "~/components/Header.vue";
import Invoice from "~/components/Invoice.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Invoice,
    Footer
  },
  data() {},
  computed: {}
};
</script>