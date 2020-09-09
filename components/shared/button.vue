<template>
  <component
    :is="tag"
    :class="{
      button: true,
      [sizeClassMap[size]]: true,
      [variantClassMap[variant]]: true,
      [themeClassMap[theme]]: true,
      'button-with-icon': hasIcon,
      disabled: !isTagButton && disabled,
      active,
    }"
    :disabled="isTagButton && disabled"
    :role="role"
  >
    <svgicon v-if="hasIcon" class="button-icon" :name="iconName"></svgicon>
    <span class="overflow-hidden">{{ text }}</span>
  </component>
</template>

<script>
import '@/components/icons/index'

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium', // big medium
    },
    variant: {
      type: String,
      default: 'primary', // primary secondary transparent
    },
    theme: {
      type: String,
      default: 'day', // day night
    },
    tag: {
      type: String,
      default: 'button', // button a span
    },
  },
  data() {
    return {
      sizeClassMap: {
        big: 'button-big',
        medium: 'button-medium',
      },
      variantClassMap: {
        primary: 'button-primary',
        secondary: 'button-secondary',
        transparent: 'button-transparent',
      },
      themeClassMap: {
        day: 'button-theme-day',
        night: 'button-theme-night',
      },
    }
  },
  computed: {
    hasIcon() {
      return !!this.iconName
    },
    isTagButton() {
      return this.tag === 'button'
    },
    role() {
      return !this.isTagButton ? 'button' : undefined
    },
  },
}
</script>

<style lang="scss">
.button {
  @apply inline-flex flex-no-wrap items-center uppercase font-extrabold tracking-wider text-sm leading-tightest px-4 justify-center;

  &.disabled,
  &:disabled {
    @apply pointer-events-none;
  }

  &.button-theme-day.disabled,
  &.button-theme-day:disabled {
    @apply opacity-32;
  }

  &-big {
    @apply rounded-xl h-12;

    &.button-with-icon {
      @apply pr-5 pl-0;

      .button-icon {
        @apply mx-3;
      }
    }
  }

  &-medium {
    @apply rounded-lg h-9;

    &.button-with-icon {
      @apply pl-0;

      .button-icon {
        @apply mx-2;
      }
    }
  }

  &-primary {
    &.button-theme-day {
      @apply bg-day-violet-primary text-white;

      &:hover,
      &:focus {
        @apply bg-day-violet-hover text-white;
      }

      &:active,
      &.active,
      &.active:hover,
      &.active:focus {
        @apply bg-day-violet-dark text-white;
      }

      &:disabled,
      &.disabled {
        @apply bg-day-violet-primary text-white;
      }
    }

    &.button-theme-night {
      @apply bg-day-violet-primary text-white;

      &:hover,
      &:focus {
        @apply bg-day-violet-hover text-white;
      }

      &:active,
      &.active,
      &.active:hover,
      &.active:focus {
        @apply bg-day-violet-dark text-white;
      }

      &:disabled,
      &.disabled {
        @apply bg-day-violet-primary text-white;
      }
    }
  }

  &-secondary {
    &.button-theme-day {
      @apply bg-day-violet-primary bg-opacity-15 text-day-violet-primary;

      &:hover,
      &:focus {
        @apply bg-day-violet-primary bg-opacity-20 text-day-violet-primary;
      }

      &:active,
      &.active,
      &.active:hover,
      &.active:focus {
        @apply bg-day-violet-dark text-white;
      }

      &:disabled,
      &.disabled {
        @apply bg-day-violet-primary bg-opacity-15 text-day-violet-primary;
      }
    }
  }

  &-transparent {
    @apply bg-day-violet-primary bg-opacity-15 text-day-violet-primary;

    &:hover,
    &:focus {
      @apply bg-day-violet-primary bg-opacity-20 text-day-violet-primary;
    }

    &:active,
    &.active,
    &.active:hover,
    &.active:focus {
      @apply bg-day-violet-dark text-white;
    }

    &:disabled,
    &.disabled {
      @apply bg-day-violet-primary bg-opacity-15 text-day-violet-primary;
    }
  }
}
</style>
