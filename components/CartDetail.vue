<template>
  <section class="section-content padding-y margin-y bg">
    <div class="container">
      <div class="row">
        <aside class="col-lg-9">
          <div class="card">
            <table class="table table-borderless table-shopping-cart">
              <thead class="text-muted">
                <tr class="small text-uppercase">
                  <th scope="col">Product</th>
                  <th scope="col" width="120">Quantity</th>
                  <th scope="col" width="120"></th>
                  <th scope="col" width="120">Price</th>
                  <th scope="col" class="text-right" width="200"></th>
                </tr>
              </thead>
              <tbody v-if="carts">
                <tr v-for="(item, index) in Object.keys(carts)" :key="index">
                  <td>
                    <figure class="itemside align-items-center">
                      <div class="aside">
                        <!-- <img src="../images/items/11.jpg" class="img-sm" /> -->
                      </div>
                      <figcaption class="info">
                        <a href="#" class="title text-dark">{{item}}</a>
                      </figcaption>
                    </figure>
                  </td>
                  <td>x {{carts[item].length}}</td>
                  <td>
                    <!-- <div class="price-wrap">
                      <var class="price">Rp.{{carts[item][0].price.toLocaleString()}}</var>
                    </div>-->
                  </td>
                  <td>
                    <div class="price-wrap">
                      <var class="price">Rp.{{carts[item][0].price.toLocaleString()}}</var>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="card-body border-top">
              <p class="icontext">
                <i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
              </p>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card.// -->
        </aside>
        <aside class="col-md-3">
          <div class="card mb-3">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label>Have coupon?</label>
                  <div class="input-group">
                    <input type="text" class="form-control" name placeholder="Coupon code" />
                    <span class="input-group-append">
                      <button class="btn btn-primary">Apply</button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card .// -->
          <div class="card">
            <div class="card-body">
              <dl class="dlist-align" v-if="price">
                <dt>Total price:</dt>
                <dd class="text-right price">Rp.{{price.toLocaleString()}}</dd>
              </dl>
              <dl class="dlist-align">
                <dt>Discount:</dt>
                <dd class="text-right">Rp.0</dd>
              </dl>
              <dl class="dlist-align">
                <dt>Total:</dt>
                <dd class="text-right h5">
                  <strong>Rp.{{price.toLocaleString()}}</strong>
                </dd>
              </dl>
              <hr />
              <p class="text-center mb-3">
                <a
                  href="#"
                  @click.prevent="shipping"
                  class="btn btn-primary btn-block"
                >Process to Checkout</a>
              </p>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card .// -->
        </aside>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomeItems",
  props: {
    carts: {
      type: Object,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  mounted() {},
  methods: {
    shipping() {
      this.$router.push("shipping");
    }
    // removeItems(data) {
    //   this.$emit("removeItems", data);
    // }
  }
};
</script>