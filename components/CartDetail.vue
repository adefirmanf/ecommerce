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
                  <th scope="col" width="120">Price</th>
                  <th scope="col" class="text-right" width="200"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in carts" :key="index">
                  <td>
                    <figure class="itemside align-items-center">
                      <div class="aside">
                        <!-- <img src="../images/items/11.jpg" class="img-sm" /> -->
                      </div>
                      <figcaption class="info">
                        <a href="#" class="title text-dark">{{item.name}}</a>
                      </figcaption>
                    </figure>
                  </td>
                  <td>
                    <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </td>
                  <td>
                    <div class="price-wrap">
                      <var class="price">{{item.price}}</var>
                    </div>
                    <!-- price-wrap .// -->
                  </td>
                  <td class="text-right">
                    <a
                      data-original-title="Save to Wishlist"
                      title
                      href
                      class="btn btn-light"
                      data-toggle="tooltip"
                    >
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href class="btn btn-light">Remove</a>
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
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomeItems",
  props: {
    carts: {
      type: Array,
      required: true
    }
  }
};
</script>