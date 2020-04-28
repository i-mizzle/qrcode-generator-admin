<template>
  <div class="page-container">
    <div class="static-sidebar">
      <md-button class="md-icon-button" @click="toggleMenu">
        <span v-if="!menuVisible">
          <img src="../assets/img/icons/menu.svg">
          <md-tooltip md-direction="right">Open navigation</md-tooltip>
        </span>
        <span v-if="menuVisible">
          <img class="menu-close" src="../assets/img/icons/close.svg">
          <md-tooltip md-direction="right">Close navigation</md-tooltip>
        </span>
      </md-button>

      <ul class="static-nav">
        <li>
          <a @click="openSearch()">
            <img src="../assets/img/icons/search.svg">
            <md-tooltip md-direction="right">Search</md-tooltip>
          </a>
        </li>
      </ul>

      <ul class="static-nav bottom">
        <li>
          <nuxt-link to="./profile" active-class="static-active">
            <img src="../assets/img/icons/profile.svg">
            <md-tooltip md-direction="right">
              Your profile
            </md-tooltip>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="./settings" active-class="static-active">
            <img src="../assets/img/icons/settings.svg">
            <md-tooltip md-direction="right">
              Account Settings
            </md-tooltip>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <md-app>
      <md-app-toolbar md-elevation="0">
        <a class="navbar-brand">
          QR Code Generator - Admin
        </a>
        <!-- <img class="logo" src="../assets/img/logo.svg"> -->
        <a class="signout float-right" @click="signOut()">Sign out</a>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div>
            <input
              id="searchField"
              class="search-field"
              type="text"
              placeholder="search for hospital or person"
            >
            <ul class="main-nav">
              <li>
                <nuxt-link to="./dashboard" active-class="active">
                  <img src="../assets/img/icons/dashboard.svg">Dashboard
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="md-toolbar-section-end" />
        </md-toolbar>
      </md-app-drawer>

      <md-app-content>
        <div class="animated fadeIn">
          <nuxt-child />
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'PersistentFull',
  data: () => ({
    menuVisible: true
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    openSearch () {
      this.menuVisible = true
      document.getElementById('searchField').focus()
    },
    toggleShareJobModal () {
      this.$store.commit('global/toggleShareJobModal')
    },
    signOut () {
      this.$cookies.removeAll()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 100vh;
  // border: 1px solid rgba(#000, .12);
  width: 100%;
  margin-left: 50px;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  background-color: #f6f6f6;
  border-right: transparent;
  z-index: 1;
}

.md-app-toolbar {
  background-color: #fff !important;
}

.page-container {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}

.static-sidebar {
  width: 50px;
  height: 100vh;
  background-color: $primary;
  text-align: center;
  padding-top: 15px;
  position: fixed;
  z-index: 1;
}

.md-app-content {
  border-left: transparent;
}

.static-sidebar i {
  color: #fff;
  font-size: 1.3em;
}

img.logo {
  width: 12%;
}

.static-nav {
  margin-top: 20px;
}

ul.static-nav li {
  margin-bottom: 10px;
}

ul.bottom {
  position: absolute;
  bottom: 0;
  width: 50px;
}

ul.bottom li {
  margin-top: 20px;
}

input.search-field {
  background-color: #fbfbfb;
  margin-top: 70px;
}

ul.main-nav {
  list-style: none;
  margin-top: 50px;
}

ul.main-nav li {
  margin-bottom: 5px;
  margin-top: 5px;
  height: 30px;
  display: flex;
  align-items: center;
}

ul.main-nav li a {
  color: $lightGrey;
  display: block;
  padding: 10px;
  width: 100%;
}

ul.main-nav li a:hover {
  color: $darkGrey;
}

ul.main-nav li a.active {
  background-color: #e3e3e3;
  border-radius: 3px;
}

ul.main-nav img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.balance-container {
  min-width: 280px;
  min-height: 50px;
  height: inherit;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  overflow: hidden;
}

.balance-container .completion-container {
  width: 120px;
}

.profile-completion {
  min-width: 280px;
  min-height: 50px;
  height: inherit;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  overflow: hidden;
}

.profile-bar {
  padding: 3px;
  height: inherit;
  width: 100% !important;
  background-color: #e3e3e3;
  border-radius: 3px;
}

.completion-container {
  width: 180px;
}

.profile-bar {
  margin-top: -10px;
}

.profile-bar .completion {
  width: 40%;
  height: 5px;
  background-color: $accent;
  border-radius: 3px;
}

h3 {
  font-family: "Montserrat", sans-serif;
}

img.menu-close {
  width: 18px;
}

h6.title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: $primary;
  text-transform: unset;
  font-size: 1.2em;
}
a.signout {
  color: $secondary;
  font-size: 13px;
  position: absolute;
  right: 50px;
  top: 20px;
}
</style>
