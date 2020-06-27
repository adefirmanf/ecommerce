<template>
  <section class="section-name padding-y-sm margin-y">
    <div class="row">
      <div class="container">
        <header class="section-heading">
          <h3 class="section-title">Invoice #1202</h3>
        </header>
        <div class="row">
          <div class="col-md-6">
            <table>
              <b>Recipent</b>
              <p />
              <tr>{{address.name}}</tr>
              <tr>{{address.detail}}</tr>
              <tr>{{address.city}}</tr>
              <tr>{{address.postalCode}}</tr>
              <tr>{{address.phone}}</tr>
            </table>
          </div>
          <div class="col-md-6 text-right d-flex justify-content-end">
            <table>
              <b>Invoice No</b>
              <tr>1202</tr>
              <p />
              <b>Invoice Date</b>
              <tr>{{dateFormat}}</tr>
            </table>
          </div>
        </div>
        <article class="padding-y-sm">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col" class="text-muted">ITEM</th>
                <th scope="col" class="text-muted">QTY</th>
                <th scope="col" class="text-muted text-left">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in Object.keys(carts)" :key="index">
                <td>{{item}}</td>
                <td>{{carts[item].length}}</td>
                <td
                  class="text-left"
                >Rp. {{(carts[item].length * carts[item][0].price).toLocaleString()}}</td>
              </tr>
            </tbody>
          </table>
          <div class="float-right col-md-7">
            <div class="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="text-muted">SUBTOTAL</th>
                    <th scope="col" class="text-right">Rp. {{totalItemPrice.toLocaleString()}}</th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-muted">TOTAL SHIPPING</th>
                    <th scope="col" class="text-right">Rp. {{totalShipping.toLocaleString()}}</th>
                  </tr>
                  <tr>
                    <th scope="col">TOTAL</th>
                    <th scope="col" class="text-right">Rp. {{total.toLocaleString()}}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </article>
        <!-- <span
          class="text-muted"
        >Simpan bukti pembayaran ini sebagai alat bukti klaim apabila barang anda tidak sampai. Website ini ditujukan untuk </span>-->
        <!-- sect-heading -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container // -->
  </section>
</template>

<script>
export default {
  props: {
    carts: {
      type: Object,
      required: true
    },
    address: {
      type: Object,
      required: true
    },
    totalShipping: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalItemPrice() {
      return this.$store.getters.GET_CARTS.map(a => a.price).reduce(
        (a, b) => a + b
      );
    },
    total() {
      return this.totalItemPrice + this.totalShipping;
    },
    dateFormat() {
      const date = new Date();
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }
  }
};
</script>
