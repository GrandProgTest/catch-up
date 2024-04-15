import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";


// Application Theme
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'

// Icons
import 'primeicons/primeicons.css'

// PrimeFlex support
import 'primeflex/primeflex.css'
import Button           from "primevue/button";
import Card             from "primevue/card";
import SelectButton     from "primevue/selectbutton";
import Sidebar          from "primevue/sidebar";
import Avatar           from "primevue/avatar";
import Menu             from "primevue/menu";
import Toolbar          from "primevue/toolbar";
import Menubar          from "primevue/menubar";


const app =createApp(App);

app.use(PrimeVue , { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)

app.mount('#app');
