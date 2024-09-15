<template>
  <main ref="container" data-scroll-container>
    <!-- futurAI -->
    <div class="h-screen w-screen mx-auto  flex justify-center items-center  bg-image bg-cover bg-center"
      data-scroll-section data-scroll data-scroll-sticky>
      <div class="text-ceter">
        <div class="splt text-9xl font-bold font-pixel tracking-widest">FUTUR AI</div>
        <div class="splt text-xl max-auto justify-center text-center">
          What do you foresee for our future?
        </div>
      </div>
    </div>


    <div class="h-screen w-screen flex jusify-center items-center bg-white" data-scroll-section>
      <div class="text-center w-9/12 mx-auto mt-8">
        <ScrollComponent class="page2-init leading-none text-9xl font-pixel text-black mx-auto my-2 max-w-9/12"
          data-scroll data-scroll-repeat="true" :speed="0.2" data-scroll-class="page2-opacity">
          A game using
          dice and map
          for ONE player about future AI
        </ScrollComponent>
      </div>
    </div>

    <!-- Feature -->
    <div class="h-screen w-screen bg-black overflow-hidden" data-scroll-section>
      <div class="text-9xl section3-one font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-4">
        <span>GET YOUR IDENTITY REPORT GET YOUR IDENTITY REPORT</span>
      </div>
      <div class="text-9xl section3-two font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-4">
        <span> 36 DIFFEERENT EVENTS FOR FURTUR </span>
      </div>
      <div class="z-40 text-9xl section3-three font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-4"
        data-scroll-direction="horizontal">
        <span class="bg-white p-4 ">Make your own choices</span>
      </div>
      <div class=" z-50 text-9xl section3-four font-pixel text-nowrap w-screen h-1/12 bg-white text-black p-4"
        data-scroll-direction="horizontal">
        <span class="bg-white py-4 ">FORSEE FOR FUTURE FORSEE FOR FUTURE</span>
      </div>
    </div>

    <!-- Brief -->
    <div class="h-screen overflow-hidden bg-white" data-scroll-section>
      <div class="flex justify-between  w-9/12 mx-auto">
        <div class="text-9xl my-36 text-black text-nowrap font-pixel" data-scroll-speed="0.1" data-scroll-sticky
          data-scroll-repeat data-scroll-delay="0.2">
          BRIEF
        </div>

        <div class="max-w-md my-36 mx-12 text-black brief-text" data-scroll data-scroll-speed="0.3" data-scroll-repeat
          data-scroll-class="page2-opacity">
          FuturAI is an innovative online card game set in a speculative future where algorithms dictate every aspect of
          life, from careers and relationships to leisure activities. The game incorporates elements of speculative
          design, using a four-quadrant method to predict and explore potential futures. </br>

          As players navigate through the
          game, they confront the implications of algorithmic control, making strategic decisions that affect not only
          their in-game progress but also their understanding of a future shaped by technology and data-driven
          insights..
        </div>
      </div>
    </div>

    <!-- Future quadrants -->
    <div class="h-screen overflow-hidden bg-black" data-scroll-section>
      <div class="flex justify-between w-9/12 mx-auto">
        <div class="mx-24 my-36 text-white" data-scroll data-scroll-speed="0.1" data-scroll-sticky data-scroll-repeat>
          <div class="text-4xl text-nowrap font-pixel"> Future quadrants </div>
          <div class="my-8 max-w-md"> To help us understand our world, we built an immersive experience that allows us
            to
            travel through different environments where we might live in someday. We created four scenario that each
            present an alternative view of future worlds.</div>
        </div>

        <div class="max-w-screen-xl my-12  text-white" data-scroll data-scroll-speed="0.4" data-scroll-repeat>
          <img class="h-4/12 my-36" :src="four"> </img>
        </div>
      </div>
    </div>

    <!-- rule book -->
    <div class="rule-book h-screen bg-white mx-auto p-4" data-scroll-section>
      <div class="text-9xl text-black font-pixel m-24 md:my-12" data-scroll data-scroll-speed="0.1">RULE BOOK</div>
      <div class="grid grid-cols-4 gap-8  md:gap-2 mx-24">
        <div v-for="(item, index) in items" :key="index" :class="getGridClass(index)" class="flex flex-col"
          data-scroll="" data-scroll-speed="0.2">
          <div class="flex items-center justify-left h-16 w-16 bg-black text-white relative">
            <span class="text-4xl font-pixel absolute bottom-0 right-0">{{ item.number }}</span>
          </div>
          <div class="text-left">
            <p class="text-lg font-bold text-black max-w-36 ">{{ item.title }}</p>
          </div>
          <div class="text-left">
            <p class="text-sm text-black max-w-36 md:max-w-72 mb-4">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- carousel -->
    <div class=" h-screen flex bg-black relative">
      <div class="text-white text-9xl text-center absolute bottom-0 transform -translate-y-1/2 font-pixel">PROGRESS
      </div>
      <Carousel class="w-9/12 justify-center items-center  mx-auto">
        <div v-for="(img, index) in images" :key="index">
          <img :src="img.src" :alt="`Image ${index + 1}`" class="carousel-image w-full my-24 object-contain" />
        </div>
      </Carousel>
    </div>

    <div class="mx-auto bg-[#151515] h-9/12">
      <Vue3Spline :scene="{
  url: 'https://prod.spline.design/xrQ6tM3pwImIR363/scene.splinecode',
      }" />
    </div>


  </main>
