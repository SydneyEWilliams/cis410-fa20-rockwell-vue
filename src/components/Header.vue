<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to='/'>Rockwell</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> -->
<!-- OUR MENU ITEMS -->
      <li class="nav-item">
        <router-link class="nav-link" to='/movies'>Movies</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/account'>My Account</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/signin'>
        <button class='btn btn-warning'>Sign In</button>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/signup'>
        <button class='btn btn-outline-warning text-dark'>Sign Up</button>
        </router-link>
      </li>

      <li class="nav-item">
        <button class='btn btn-warning'>Log Out</button>
      </li>
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> -->
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
</template>


<script>
export default {
    
}
</script>


<style scoped>

</style>