<template>
  <h4>Values</h4>
  <pre style="background: lightgray; padding: 1em;">
    {{ form.model }}
  </pre>
  <vue-form-generator :schema="form.schema" :model="form.model" />
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  model: {
    placeholder: ''
  },
  schema: {
    fields: [
      {
        name: 'Placeholder field',
        label: 'Placeholder',
        type: 'template',
        model: 'placeholder'
      }
    ]
  }
})
</script>