</template>

<script>
import splt from 'spltjs';
import anime from 'animejs/lib/anime.es.js'; 
import LocomotiveScroll from "locomotive-scroll";
import { ScrollView, ScrollComponent } from 'potiah';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Carousel } from 'ant-design-vue';
import { Vue3Spline } from 'vue3-spline'
import four from '../assets/four.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

export default {
  components: {
    ScrollView,
    ScrollComponent,
    Carousel,
    Vue3Spline
  }, 
  data() {
    return {
      four: four,
      items: [
        { number: '1', title: 'setup', description: 'Randomly draw 36 cards from the regular event deck. Shuffle the cards and lay them out to form a 6×6 grid.' },
        { number: '2', title: 'Goal', description: 'Collect cards within a limited number of steps, experiencing the most events to create your digital identity.' },
        {
          number: '3', title: 'Mechanics', description: 'Players start from the top left corner of the grid. Each turn, players can only choose a card directly.' },
        { number: '4', title: 'End', description: 'At the end of the game, a short report specific to the players experiences will be generated based on each dimension of the rate me system' },
      ],
      images: [
        { src: img1, alt: 'Image 1' },
        { src: img2, alt: 'Image 2' },
        { src: img3, alt: 'Image 3' },
      ],
    }
  },
  mounted() {
    splt({});
    this.anime(); 
    this.setLocomotiveScroll();
    this.directionScroll();
    gsap.registerPlugin(ScrollTrigger);
  },
  methods: {
    anime() {
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
    setLocomotiveScroll() {
      new LocomotiveScroll({
        el: this.$refs.container,
        smooth:true,
        multiplier: 1,
        direction: 'horizontal',
        repeat:true,
        horizontal: true,
      });
    },
    directionScroll(){
      const sections = gsap.utils.toArray('.section3-one, .section3-two, .section3-three, .section3-four');
      const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});
      tl
        .add('start')
        .to(sections[0], { duration: 4, x: 800, y: 400, ease: 'power2.inOut' }, 'start')
        .to(sections[1], { duration: 2, x: 200, y:-100, ease: 'power2.inOut' }, 'start+=0.5')
        .to(sections[2], { duration: 6, x: 300, y: 200, ease: 'power2.inOut' }, 'start+=1')
        .to(sections[3], { duration: 2, x: -400, ease: 'power2.inOut' }, 'start+=1.5');

      // ScrollTrigger.create({
      //   animation: tl,
      //   trigger: '.section3', 
      //   start: 'top center', 
      //   end: '+=100%', 
      //   scrub: true, 
      //   markers: true, 
      // });
    },
    getGridClass(index) {
      switch (index) {
        case 0:
          return 'col-span-1 row-start-1';
        case 1:
          return 'col-start-2 col-span-1 row-start-2';
        case 2:
          return 'col-start-3 col-span-1 row-start-1';
        case 3:
          return 'col-start-4 col-span-2 row-start-2';
        default:
          return '';
      }
    }
  },
}
</script>

<style>


.section3 span {
  background-color: #fff;
  display: block;
  padding: 0 20px;
  white-space: nowrap
}

.section3-one{
    top: 33%;
    transform: translateX(-50vw) rotate(36deg)
}
.section3-two{
  top: 45%;
  transform: translateX(50vw) rotate(6deg)
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

.carousel-image {
  width: 100%;
  height: 30rem;
  object-fit: contain;
}
</style>