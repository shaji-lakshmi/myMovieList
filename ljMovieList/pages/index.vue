<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        My Movie Mania
      </h1>
      <div id="hello">{{post}}dafilughb</div>
      <div class="links">
        <a
          href="homePg"
          rel="noopener noreferrer"
          class="button--green"
        >
         Enter Site
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data () {
    return {
      post: []
    }
  },
  async fetch () {
    this.post = await fetch('http://localhost:8080/api/tutorials')
      .then(res => res.json())

    // console.log(post)
    // for (let i = 0; i < post.length; i++) {
    //   console.log(post[i].title)
    //   // document.body.getElementById('hello').appendChild(post[i].title)
    // }
    // if (post.id === this.$route.params.id) {
    //   this.post = post
    // } else {
    //   // set status code on server and
    //   if (process.server) {
    //     this.$nuxt.context.res.statusCode = 404
    //   }
    //   // use throw new Error()
    //   throw new Error('Post not found')
    // }
  }
}
</script>
