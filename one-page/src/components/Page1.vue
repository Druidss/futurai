<template>
  <ScrollView root :duration="1.7">
    <div class="h-screen w-screen mx-auto  flex justify-center items-center  bg-image bg-cover bg-center">
      <div class="text-ceter">
        <div class="splt text-9xl font-bold font-pixel tracking-widest">FUTUR AI</div>
        <div class="splt text-xl max-auto justify-center text-center">
          What do you foresee for our future?
        </div>
      </div>
    </div>
  </ScrollView>

  <div class="h-screen w-screen flex jusify-center items-center bg-white">
    <div class="text-center w-9/12 mx-auto">
      <ScrollView root :duration="1.7">
        <ScrollComponent class="page2-init leading-tight text-9xl font-pixel text-black mx-auto my-2 max-w-9/12"
          data-scroll-repeat="true" data-scroll-class="page2-opacity" :speed='0.2' cssProgress>
          A game using
          dice and map
          for ONE player about future AI</ScrollComponent>
      </ScrollView>
    </div>
  </div>

  <ScrollView root :duration="1.7">
    <div class="h-screen w-screen flex jusify-center items-center bg-black">
      <div class="text-center w-9/12 mx-auto overflow-hiden section3" id="3-section" data-scroll-section>
        <ScrollComponent class="text-9xl section3-one font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-2"
          :speed='6' data-scroll-direction="horizontal">
          <span>GET YOUR IDENTITY REPORT GET YOUR IDENTITY REPORT</span>
        </ScrollComponent>
        <ScrollComponent class="text-9xl section3-two font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-2"
          :speed='-6' data-scroll-direction="horizontal">
          <span>GET YOUR IDENTITY REPORT GET YOUR IDENTITY REPORT</span>
        </ScrollComponent>
        <ScrollComponent class="text-9xl section3-three font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-2"
          :speed='6' data-scroll-direction="horizontal">
          <span>GET YOUR IDENTITY REPORT GET YOUR IDENTITY REPORT</span>
        </ScrollComponent>
        <ScrollComponent class="text-9xl section3-four font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-2"
          :speed='6' data-scroll-direction="horizontal">
          <span>GET YOUR IDENTITY REPORT GET YOUR IDENTITY REPORT</span>
        </ScrollComponent>
      </div>
    </div>
  </ScrollView>

  <ScrollView root :duration="1.7">
    <div class="h-screen w-screen flex jusify-center items-center bg-white">
      <ScrollComponent class="text-9xl text-yellow-900" data-scroll data-scroll-direction="horizontal"
        data-scroll-speed="2" data-scroll-delay="0.05"> my idea
      </ScrollComponent>
      <div class="text-9xl text-yellow-900" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2"
        data-scroll-delay="0.05"> my idea</div>
      <div class="text-9xl text-yellow-900" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2"
        data-scroll-delay="0.05"> my idea</div>
    </div>
  </ScrollView>

</template>

<script>
import splt from 'spltjs';
import anime from 'animejs/lib/anime.es.js'; 
import { ScrollView, ScrollComponent } from 'potiah'

export default {
  components: {
    ScrollView,
    ScrollComponent,
  }, 
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
    },
  },
}
</script>

<style>
.page2-init{
  opacity: 0;
  transition: opactiy 6s;
}
.page2-opacity {
  opacity: 1;
}

.section3 span {
  background-color: #fff;
  display: block;
  padding: 0 20px;
  white-space: nowrap
}

.section3-one{
    top: 33%;
    transform: translateX(-50vw) rotate(26deg)
}
.section3-two{
  top: 45%
}
.section3-three{
      top: 55%;
      transform: rotate(9deg)
}
.section3-four{
  top: 68%;
  transform: translateX(-50vw) rotate(-19deg)
}
.section-five{
      top: 63%;
        transform: translateX(-10vw) rotate(3deg)
}
</style>