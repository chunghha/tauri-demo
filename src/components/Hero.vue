<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="hero min-h-screen" style="background-image: url(https://api.lorem.space/image/drink?w=1000&h=800);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold font-montserrat">Hello there</h1>
        <p class="mb-5 font-roboto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-secondary" type="button" @click="count++">count is: {{ count }}</button>
      </div>
    </div>
  </div>
  <div class="toast toast-end" v-if="count > 5">
    <div class="alert alert-success">
      <div class="font-montserrat">
        <span>You've clicked too many times.</span>
      </div>
    </div>
  </div>
</template>
