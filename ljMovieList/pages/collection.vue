<template>
  <div class="container">
    <div>
      <h1 class="title">
        Movies
      </h1>
      <div id="display">{{ posts }}</div>
    </div>
</div>
</template>

<script>
export default {
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
