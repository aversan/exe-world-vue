<template>
  <label
    :class="{
      'relative floating-input-container w-full cursor-text block': true,
      [themeClassMap[theme]]: true,
      'is-disabled': disabled,
      'is-filled': isFilled,
      'is-focus': isFocus,
      'is-active': active,
    }"
  >
    <span
      :class="{
        [labelClass]: true,
        [labelPositionClassMap[labelPosition]]: true,
        [labelThemeClassMap[theme]]: true,
      }"
      v-text="label"
    />
    <Input
      class="floating-input"
      variant="floating"
      :theme="theme"
      :type="type"
      placeholder=""
      :disabled="disabled"
      :active="active"
      :error="error"
      :value="value"
      v-on="$listeners"
      @focus="this.onFocus"
      @blur="this.onBlur"
      v-bind="$attrs"
    />
  </label>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import floatingTextfield from '@/mixins/floating-textfield'
import textfieldProps from '@/mixins/textfield'
import Input from './input'

export default {
  mixins: [theme, floatingTextfield, textfieldProps],
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
  components: {
    Input,
  },
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'floating-input-theme-day',
        [themes.NIGHT]: 'floating-input-theme-night',
      },
    }
  },
}
</script>
