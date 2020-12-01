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
          href="formPage"
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
    this.post = await fetch('http://localhost:8082/api/tutorials')
      .then(res => res.json())
  }
}
</script>
