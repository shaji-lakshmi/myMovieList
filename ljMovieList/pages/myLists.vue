<template>
<html lang="en">
<div class="container">

<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="../assets/imgs/MovieManiaCam.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">ListName</h5>
          <p class="card-text">List Description and fun stuff.</p>
          <button type="button" class="btn btn-secondary float-right">Remove</button>
          <button type="button" class="btn btn-secondary float-right">Edit</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="../assets/imgs/MovieManiaCam.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">ListName</h5>
          <p class="card-text">List Description and fun stuff.</p>
          <button type="button" class="btn btn-secondary float-right">Remove</button>
          <button type="button" class="btn btn-secondary float-right">Edit</button>
        </div>
    </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="../assets/imgs/plus.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Add List</h5>
          <p class="card-text"></p>
          <button type="button" class="btn btn-secondary float-right">Remove</button>
          <button type="button" class="btn btn-secondary float-right">Edit</button>
        </div>
    </div>
    </div>
  </div>
</div>

</div>
</html>
</template>

<script>
export default {
  data () {
    return {
      post: []
    }
  },
  async fetch () {
    this.post = await fetch('http://localhost:8080/api/tutorials')
      .then(res => res.json())
  }
}
</script>
