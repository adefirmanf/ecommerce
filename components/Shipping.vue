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
              <button class="btn btn-primary btn-block">Continue</button>
            </div>
          </div>
        </div>
        <aside class="col-md-8"></aside>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style>
.shipping-card {
  font-size: 14px;
}
.text-right {
  text-align: right;
}
.block {
  width: 100%;
}
</style>;
