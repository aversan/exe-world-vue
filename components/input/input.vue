<template>
  <input
    :class="{
      'input appearance-none border-2 w-full text-body-1 focus:outline-none': true,
      [typeClassMap[type]]: true,
      [themeClassMap[theme]]: true,
      'input-pill': pill,
      'is-disabled': disabled,
      'is-active': active,
      'is-error': error,
    }"
    :value="value"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    v-on="inputListeners"
  />
</template>

<script>
import theme from '@/mixins/theme'

export default {
  mixins: [theme],
  props: {
    placeholder: {
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
    type: {
      type: String,
      default: 'normal', // normal floating
    },
  },
  data() {
    return {
      typeClassMap: {
        normal: 'input-normal',
        floating: 'input-floating',
      },
      themeClassMap: {
        day: 'input-theme-day',
        night: 'input-theme-night',
      },
    }
  },
  computed: {
    inputListeners() {
      const vm = this

      return Object.assign(
        {},

        this.$listeners,
        {
          input(event) {
            vm.$emit('input', event.target.value)
          },
        }
      )
    },
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
