<template>
  <modal name="login" height="auto" width="30%" :scrollable="true">
    <div class="card">
      <div class="alert alert-warning" role="alert">You need login before purchasing to our site</div>
      <Login></Login>
      <div class="card-footer">
        <a href>No, thanks. I will purchase from original website</a>
      </div>
    </div>
  </modal>
</template>

<script>
import Login from "~/components/Login.vue";
export default {
  components: {
    Login
  }
};
</script>