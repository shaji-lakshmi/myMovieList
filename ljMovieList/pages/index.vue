<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Movie Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          required
          placeholder="Enter Title"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div v-for="media of medias" :key="media" class="row profile">{{ media.director }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
      },
      show: true,
      medias: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const axios = require('axios')
      const data = JSON.stringify(this.form.title)
      

      const config = {
        method: 'get',
        url:'http://localhost:8082/api/tutorials?title=' + this.form.title,
        headers: {
          'Content-Type': 'application/json'
        },
      }

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
         this.medias = response.data

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
   
    },
  //   async fetch() {
  //     this.medias = await fetch(
  //       'http://localhost:8082/api/tutorials?title=' + this.form.title
  //     ).then(res => res.json())
  //     console.log(medias)
  //           console.log(res)

  //   }
  }
}
</script>
