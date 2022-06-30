import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import installIcons from './icons/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './iconfont/iconfont.css'
import './permission'

const app = createApp(App)
installIcons(app)

console.log(process.env.VUE_APP_BASE_API)

app.use(store).use(router).use(ElementPlus).mount('#app')
