<template>
  <div
    :class="{
      'form-field w-full': true,
      [themeClassMap[theme]]: true,
      'is-error': isError,
      'is-disabled pointer-events-none': disabled,
    }"
  >
    <FloatingInput
      :label="label"
      :theme="theme"
      :disabled="disabled"
      :error="isError"
      :value="value"
      v-on="$listeners"
      :type="type"
    />
    <small
      :class="{
        'form-field-support caption-2 mt-1 block px-4': true,
        'is-error': isError,
      }"
      v-if="supportText"
      v-text="supportText"
    />
  </div>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import textfieldProps from '@/mixins/textfield'
import FloatingInput from '@/components/input/floating-input'

export default {
  mixins: [theme, textfieldProps],
  props: {
    label: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  components: {
    FloatingInput,
  },
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'form-field-theme-day',
        [themes.NIGHT]: 'form-field-theme-night',
      },
    }
  },
  computed: {
    supportText() {
      return this.error || this.hint
    },
    isError() {
      return !!this.error
    },
  },
}
</script>

<style lang="scss">
.form-field {
  &.form-field-theme-day {
    .form-field-support {
      @apply text-day-grey-primary;

      &.is-error {
        @apply text-day-orange-primary;
      }
    }
  }

  &.form-field-theme-night {
    .form-field-support {
      @apply text-white text-opacity-56;

      &.is-error {
        @apply text-night-orange-primary;
      }
    }
  }
}
</style>
