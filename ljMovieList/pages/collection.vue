<template>
  <div class="container">
    <div>
      <br>
      <div>
        <b-button href="addCollection">Add to our collection</b-button>
      </div>
      <div v-for="media of medias" :key="media" class="row profile">
      <div class="col-md-2">
      <img class="img-fluid" :src= "require('../assets/imgs/' + media.picName)"/>
      </div>
      <div class="col-md-8">
      <h2>{{ media.title }}</h2>
      <h4>{{ media.director }}</h4>
      <h5>{{ media.releaseDate }}</h5>
      <h5>{{ media.typeOfMedia }}</h5>
      <h6>{{media.description}}</h6>
      </div>
      <div class="col-md-2 rater">
      <div>
      <h2>{{media.Rating}} <img class="img-control" src="../assets/imgs/star.png"/></h2>
      <h5>{{ media.Genre }}</h5>
      </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
 export default {
    data() {
      return {
        medias: []
      }
    },
    async fetch() {
      this.medias = await fetch(
        'http://localhost:8082/api/tutorials'
      ).then(res => res.json())
    }
  }
</script>