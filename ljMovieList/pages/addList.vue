<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="List Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.listName"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="List Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.listDescription"
          required
          placeholder="Enter List Description"
        ></b-form-input>
      </b-form-group>

      <!-- as user enters title, a list of movies will come up-->
      <b-form-group id="input-group-2" label="Start adding!" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.Movie"
          required
          placeholder="Enter Movie or Show"
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
        listName: '',
        listDescription: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.form.listName = []

      let mylists = [this.form]
      console.log(mylists)
      console.log(this.form)

    }
  ,
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.listName = ''
      this.form.listDescription = ''
    }
  }
}
</script>
