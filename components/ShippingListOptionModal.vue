<template>
  <modal name="shipping-list" height="auto">
    <div class="card-body">
      <h6 class="card-title" small>Courier List</h6>
      <a
        href="#"
        class="text-dark"
        v-for="(courier, index) in courierList"
        :key="index"
      >
        <div class="card payment-opt" @click.prevent="selectedCourier(courier)">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <b>{{ courier.name }}</b>
                <br />
                <small class="text-muted"
                  >Service : {{ courier.service }}</small
                >
              </div>
              <div class="col-md-6 justify-content-end text-right">
                Rp. {{ courier.price }}
                <div>
                  <small class="text-muted">{{ courier.infoText }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    productTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    courierList() {
      return this.$store.getters.GET_COURIER_LIST;
    }
  },
  methods: {
    selectedCourier(data) {
      this.$store.commit("setCourierSelectedToCarts", {
        courier: data,
        productTitle: this.productTitle
      });
    }
  }
};
</script>
