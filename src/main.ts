import '@fontsource/montserrat';
import '@fontsource/roboto';
import '@fontsource/space-mono';
import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { router } from './router/router';

createApp(App).use(createPinia()).use(router).use(MotionPlugin).mount('#app');
