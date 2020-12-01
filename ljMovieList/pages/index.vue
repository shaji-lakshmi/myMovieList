<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        My Movie Mania
      </h1>
      <div id="hello">{{post}}dafilughb</div>
      <div class="links">
      <div v-for="post in posts" :key="post">
        <p>{{ posts.picName }}</p>
        <!-- <b-img thumbnail :src="require('../assets/imgs/' + {{ posts.picName }})" :alt="picName"> -->
        <!-- </b-img> -->
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // computed: {
  //   movieimg () {
  //     const fileName = this.picName.toLowerCase()

  //     return require('../assets/imgs/${fileName}.png') // the module request
  //   }
  // },
  data () {
    return {
      posts: []
    }
  },
  async fetch () {
    this.posts = await fetch('http://localhost:8082/api/tutorials')
      .then(res => res.json())
  }
}
</script>
