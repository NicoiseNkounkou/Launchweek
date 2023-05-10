<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

  <body class="">
<header class=" flex justify-end"  >

      <div class=" flex justify-end  gap-[1rem] mr-[5rem] mt-[1rem] items-center text-slate-800 z-30 ">
      <router-link class="border-b-2 border-gray-600"  to="/">Home</router-link>
      <router-link to="/Infos">Infos pratiques</router-link>
      <router-link class="border-2  p-2 rounded-xl border-gray-600" to="/Presentation">Présentation</router-link> 

    </div>


    </header>

    <main>
      <router-view />




    </main>
    <footer>
      <div class="pb-10">
        <img src="/img/Line10.png" alt="">
      </div>
      <div class="flex justify-center">
        <img src="/img/logo.svg">
      </div>

      <div>
        <ul class="flex flex-row justify-center gap-10 pt-10 pb-10 ">
          <li class="cursor-pointer underline"> <a href="https://www.iim.fr/" target="_blank"> iim.fr </a></li>
           <router-link to="/Contacts" ><li class="cursor-pointer"> Contacts </li> </router-link> 
          <li class="cursor-pointer"> <a href=""> Cookies </a></li>
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
