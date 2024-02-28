<script setup lang="ts">
import { Carousel } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>
<template>
  <Carousel
    :items-to-show="2.4"
    :breakpoints="{
      640: {
        itemsToShow: 2.7,
      },
      768: {
        itemsToShow: 3.3,
      },
      1024: {
        itemsToShow: 4.5,
      },
      1280: {
        itemsToShow: 5.8,
      },
      1536: {
        itemsToShow: 7,
      },
    }"
  >
    <slot></slot>
  </Carousel>
</template>
