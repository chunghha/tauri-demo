<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri';
import { useNow } from '@vueuse/core';
import HelloWorld from './components/HelloWorld.vue';
import { useUserStore } from './store/user';

const now = useNow();
const userPod = useUserStore();

invoke('get_user').then(_user => {
  userPod.set(_user as string);
})
</script>

<template>
  <div data-theme="rosepine">
    <div class="grid place-items-center h-screen m-4 pb-16">
      <div class="justify-self-end">
        <div class="badge badge-lg badge-info gap-2">{{ userPod.user }}</div>
        <div class="badge badge-lg badge-success gap-2">{{ now.toLocaleTimeString() }}</div>
      </div>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
  </div>
</template>
