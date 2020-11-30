<template>
<html lang="en">

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

<style src = "../pages/pgLayout.css"></style>-->
