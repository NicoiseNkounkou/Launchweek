<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

  <body class="">
    <router-link to="/">Home</router-link>
    <router-link to="/Infos">Infos pratiques</router-link>
    <router-link to="/RejoignezNous">Rejoignez-nous</router-link>

    <header class="flex justify-center gap-20">




    </header>

    <main>
      <router-view />




    </main>
    <footer>
      <div class="pb-10">
        <img src="/img/Line 10.png" alt="">
      </div>
      <div class="flex justify-center">
        <img src="/img/logo.svg">
      </div>

      <div>
        <ul class="flex flex-row justify-center gap-10 pt-10 pb-10 ">
          <li class="cursor-pointer underline">iim.fr</li>
          <li class="cursor-pointer">Contacts</li>
          <li class="cursor-pointer">Cookies</li>
        </ul>
      </div>
    </footer>
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
