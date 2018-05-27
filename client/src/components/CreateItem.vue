<template>
    <div class="add-form">
      <section class="text-center">
        <div class="container">
          <form v-on:submit.prevent="addItem" class="form-signin">
          <label for="itemName" class="sr-only">Item Name: </label>
          <input type="text" id="itemName" v-model="item.name" class="form-control" placeholder="Item Name" required="" autofocus="">
          <br>
          <label for="inputPrice" class="sr-only">Item Price: </label>
          <input type="text" id="inputPrice" v-model="item.price" class="form-control" placeholder="Item Price" required="">
          <br>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Add Item</button>
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
  methods: {
    addItem() {
      let uri = "http://localhost:4000/items/add";
      if (this.item.name.trim() != "" && this.item.price.trim() != "") {
        this.axios.post(uri, this.item).then(response => {
          console.log(response);
          if (response.status == 200) {
            alert(response.data.item);
          }
          this.item.name = "";
          this.item.price = "";
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.add-form {
  // text-align: center;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
