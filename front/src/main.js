import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import vue3videoPlay from 'vue3-video-play' // Importing components
import 'vue3-video-play/dist/style.css' // Import CSS

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import en from 'element-plus/lib/locale/lang/en'; 

const app = createApp(App);


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(ElementPlus, {
    locale: en,
  });
  

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus, {locale: zhCn})
app.use(vue3videoPlay)
app.mount('#app')
