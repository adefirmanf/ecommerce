<template>
  <modal name="debitcard" height="auto" :scrollable="true" width="30%">
    <div class="card">
      <div class="card-body">
        <article>
          <h4 class="card-title">Confirm Payment</h4>
          <div class="form-row">
            <!-- form-group end.// -->
            <div class="form-group col-md-12">
              <small class="form-text text-muted">Name on card</small>
              <input class="form-control" type="text" v-model="cardName" />
              <small class="form-text text-muted">Example : John Doe</small>
            </div>

            <div class="form-group col-md-10">
              <small class="form-text text-muted">Card Number</small>
              <input class="form-control" type="text" v-model="cardNumber" />
            </div>
            <div class="form-group col-md-2">
              <small class="form-text text-muted">CCV</small>
              <input class="form-control" type="text" v-model="ccv" />
            </div>
            <div class="form-group col-md-2">
              <small class="form-text text-muted">Month</small>
              <input class="form-control" type="text" v-model="expMonth" />
              <small class="form-text text-muted">MM</small>
            </div>
            <div class="form-group col-md-2">
              <small class="form-text text-muted">Year</small>
              <input class="form-control" type="text" v-model="expYear" />
              <small class="form-text text-muted">YY</small>
            </div>
            <button
              class="btn btn-primary float-right btn-block"
              @click="confirmPayment"
              :disabled="isDisabled"
            >{{buttonText}}</button>
            <button class="btn btn-light float-right btn-block">Cancel</button>
          </div>
        </article>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      cardName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      ccv: "",
      isDisabled: false,
      buttonText: "Confirm"
    };
  },
  methods: {
    confirmPayment() {
      this.isDisabled = true;
      this.buttonText = "Please wait";
      setTimeout(() => {
        this.isDisabled = false;
        this.buttonText = "Success";
        this.$router.push("invoice");
      }, 1000);
    }
  }
};
</script>