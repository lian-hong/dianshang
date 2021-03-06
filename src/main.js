import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import './styles/index.scss'
import './iconfont/iconfont.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import installIcons from './icons/index.js'

const app = createApp(App)
installIcons(app)

console.log(process.env.VUE_APP_BASE_API)

app.use(store).use(router).use(ElementPlus).mount('#app')
