<template>
<html lang="en">
    <div id="nav">
        <b-nav class="navbar navbar-expand navbar-dark bg-dark">
           <a class="navbar-brand" href="#">
              <img rounded src="../assets/imgs/MovieManiaCam.png" width="30" height="30" alt="">
              My Movie Mania
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item dropdown">
                  <a
                  class="nav-link dropdown-toggle"
                  href="#drop"
                  id="navbarDropdownMenuLink"
                  >
                    My Lists
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#drop">List</a>
                    <a class="dropdown-item" href="#drop">List</a>
                    <a class="dropdown-item" href="#drop">i cri</a>
                  </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="movies">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="shows">Shows</a>
              </li>
            </ul>
          </div>
          <b-navbar-nav class="ml-auto">
          <form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

        </b-nav>

        <div class="container mt-3">
        <router-view />
        </div>
    </div>
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
