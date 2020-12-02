<template>
<html lang="en">
<div class="container">
  <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1>List 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ a }}</b-card-text>
            <b-card-text>{{ posts }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2>List 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ posts }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button href="addList" block v-b-toggle.accordion-3>Add List</b-button>
        </b-card-header>
      </b-card>
  </div>
  
</div>
</html>
</template>

<script>
export default {
  ssr:false,
  data () {
    return {
      a: []
    }
  },
  methods: {
    onLoad(evt) {
      const a = []

      a = JSON.parse(localStorage.getItem("mylists"))
      console.log(a)
    }
  }
}
</script>
