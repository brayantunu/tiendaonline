<template>
  <div class="carousel">
    <div class="slider" :style="{ transform: `translateX(${translateValue}px)` }">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide Image" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CarouselV",
  data() {
    return {
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLie38q5YkI-zvvDjK5ba8Le5QWTWJaukqDRxd9x2b&s',
        'image2.jpg',
        'image3.jpg',
        // Agrega aquí más imágenes si lo deseas
      ],
      translateValue: 0,
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.translateValue = -this.currentIndex * 100;
      }, 3000);
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    },
  },
};
</script>

<style>
.carousel {
  width: 100%;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s;
}

.slide {
  flex: 0 0 100%;
}

.slide img {
  width: 100%;
  height: auto;
}
</style>
