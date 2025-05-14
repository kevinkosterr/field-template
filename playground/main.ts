import { createApp } from 'vue'
import VueFormGenerator from '@kevinkosterr/vue3-form-generator'
import FieldTemplate from '@/components/FieldTemplate.vue'

// Basic styling for all default components from library
import '@kevinkosterr/vue3-form-generator/themes/basic.css'

import App from './App.vue'

const app = createApp(App)

app.component('FieldTemplate', FieldTemplate)
app.use(VueFormGenerator)
app.mount('#app')
