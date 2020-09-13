<template>
  <textarea
    :class="{
      'textarea appearance-none border-2 w-full text-body-1 focus:outline-none': true,
      [variantClassMap[variant]]: true,
      [themeClassMap[theme]]: true,
      'is-disabled': disabled,
      'is-active': active,
      'is-error': error,
    }"
    :placeholder="placeholder"
    :disabled="disabled"
    v-on="inputListeners"
    v-bind="$attrs"
    v-model="currentValue"
  >
  </textarea>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import valueOrSlot from '@/mixins/value-or-slot'
import textfieldProps from '@/mixins/textfield'

export default {
  mixins: [theme, valueOrSlot, textfieldProps],
  props: {
    variant: {
      type: String,
      default: 'normal', // normal floating
    },
  },
  data() {
    return {
      variantClassMap: {
        normal: 'textarea-normal',
        floating: 'textarea-floating',
      },
      themeClassMap: {
        [themes.DAY]: 'textarea-theme-day',
        [themes.NIGHT]: 'textarea-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.textarea {
  @apply px-4 rounded-xl;

  &.is-disabled,
  &:disabled {
    @apply pointer-events-none opacity-32;
  }

  &::placeholder {
    @apply opacity-100;
  }

  &.textarea-normal {
    @apply min-h-12 py-2_5;
  }

  &.textarea-floating {
    @apply min-h-14 pt-5_5 pb-2_5;
  }

  &.textarea-theme-day {
    @apply bg-day-grey-light border-day-grey-light text-black;

    &:focus {
      @apply bg-white border-day-violet-primary;
    }

    &.is-active {
      @apply bg-white border-day-violet-primary;
    }

    &.is-error {
      @apply bg-white border-day-orange-primary;
    }

    &::placeholder {
      @apply text-day-grey-primary;
    }
  }

  &.textarea-theme-night {
    @apply bg-white bg-opacity-10 border-white border-opacity-10 text-white text-opacity-90;

    &:focus {
      @apply border-day-violet-primary;
    }

    &.is-active {
      @apply border-night-violet-primary;
    }

    &.is-error {
      @apply border-night-orange-primary;
    }

    &::placeholder {
      @apply text-white text-opacity-56;
    }
  }
}
</style>
