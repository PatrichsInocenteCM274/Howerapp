<template>
  <div id="app">
   
    <div class="navbar-container">
      <div class="navbar-content">
        <router-link to="/">
         <i class='bx bxs-user-detail bx-sm'></i>
        </router-link>
        <router-link to="/chatbox">
          <i class='bx bx-message-detail bx-sm'></i>
        </router-link>
        <router-link to="/clasifica">
          <i class='bx bx-task bx-sm'></i>
        </router-link>
        <router-link to="/matriz">
          <i class='bx bx-grid-alt bx-sm' ></i>
        </router-link>
        <router-link to="/about">
          <i class='bx bxs-donate-heart bx-sm'></i>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
data: () => ({
      prueba: 'hola amigo'
  })
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
.navbar-container {
  width: 100%;
  position: flex;
  top: 0;
  background-color: rgb(255, 174, 0);
  border: 0.5px solid white;
  .navbar-content {
    padding: 15px;
    display: flex;
    justify-content: center;
    a {
      color: rgba(163, 163, 163);
      &.router-link-exact-active {
        color: rgba(255, 131, 62);
      }
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px;
  padding: 0px;
}
</style>
