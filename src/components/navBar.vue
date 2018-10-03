<template>
    <section>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="https://files.slack.com/files-pri/TD0137HGB-FD4224WA1/goat_herder_logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </router-link>
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/Data">Data</router-link>
            <router-link class="navbar-item" to="/About">About</router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
    </section>
</template>

<script>
export default {
    name: 'navBar',
    data(){
        return{

        }
    }
}
</script>
<style>

</style>
