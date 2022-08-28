<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri';
import { useNow } from '@vueuse/core';
import { useUserStore } from './store/user';

const now = useNow();
const userPod = useUserStore();

invoke('get_user').then(_user => {
  userPod.set(_user as string);
})
</script>

<template>
  <div data-theme="dawn">
    <div class="navbar bg-base-100 shadow-md">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost">{{ userPod.user }}</button>
        <button class="btn btn-ghost font-fira-mono text-lg">{{ now.toLocaleTimeString() }}</button>
      </div>
    </div>
    <div class="mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>
