<template>
  <label
    :class="{
      'relative floating-textarea-container w-full cursor-text block': true,
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
      v-text="label"
    />
    <Textarea
      class="floating-textarea"
      variant="floating"
      :theme="theme"
      placeholder=""
      :disabled="disabled"
      :active="active"
      :error="error"
      :value="value"
      v-on="$listeners"
      v-bind="$attrs"
      @focus="this.onFocus"
      @blur="this.onBlur"
    />
  </label>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import floatingTextfield from '@/mixins/floating-textfield'
import Textarea from './textarea'

export default {
  mixins: [theme, floatingTextfield],
  props: {
    value: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Textarea,
  },
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'floating-textarea-theme-day',
        [themes.NIGHT]: 'floating-textarea-theme-night',
      },
    }
  },
}
</script>
