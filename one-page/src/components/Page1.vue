<template>
  <div class="h-screen w-screen mx-auto  flex justify-center items-center  bg-image bg-cover bg-center">
    <div class="text-center">
      <h1 class="splt text-9xl mb-4 font-bold font-pixel tracking-widest ">FUTUR AI</h1>
      <p class=" splt text-xl">What do you foresee for our future?</p>
    </div>
  </div>

  <div class="h-screen w-screen flex jusify-center items-center bg-white">
    <div class="text-center w-9/12 mx-auto">
      <h1 class="text-9xl font-pixel text-black mx-auto max-w-9/12">A game using dice and map for 1 player about
        future AI</h1>
    </div>
  </div>

</template>

<script>
import splt from 'spltjs';
import anime from 'animejs/lib/anime.es.js';

export default {
  mounted() {
    splt({});
    this.anime();
  },
  methods: {
    anime:() => {
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
        })
        // .play();
    },
  },
}


</script>
