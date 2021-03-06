<template>
  <input
    :class="{
      'input appearance-none border-2 w-full text-body-1 focus:outline-none': true,
      [variantClassMap[variant]]:true,
      [themeClassMap[theme]]: true,
      'input-pill': pill,
      'is-disabled': disabled,
      'is-active': active,
      'is-error': error,
    }"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    v-on="inputListeners"
    v-bind="$attrs"
  />
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import textfieldProps from '@/mixins/textfield'

export default {
  mixins: [theme, textfieldProps],
  props: {
    type: {
      type: String,
      default: 'text',
    },
    pill: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'normal', // normal floating
    },
  },
  data() {
    return {
      variantClassMap: {
        normal: 'input-normal',
        floating: 'input-floating',
      },
      themeClassMap: {
        [themes.DAY]: 'input-theme-day',
        [themes.NIGHT]: 'input-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.input {
  @apply px-4 rounded-xl;

  &.is-disabled,
  &:disabled {
    @apply pointer-events-none opacity-32;
  }

  &::placeholder {
    @apply opacity-100;
  }

  &.input-normal {
    @apply h-12 py-2_5;
  }

  &.input-floating {
    @apply h-14 pt-5_5 pb-2_5;
  }

  &.input-theme-day {
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

  &.input-theme-night {
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

  &-pill {
    @apply rounded-full;
  }
}
</style>
