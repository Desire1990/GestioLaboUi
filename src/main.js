import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab)
dom.watch();
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
// import '@/main.css'
createApp(App)
.use(store)
.use(router)
.mount('#app');

