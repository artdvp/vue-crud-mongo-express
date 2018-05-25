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
        <!-- <h1>Create An Item</h1>
        <form v-on:submit.prevent="addItem">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Item Name:</label>
                        <input type="text" class="form-control" v-model="item.name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Item Price:</label>
                        <input type="text" class="form-control col-md-6" v-model="item.price">
                    </div>
                </div>
            </div><br>
            <div class="form-group">
                <button class="btn btn-primary">Add Item</button>
            </div>
        </form> -->
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
    addItem() {}
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
