import { createApp } from 'vue'
import App from './App.vue'
console.log(import.meta.env.VITE_PROJECT_ENV);

createApp(App).mount('#app')
