<template>
  <header>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          <!-- <img src="../../assets/img/logo.svg"> -->
          QR Code Generator
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNavDropdown" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-4 mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact us</a>
            </li>
            <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> -->
          </ul>
          <span class="navbar-text">
            <button class="no-emphasis">Login</button>
            <button class="success-btn">Signup</button>
          </span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {}
  },
  beforeMount () {},
  mounted () {},
  methods: {}

}
</script>

<style scoped lang="scss">
    header{
        background-color:#fff;
        min-height: 50px;
        height:inherit;
        position:fixed;
        z-index:999;
        width:100%;
        border-bottom: 1px solid #eeeeee;
    }
    a.navbar-brand img {
        width:150px;
    }
    a.navbar-brand {
        font-size:2em;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color:$primary;
    }
    button{
        margin:0 !important;
    }
</style>
