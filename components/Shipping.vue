<template>
  <section class="section-main bg padding-y margin-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-8">
          <div class="alert alert-info">
            Cek kembali alamat pengiriman kamu sebelum melanjutkan pesanan. Jika
            kamu sedang #DiRumahAja dan ingin mengirim paket ke rumah, pastikan
            alamat rumahmu yang terpilih. Tetap jaga kesehatan dan selamat
            berbelanja!
          </div>
          <div class="card shipping-card">
            <div class="card-body">
              <h6 class="card-title" small>Shipping Address</h6>
              <a href="#" v-if="addressEdit" @click.prevent="shippingAddress()">
                <div class="box box-dashed">
                  <h6 class="text-muted text-center">+ Add New Address</h6>
                </div>
              </a>
              <table v-else>
                <tr>
                  <b>{{ address.label }}</b>
                </tr>
                <tr>
                  {{
                  address.name
                  }}
                </tr>
                <tr>
                  {{
                  address.phone
                  }}
                </tr>
                <tr>
                  {{
                  address.detail
                  }}
                </tr>

                <tr>
                  {{
                  address.city
                  }}
                  {{
                  address.postalCode
                  }}
                </tr>
              </table>
            </div>
            <div class="card-footer">
              <a href="#" v-if="!addressEdit" @click="shippingAddress()">Edit</a>
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
                  <td class="text-right">Rp. {{totalItemPrice.toLocaleString()}}</td>
                  <tr></tr>
                  <td>Shipping</td>
                  <td class="text-right">Rp. {{totalShipping.toLocaleString()}}</td>
                  <tr></tr>
                  <td>Promo</td>
                  <td class="text-right">Rp. 0</td>
                </table>
              </div>
              <div class="card-footer">
                <table class="block">
                  <td>Total</td>
                  <td class="text-right">Rp.{{total.toLocaleString()}}</td>
                  <tr></tr>
                </table>
              </div>
              <div class="card-footer">
                <button
                  class="btn btn-primary btn-block"
                  @click="modalShow"
                  :disabled="disabled"
                >Continue</button>
              </div>
            </div>
          </div>
        </div>
        <aside
          class="col-md-8 margin-shipping-y"
          v-for="(item, index) in Object.keys(carts)"
          :key="item"
        >
          <div class="card shipping-card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <table>
                    <tr>
                      <b>{{ item }}</b>
                    </tr>

                    <tr class="price">
                      Rp.{{
                      carts[item][0].price.toLocaleString()
                      }}
                    </tr>
                    <tr class="text-muted">
                      {{
                      carts[item].length
                      }}
                      item
                    </tr>
                  </table>
                </div>
                <div class="col-md-6">
                  <b>Shipping Duration</b>
                  <br />
                  <div v-if="selectedCourier[item]">
                    {{selectedCourier[item].courier.name}}
                    -
                    <span
                      class="text-muted"
                    >{{selectedCourier[item].courier.service}} (Rp. {{selectedCourier[item].courier.price.toLocaleString()}})</span>
                  </div>
                  <p>
                    <a href="#" @click.prevent="modalShippingShow(item, index)">Change</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <table class="block">
                <td>Subtotal</td>
                <td
                  class="text-right"
                >Rp. {{ parseInt(invokeSubTotal(carts[item]) + (selectedCourier[item] ? selectedCourier[item].courier.price : 0)).toLocaleString()}}</td>
              </table>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <modal name="shipping-address" height="auto" width="40%" :scrollable="true">
      <div class="card">
        <div class="card-body">
          <article>
            <h4 class="card-title">Add New Address</h4>
            <div class="form-row">
              <div class="form-group col-md-12">
                <small class="form-text text-muted">Label</small>
                <input class="form-control" type="text" v-model="address.label" />
                <small class="form-text text-muted">Example : Home, Office, Apartment, Dropship</small>
              </div>
              <!-- form-group end.// -->
              <div class="form-group col-md-8">
                <small class="form-text text-muted">Receiver</small>
                <input class="form-control" type="text" v-model="address.name" />
                <small class="form-text text-muted">Example : John Doe</small>
              </div>
              <div class="form-group col-md-4">
                <small class="form-text text-muted">Phone</small>
                <input class="form-control" type="text" v-model="address.phone" />
                <small class="form-text text-muted">Example : 081234567890</small>
              </div>
              <div class="form-group col-md-9">
                <small class="form-text text-muted">City</small>
                <input class="form-control" type="text" v-model="address.city" />
                <small class="form-text text-muted">Example : Jakarta</small>
              </div>
              <div class="form-group col-md-3">
                <small class="form-text text-muted">Postal Code</small>
                <input class="form-control" type="text" v-model="address.postalCode" />
                <small class="form-text text-muted">Example : 15610</small>
              </div>
              <div class="form-group col-md-12">
                <textarea class="form-control" type="textbox" rows="2" v-model="address.detail" />
              </div>
              <button class="btn btn-primary float-right btn-block" @click="saveAddress">Add</button>
              <button class="btn btn-light float-right btn-block">Cancel</button>
            </div>
          </article>
        </div>
      </div>
    </modal>
    <CheckoutModal></CheckoutModal>
    <ShippingListOptionModal :productTitle="item" :productIndex="index" @setCourier="setCourier"></ShippingListOptionModal>
  </section>
</template>
<script>
import CheckoutModal from "./CheckoutModal.vue";
import ShippingListOptionModal from "./ShippingListOptionModal";

export default {
  name: "CartDetails",
  components: {
    CheckoutModal,
    ShippingListOptionModal
  },
  props: {
    carts: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false,
      subTotal: 0,
      addressEdit: true,
      item: "",
      temp: new Map([]),
      index: 0,
      address: {
        label: "",
        name: "",
        phone: "",
        city: "",
        postalCode: "",
        detail: ""
      }
    };
  },
  computed: {
    selectedCourier() {
      return {};
    },
    totalItemPrice() {
      return this.$store.getters.GET_CARTS.map(a => a.price).reduce(
        (a, b) => a + b
      );
    },
    totalShipping() {
      return this.$store.getters.GET_TOTAL_PRICE_COURIER;
    },
    disabled() {
      if (this.addressEdit) {
        return true;
      }
      return false;
    },
    total() {
      return this.totalShipping + this.totalItemPrice;
    }
  },
  methods: {
    modalShow() {
      this.$modal.show("hello-world", {
        scrollable: true
      });
    },
    modalShippingShow(item, index) {
      this.item = item;
      this.index = index;
      this.$modal.show("shipping-list");
    },
    invokeSubTotal(data) {
      return data[0].price * data.length;
    },
    shippingAddress() {
      this.$modal.show("shipping-address");
    },
    saveAddress() {
      this.$store.commit("setAddress", this.address);
      this.addressEdit = false;
      this.$modal.hide("shipping-address");
    },
    setCourier(data) {
      this.selectedCourier[data.productTitle] = data;
      this.$store.commit("setCourierSelectedToCarts", data);
      this.temp.set(data.productTitle, data.courier.price);
      let tempPrice = 0;
      this.temp.forEach(n => {
        tempPrice = tempPrice + n;
      });
      this.$store.commit("setCourierTotal", tempPrice);
      this.$forceUpdate();
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
.box-dashed {
  border: 2px solid #e4e4e4;
  border-style: dashed;
}
</style
>;
