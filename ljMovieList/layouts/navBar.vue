<template>
<div>
    <div id="nav" @reset="onReset">
        <b-nav class="navbar navbar-expand navbar-light" style="background-color: #F5B041;">
            <a class="navbar-brand" href="#">
                <img rounded src="../assets/imgs/MovieManiaCam.png" width="30" height="30" alt="">
                My Movie Mania
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="myLists">My Lists</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="collection">Collection</a>
                </li>
                </ul>
            </div>

            <b-navbar-nav class="ml-auto">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </form>

            </b-navbar-nav>

        </b-nav>

    </div>
  </div>
</template>
<script>
export default {
    onReset (evt) {
      evt.preventDefault()
    }
}
</script>
