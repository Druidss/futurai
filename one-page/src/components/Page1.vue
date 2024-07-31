<template>
  <div class="h-screen w-screen mx-auto  flex justify-center items-center  bg-image bg-cover bg-center">
    <div class="text-center">
      <h1 class="splt text-8xl mb-4 font-bold font-display ">FUTUR AI</h1>
      <p class=" splt text-xl">What do you foresee for our future?</p>
    </div>
  </div>
</template>

<script setup>  

  import splt from 'spltjs';
  import anime from 'animejs/lib/anime.es.js';

  splt({});

  anime
    .timeline({ loop: true })
    .add({
      targets: '.char',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 200,
      offset: '-=775',
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: '.char',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 2000,
    });

</script>
