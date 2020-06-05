<template>
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
</template>
<script>
export default {
  methods: {
    modalShow() {
      this.$modal.show("hello-world", {
        scrollable: true
      });
    }
  }
};
</script>