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

      <b-form-group id="input-group-2" label="Movie Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          required
          placeholder="Enter Movie Description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Movie Director:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.director"
          required
          placeholder="Enter Movie Director"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Movie Picture Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.picName"
          required
          placeholder="Enter Movie Picture"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Movie Release Date:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.releaseDate"
          type="INTEGER"
          required
          placeholder="Enter Release Date"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Movie Genre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.genre"
          required
          placeholder="Enter Genre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Is it a TV Show or Movie:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.media"
          required
          placeholder="Enter Media"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Rating:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.rating"
          required
          placeholder="Enter Rating"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        description: '',
        director: '',
        picName: '',
        releaseDate: '',
        genre: '',
        typeOfMedia: '',
        rating: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const axios = require('axios')
      const data = JSON.stringify(this.form)

      const config = {
        method: 'post',
        url: 'http://localhost:8082/api/tutorials',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      }

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.description = ''
      this.form.releaseDate = ''
      this.form.genre = ''
      this.form.media = ''
      this.form.rating = ''
    }
  }
}
</script>
