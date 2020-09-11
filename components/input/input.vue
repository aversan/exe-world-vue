<template>
  <input
    :class="{
      'input-field appearance-none border-2 w-full text-body-1-medium focus:outline-none': true,
      [sizeClassMap[size]]: true,
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
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    active: {
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
    pill: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium', // medium
    },
    theme: {
      type: String,
      default: 'day', // day night
    },
  },
  data() {
    return {
      sizeClassMap: {
        medium: 'input-medium',
      },
      themeClassMap: {
        day: 'input-theme-day',
        night: 'input-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.input-field {
  &.is-disabled,
  &:disabled {
    @apply pointer-events-none opacity-32;
  }

  &::placeholder {
    @apply opacity-100;
  }

  &.input-medium {
    @apply h-12 px-4 py-2_5 rounded-xl;
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
