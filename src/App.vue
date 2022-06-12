<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri';
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

let user = ref('');
invoke('get_user').then(_user => {
  user.value = _user as string;
})
</script>

<template>
  <div data-theme="rosepine">
    <div class="grid place-items-center h-screen m-4">
      <div class="badge badge-lg badge-info gap-2 justify-self-end">{{ user }}</div>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
  </div>
</template>
