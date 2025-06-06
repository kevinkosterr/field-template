<template>
  <input type="text" :value="currentModelValue" @input="onFieldValueChanged" @blur="onBlur">
</template>

<script setup>
import {
  useFieldProps,
  useFieldEmits,
  useFieldAttributes,
  useFieldValidate,
  useFormModel
} from '@kevinkosterr/vue3-form-generator'
import { toRefs } from 'vue'

const emits = defineEmits(useFieldEmits())
const props = defineProps(useFieldProps())

const { field, model } = toRefs(props)
const { currentModelValue } = useFormModel(model.value, field.value)
const { validate, errors } = useFieldValidate(model.value, field.value)

const { isRequired, isDisabled, isReadonly, isVisible, hint } = useFieldAttributes(model.value, field.value)

/**
 * Emits an `onInput` event when the value of the field has changed.
 * This passes the current value to the FormGroup parent component, which in turn passes it on
 * to the FormGenerator component. This causes the model of the form to update.
 * @param {HTMLInputElement} target - target of the event.
 */
const onFieldValueChanged = ({ target }) => {
  // We'll reset the errors here, because the value has changed we need to validate it again.
  errors.value = []
  emits('onInput', target.value)
}

/**
 * Validates the current value for this field when the `blur` event was triggered.
 * This is usually default behaviour for any field component that relies on native HTML inputs.
 */
const onBlur = () => {
  validate(currentModelValue.value).then((validationErrors) => {
    emits('validated',
      validationErrors.length === 0, // Is the current value for this field valid?
      validationErrors, // Actual errors
      field.value // Field schema/object
    )
  })
}

/**
 * There's a few reasons you'll want to use defineExpose in your Composition API component:
 * - Hints: you'll need this if you want to support the `hint` property for your field.
 * - Errors: you'll need this for any kind of validation to work properly.
 * - noLabel, must be true if you don't want the FormGroup to render a label by itself. You can still include a custom
 *    one in your field component if you want though.
 * */
defineExpose({ hint, errors })
</script>

<style scoped lang="scss">
.field-placeholder {
  color: grey;
  font-style: italic;
}
</style>
