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
              <tr>02-04-2020</tr>
            </table>
          </div>
        </div>
        <article class="padding-y-sm">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col" class="text-muted">ITEM</th>
                <th scope="col" class="text-muted">QTY</th>
                <th scope="col" class="text-muted text-right">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in Object.keys(carts)" :key="index">
                <td>{{item}}</td>
                <td>{{carts[item].length}}</td>
                <td class="text-right">{{carts[item].length * carts[item][0].price}}</td>
              </tr>
            </tbody>
          </table>
          <div class="float-right col-md-7">
            <div class="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="text-muted">SUBTOTAL</th>
                    <th scope="col" class="text-right">30.000 IDR</th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-muted">COUPON</th>
                    <th scope="col" class="text-right">25%</th>
                  </tr>
                  <tr>
                    <th scope="col">TOTAL</th>
                    <th scope="col" class="text-right">500.000 IDR</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </article>
        <span
          class="text-muted"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
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
    }
  }
};
</script>
