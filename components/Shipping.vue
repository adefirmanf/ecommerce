<template>
  <section class="section-main bg padding-y margin-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-8">
          <div
            class="alert alert-info"
          >Cek kembali alamat pengiriman kamu sebelum melanjutkan pesanan. Jika kamu sedang #DiRumahAja dan ingin mengirim paket ke rumah, pastikan alamat rumahmu yang terpilih. Tetap jaga kesehatan dan selamat berbelanja!</div>
          <div class="card shipping-card">
            <div class="card-body">
              <h6 class="card-title" small>Shipping Address</h6>
              <table>
                <tr>
                  <b>Home</b>
                </tr>
                <tr>836 Doctors Drive</tr>
                <tr>Los Angeles, CA, California</tr>

                <tr>310-338-1535</tr>
                <tr>mwi0f95drce@groupbuff.com</tr>
              </table>
            </div>
            <div class="card-footer">
              <a href>Edit</a>
            </div>
          </div>
        </aside>
        <div class="col-md-4">
          <div>
            <div class="card">
              <div class="card-body">
                <h6 class="card-title" small>Detail Checkout</h6>
                <table class="block">
                  <td>Total Price Item</td>
                  <td class="text-right">Rp.10,000</td>
                  <tr></tr>
                  <td>Promo</td>
                  <td class="text-right">Rp.0</td>
                  <tr></tr>
                  <td>Shipping</td>
                  <td class="text-right">Rp.10,000</td>
                </table>
              </div>
              <div class="card-footer">
                <table class="block">
                  <td>Total</td>
                  <td class="text-right">Rp.20,000</td>
                  <tr></tr>
                  <a href>More detail</a>
                </table>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary btn-block" @click="modalShow">Continue</button>
              </div>
            </div>
          </div>
        </div>
        <aside
          class="col-md-8 margin-shipping-y"
          v-for="(item, index) in Object.keys(carts)"
          :key="index"
        >
          <div class="card shipping-card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <table>
                    <tr>
                      <b>{{item}}</b>
                    </tr>

                    <tr class="price">Rp.{{carts[item][0].price.toLocaleString()}}</tr>
                    <tr class="text-muted">{{carts[item].length}} item</tr>
                  </table>
                </div>
                <div class="col-md-6">
                  <b>Shipping Duration</b>
                  <br />JNE Courier (Rp.12.000)
                  <p>
                    <a href>Change</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <table class="block">
                <td>Subtotal</td>
                <td class="text-right">{{invokeSubTotal(carts[item])}}</td>
              </table>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <modal name="hello-world" height="auto" :scrollable="true" width="30%">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title" small>Payment Options</h6>
          <div
            class="alert alert-warning"
            role="alert"
          >Some payment methods disabled. Please use HTTPS or redirect to our website</div>
          <a href="#" class="text-dark">
            <div class="card payment-opt disabled">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <img src="~/assets/img/visa.png" class="img-xs" />
                  </div>
                  <div class="col-md-8">Visa</div>
                  <div class="col-md-2"></div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="text-dark">
            <div class="card payment-opt disabled">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <img src="~/assets/img/mastercard.png" class="img-xs" />
                  </div>
                  <div class="col-md-8">Mastercard</div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="text-dark">
            <div class="card payment-opt">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <img src="~/assets/img/paypal.png" class="img-xs" />
                  </div>
                  <div class="col-md-8">Paypal</div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="text-dark">
            <div class="card payment-opt">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <i class="fa fa-credit-card fa-lg"></i>
                  </div>
                  <div class="col-md-8">Local Bank</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary btn-block" @click="modalShow">Secure Checkout</button>
        </div>
      </div>
    </modal>
  </section>
</template>
<script>
export default {
  name: "CartDetails",
  props: {
    carts: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false,
      subTotal: 0
    };
  },
  methods: {
    modalShow() {
      this.$modal.show("hello-world", {
        scrollable: true
      });
    },
    invokeSubTotal(data) {
      return `Rp.${data
        .map(a => a.price)
        .reduce((a, b) => a + b)
        .toLocaleString()}`;
    }
  }
};
</script>
<style>
.shipping-card {
  font-size: 14px;
}
.margin-shipping-y {
  margin-top: 10px;
}
.text-right {
  text-align: right;
}
.block {
  width: 100%;
}
.position-fixed-sticky {
  position: sticky;
}
.payment-opt {
  margin-top: 10px;
  margin-bottom: 10px;
}
.disabled {
  opacity: 0.2;
}
.img-xs {
  height: auto !important;
}
</style>;
