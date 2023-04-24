<template>
    <div class="carousel">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{
          active: index === currentIndex,
          next: index === nextIndex,
          prev: index === prevIndex
        }"
      >
        <img :src="item.image" :alt="item.alt" />
        <div class="caption">{{ item.caption }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "carruselV",
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0,
        nextIndex: 1,
        prevIndex: this.items.length - 1,
        timer: null
      };
    },
    mounted() {
      this.timer = setInterval(this.next, 5000);
    },
    beforeUnmount() {
      clearInterval(this.timer);
    },
    methods: {
      next() {
        this.prevIndex = this.currentIndex;
        this.currentIndex = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % this.items.length;
      },
      prev() {
        this.nextIndex = this.currentIndex;
        this.currentIndex = this.prevIndex;
        this.prevIndex = (this.prevIndex - 1 + this.items.length) % this.items.length;
      }
    }
  };
  </script>
  
  <style>
  .carousel {
    position: relative;
    height: 400px;
  }
  
  .carousel > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .carousel > *.active {
    opacity: 1;
  }
  
  .carousel > *.prev,
  .carousel > *.next {
    opacity: 0.5;
  }
  
  .carousel > *.prev {
    z-index: -1;
  }
  
  .carousel > *.next {
    z-index: 1;
  }
  
  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    text-align: center;
  }
  </style>
  