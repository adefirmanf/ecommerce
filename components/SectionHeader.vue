<template>
  <section class="section-main bg padding-y margin-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-3">
          <nav class="card">
            <ul class="menu-category" v-for="(groupSidebar, index) in sidebar" :key="index">
              <li class="has-submenu" v-if="groupSidebar.data.length > 1">
                <a href>{{groupSidebar.group}}</a>
                <ul class="submenu">
                  <li
                    v-for="(childMenu, indexZ) in groupSidebar.data"
                    :key="index.toString() + indexZ.toString()"
                  >
                    <a href="#">{{childMenu.name}}</a>
                  </li>
                </ul>
              </li>
              <li v-else>
                <a href>{{groupSidebar.group}}</a>
              </li>
            </ul>
          </nav>
        </aside>
        <!-- col.// -->
        <div class="col-md-9">
          <article class="banner-wrap">
            <img src="~/assets/img/rakuten-banner.jpg" class="w-100 h-200 rounded" />
          </article>
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container //  -->
  </section>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      sidebar: [
        { group: "Produk kami", link: "", data: [] },
        {
          group: "Fashion Wanita",
          link: "",
          data: [
            {
              name: "Gaun",
              link: ""
            },
            {
              name: "Atasan",
              link: ""
            },
            {
              name: "Gaun",
              link: ""
            },
            { name: "Atasan", link: "" },
            { name: "Bawahan", link: "" },
            { name: "Baju Luaran", link: "" },
            { name: "Jumpsuit & Playsuit", link: "" },
            { name: "Baju Muslim", link: "" },
            { name: "Batik", link: "" },
            { name: "Pakaian Dalam", link: "" },
            { name: "Pakaian Tidur", link: "" },
            { name: "Pakaian Hamil & Menyusui", link: "" }
          ]
        },
        {
          group: "Fashion Pria",
          link: "",
          data: [
            { name: "Atasan", link: "" },
            { name: "Bawahan", link: "" },
            { name: "Baju Luaran", link: "" },
            { name: "Pakaian Dalam", link: "" },
            { name: "Baju Muslim", link: "" },
            { name: "Batik", link: "" }
          ]
        },
        {
          group: "Tas Wanita",
          link: "",
          data: [
            { name: "Ransel", link: "" },
            { name: "Tas Tangan", link: "" },
            { name: "Tas Bahu / Tas Selempang", link: "" },
            { name: "Tas Tote", link: "" },
            { name: "Tas Satchel", link: "" },
            { name: "Clutches", link: "" },
            { name: "Pouch", link: "" }
          ]
        },
        {
          group: "Tas Pria",
          link: "",
          data: [
            { name: "Ransel", link: "" },
            { name: "Tas Messenger", link: "" },
            { name: "Tas Selempang / Tas Bahu", link: "" },
            { name: "Tas Kantor", link: "" },
            { name: "Tas Duffel", link: "" },
            { name: "Tas Pinggang", link: "" },
            { name: "Tas Clutch", link: "" }
          ]
        },
        {
          group: "Sepatu Wanita",
          link: "",
          data: [
            { name: "Sepatu Sneakers Wanita", link: "" },
            { name: "Sepatu Hak Tinggi", link: "" },
            { name: "Sepatu Flat dan Sepatu Balet", link: "" },
            { name: "Wedges", link: "" },
            { name: "Sepatu Boots", link: "" },
            { name: "Sepatu Slip On", link: "" },
            { name: "Sandal Wanita", link: "" }
          ]
        },
        {
          group: "Sepatu Pria",
          link: "",
          data: [
            { name: "Sepatu Sneakers Pria", link: "" },

            { name: "Sepatu Formal Pria", link: "" },

            { name: "Sandal Pria", link: "" },

            { name: "Sepatu Loafers Pria", link: "" },

            { name: "Sepatu Boots Pria", link: "" }
          ]
        },
        {
          group: "Tas Travel & Koper",
          link: "",
          data: [
            { name: "Koper Kabin", link: "" },
            { name: "Koper Bagasi", link: "" },
            { name: "Tas Travel", link: "" },
            { name: "Aksesoris Travel", link: "" }
          ]
        }
      ]
    };
  }
};
</script>
