"use strict";
import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import { createPinia } from "pinia"


createApp(App).use(createPinia()).mount('#app')
