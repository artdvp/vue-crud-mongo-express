<template>
    <div>
        <section>
            <h1>Items</h1>
            <div class="row">
                <div class="col-md-8">

                </div>
                <div class="col-md-4">
                    <router-link to="/about" class="btn btn-primary">Create Item</router-link>
                </div>
            </div>
            <br>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Item Name</td>
                        <td>Item Price</td>
                        <td>Actions</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" v-bind:key="item._id">
                        <td>{{ item._id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>
                            <router-link :to="{name: 'EditItem', params: { id: item._id }}" class="btn btn-primary">Edit</router-link>
                        </td>
                        <td>
                            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetchItem();
  },
  methods: {
    fetchItem: function() {
      let uri = "http://localhost:4000/items";
      this.axios.get(uri).then(response => {
        this.items = response.data;
      });
    },

    deleteItem(id) {
        let uri = `http://localhost:4000/items/delete/${id}`
        this.items.splice(id,1);
        this.axios.get(uri).then(response => {
            console.log(response.data);
        });
    }
  }
};
</script>
