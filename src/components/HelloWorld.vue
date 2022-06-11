<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <button class="btn btn-primary">Hello daisyui</button>

  <p>
    Recommended IDE setup:
    <a class="link link-accent" href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a class="link link-accent" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a class="link link-accent" href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a class="link link-accent" href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button class="btn btn-secondary" type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
code {
  background-color: #393552;
  padding: 2px 4px;
  border-radius: 4px;
  color: #9ccfd8;
}
</style>
