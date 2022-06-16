<script setup lang='ts'>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const sm = breakpoints.smaller('sm');
const md = breakpoints.between('sm', 'md');
const lg = breakpoints.between('md', 'lg');
const xl = breakpoints.between('lg', 'xl');
const xxl = breakpoints.between('xl', '2xl');
const xxxl = breakpoints['2xl'];

</script>

<template>
  <h1 class="text-center text-warning font-montserrat">about page</h1>
  <div class="divider"></div>
  <div v-motion :initial="{ y: 300, opacity: 0, scale: 1 }" :enter="{
    y: 0, opacity: 1, transition: {
      y: { delay: 700, }, opacity: {
        duration: 500,
      },
    },
  }" :tapped="{ scale: 1.2, }">
    <div class="btn-group flex justify-center">
      <button class="btn" :class="{ 'btn-secondary': sm }">sm</button>
      <button class="btn" :class="{ 'btn-secondary': md }">md</button>
      <button class="btn" :class="{ 'btn-secondary': lg }">lg</button>
      <button class="btn" :class="{ 'btn-secondary': xl }">xl</button>
      <button class="btn" :class="{ 'btn-secondary': xxl }">xxl</button>
      <button class="btn" :class="{ 'btn-secondary': xxxl }">xxxl</button>
    </div>
  </div>

</template>
