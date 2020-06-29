<template>
  <section class="section-main bg padding-y-sm margin-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-3">
          <nav class="card">
            <ul class="menu-category" v-for="(groupSidebar, index) in sidebar" :key="index">
              <li class="has-submenu" v-if="groupSidebar.data.length > 1">
                <a href>{{ groupSidebar.group }}</a>
                <ul class="submenu">
                  <li
                    v-for="(childMenu, indexZ) in groupSidebar.data"
                    :key="index.toString() + indexZ.toString()"
                  >
                    <a
                      :href="
              'product/?search=' +
                childMenu.name + ' ' + groupSidebar.group
            "
                    >{{ childMenu.name }}</a>
                  </li>
                </ul>
              </li>
              <li v-else>
                <a href>{{ groupSidebar.group }}</a>
              </li>
            </ul>
          </nav>
        </aside>
        <!-- col.// -->
        <div class="col-md-9">
          <carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" :loop="true">
            <slide>
              <div class="card">
                <img src="banner1.jpg" class="card-img" />
              </div>
            </slide>
            <slide>
              <div class="card">
                <img src="banner2.jpg" class="card-img" />
              </div>
            </slide>
          </carousel>
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- container //  -->
  </section>
</template>
<style scoped></style>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    sidebar() {
      return this.$store.getters.GET_CATEGORIES;
    }
  }
};
</script>
