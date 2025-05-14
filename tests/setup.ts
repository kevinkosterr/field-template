import { config } from '@vue/test-utils'

import FieldTemplate from '@/components/FieldTemplate.vue'
import VueFormGenerator from '@kevinkosterr/vue3-form-generator'

// Register VueFormGenerator as a global plugin inside the tests
config.global.plugins = [ VueFormGenerator ]
// Register your field component here in order to be able to use it
config.global.components = { FieldTemplate }
