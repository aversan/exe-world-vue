<template>
  <label
    :class="{
      'relative floating-input-container w-full cursor-text': true,
      [themeClassMap[theme]]: true,
      'is-disabled': disabled,
      'is-filled': isFilled,
      'is-focus': isFocus,
      'is-active': active,
    }"
  >
    <span
      :class="{
        'max-w-full absolute top-0 px-4 py-2_5 inline-flex items-center overflow-hidden': true,
        [labelPositionClassMap[labelPosition]]: true,
        [labelThemeClassMap[theme]]: true,
      }"
    >
      {{ label }}
    </span>
    <Input
      class="floating-input"
      type="floating"
      :theme="theme"
      placeholder=""
      :disabled="disabled"
      :active="active"
      :error="error"
      :value="value"
      v-on="$listeners"
      @focus="focus = true"
      @blur="focus = false"
    />
  </label>
</template>

<script>
import theme from '@/mixins/theme'
import Input from './input'

export default {
  mixins: [theme],
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    focus: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Input,
  },
  data() {
    return {
      labelPositionClassMap: {
        normal: 'label text-body-1 h-full',
        top: 'label-top caption-2 h-auto',
      },
      labelThemeClassMap: {
        day: 'label-theme-day text-day-grey-primary',
        night: 'label-theme-night text-white text-opacity-56',
      },
      themeClassMap: {
        day: 'floating-input-theme-day',
        night: 'floating-input-theme-night',
      },
    }
  },
  computed: {
    isFilled() {
      return this.value !== ''
    },
    isFocus() {
      return this.focus
    },
    labelPosition() {
      if (this.isFilled || this.isFocus) {
        return 'top'
      }

      return 'normal'
    },
  },
}
</script>
