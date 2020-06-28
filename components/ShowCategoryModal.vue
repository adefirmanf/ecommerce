<template>
  <modal
    name="category"
    class="stick-to-top"
    height="auto"
    :pivotY="0.2"
    :scrollable="true"
    width="70%"
  >
    <div class="card-body">
      <h4 class="card-title">Kategori</h4>
      <div class="row">
        <div class="col-md-3 mb-4" v-for="(group, index) in categories" :key="index + group">
          <th>{{group.group}}</th>
          <tr v-for="(data, index) in group.data" :key="index + data">
            <td>
              <a
                class="text-dark"
                :href="
              'product/?search='+data.name + ' ' + group.group"
              >{{data.name}}</a>
            </td>
          </tr>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>