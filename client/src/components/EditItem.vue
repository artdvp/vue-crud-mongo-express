<template>
    <div class="add-form">
      <section class="text-center">
        <div>
            <router-link to="/show" class="btn btn-success">Return to Item</router-link>     
        </div> 
        <div class="container">
          <form v-on:submit.prevent="updateItem" class="form-edit">
          <label for="itemName" class="sr-only">Item Name: </label>
          <input type="text" id="itemName" v-model="item.name" class="form-control" placeholder="Item Name" required="" autofocus="">
          <br>
          <label for="inputPrice" class="sr-only">Item Price: </label>
          <input type="text" id="inputPrice" v-model="item.price" class="form-control" placeholder="Item Price" required="">
          <br>
          <button class="btn btn-lg btn-warning btn-block" type="submit">Update Item</button>
          </form> 
        </div>
      </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    };
  },
  created: function() {
    this.getItem();
  },
  methods: {
    getItem() {
      let uri = `http://localhost:4000/items/edit/${this.$route.params.id}`;
      this.axios.get(uri).then(response => {
        this.item = response.data;
      });
    },
    updateItem() {
      let uri = `http://localhost:4000/items/update/${this.$route.params.id}`;

      this.axios.post(uri, this.item).then(response => {
        console.log(response.data);
        this.$router.push({ name: "show" });
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.form-edit {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
