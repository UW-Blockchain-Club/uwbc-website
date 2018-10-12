<template>
  <div class="home has-text-centered">
    <section class="section dark-purple-gradient">
       <br /> <br /> <br /> <br />
      <div class="container">
        <h1 class="title has-text-white is-size-1">
          UW Blockchain Club
        </h1>
        <section class="section"></section>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-white">Members</p>
              <animated-number :value="members" :formatValue="formatPrice" :duration="1000" class="title has-text-white" />
              <span class="has-text-white title">+</span>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-white">Events</p>
              <animated-number :value="events" :formatValue="formatPrice" :duration="1000" class="title has-text-white" />
              <span class="has-text-white title">+</span>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-white">UWBC Tokens</p>
              <animated-number :value="tokens" :formatValue="formatPrice" :duration="1000" class="title has-text-white" />
              <span class="has-text-white title">K+</span>
            </div>
          </div>
        </nav>
      </div>
       <br /> <br /> <br /> <br />
    </section>

    <section class="section">
      <div class="columns">
        <div class="column">
          <h1 class="title">Hello There</h1>
        </div>
        <div class="column">
          <carousel :per-page="1" :autoplay="true" mouse-drag="false">
            <slide>
              <img src="../assets/img1.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img2.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img3.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img4.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img5.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img6.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img7.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img8.png" width=60% height=60%>
            </slide>
            <slide>
              <img src="../assets/img9.png" width=60% height=60%>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  components: {
    AnimatedNumber,
    Carousel,
    Slide
  },
  data() {
    return {
      members: 200,
      events: 10,
      tokens: 100 // in K
    };
  },
  methods: {
    formatPrice(value, kplus) {
      return `${value.toFixed(0)}`;
    }
  }
};
</script>

<style>
.dark-purple-gradient {
  padding: 5em;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>