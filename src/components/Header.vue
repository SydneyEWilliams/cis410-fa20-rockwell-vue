<template>
    <nav class="navbar navbar-expand-lg">
  <router-link class="navbar-brand" to='/' style="color:#6C3483;">Products & Products &#128717;&#65039;</router-link>
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
        <router-link class="nav-link" to='/' style="color:#AF7AC5; font-weight:bold">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/products' style="color:#AF7AC5; font-weight:bold">Products</router-link>
      </li>

      <li class="nav-item" v-if="auth">
        <router-link class="nav-link" to='/myorders' style="color:#AF7AC5; font-weight:bold">My Orders</router-link>
      </li>

      <li class="nav-item" v-if="!auth">
        <router-link class="nav-link" to='/signin'>
        <button class='btn'>Sign In</button>
        </router-link>
      </li>

      <li class="nav-item" v-if="!auth">
        <router-link class="nav-link" to='/signup'>
        <button class='btn'>Sign Up</button>
        </router-link>
      </li>

      <li class="nav-item" v-if="auth">
        <button @click="onLogout" class='btn'>Log Out</button>
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
    computed:{
      auth(){return this.$store.state.token}
        },
      methods:{
        onLogout(){this.$store.dispatch("logout")}
      }
    }
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Kalam&family=Mansalva&family=Patrick+Hand&display=swap');

.navbar {
  font-family: 'Kalam', cursive;
  align-content: stretch;
  background: #F4ECF7  ;
}

#app {
  font-family: 'Kalam', cursive;
}

.nav-link{
  justify-content: space-evenly;
  text-align: justify;
  padding: 5px;
}

.btn {
    background: #AF7AC5;
    color: #FDFEFE ;
    padding: 8px;
    margin: 2px;
    font-weight: bold;
}

</style>