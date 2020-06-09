<template>
  <div>
    <modal name="hello-world" height="auto" :scrollable="true" width="30%">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title" small>Confirm Purchase</h6>
          <div
            class="alert alert-warning"
            role="alert"
          >Some payment methods disabled. Please use HTTPS or redirect to our website</div>
          <a href="#" class="text-dark">
            <div class="card payment-opt disabled">
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
                  <div class="col-md-8">Debit / Credit Card</div>
                  <div class="col-md-2">
                    <label class="custom-control custom-radio mb-3">
                      <input class="custom-control-input" name="myselection1" type="radio" checked />
                      <div class="custom-control-label"></div>
                    </label>
                  </div>
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
    <DebitCard></DebitCard>
  </div>
</template>
<script>
import DebitCard from "./DebitCardModal";
export default {
  components: {
    DebitCard
  },
  methods: {
    modalShow() {
      this.$modal.hide("hello-world", {
        scrollable: true
      });
      this.$modal.show("debitcard");
    }
  }
};
</script>