<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        My Movie Mania
      </h1>
      <div class="links">
        <a
          href="homePage"
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
export default {
  async fetch () {
    const post = await fetch('http://localhost:8080/api/tutorials')
      .then(res => res.json())
    console.log(post)

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
