<template>
  <component
    :is="tag"
    :class="{
      'button text-button-1': true,
      [sizeClassMap[size]]: true,
      [variantClassMap[variant]]: true,
      [themeClassMap[theme]]: true,
      'button-with-icon': hasIcon && hasText,
      'button-only-icon': hasIcon && !hasText,
      'button-pill': pill,
      'is-disabled': disabled && !isTagButton,
      'is-active': active,
    }"
    :disabled="disabled && isTagButton"
    :role="role"
  >
    <Icon v-if="hasIcon" class="button-icon" :name="iconName" />
    <span v-if="hasText" class="overflow-hidden" v-text="text" />
  </component>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import Icon from '@/components/icon/icon'

export default {
  mixins: [theme],
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
    pill: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium', // big medium
    },
    variant: {
      type: String,
      default: 'primary', // primary secondary transparent link
    },
    tag: {
      type: String,
      default: 'button', // button a span
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      sizeClassMap: {
        big: 'button-big',
        medium: 'button-medium',
        6: 'button-6 h-6',
        8: 'button-8 h-8',
        12: 'button-12 h-12',
        10: 'button-10 h-10',
        16: 'button-16 h-16',
      },
      variantClassMap: {
        primary: 'button-primary',
        secondary: 'button-secondary',
        transparent: 'button-transparent',
        slider: 'button-slider',
        social: 'button-social',
        link: 'button-link',
      },
      themeClassMap: {
        [themes.DAY]: 'button-theme-day',
        [themes.NIGHT]: 'button-theme-night',
      },
    }
  },
  computed: {
    hasIcon() {
      return !!this.iconName
    },
    hasText() {
      return !!this.text
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
  @apply inline-flex flex-no-wrap items-center px-4 justify-center;

  &:focus {
    @apply outline-none;
  }

  &.is-disabled,
  &:disabled {
    @apply pointer-events-none opacity-32;
  }

  &-only-icon {
    @apply px-0;
  }

  &-big {
    @apply rounded-xl h-12;

    &.button-with-icon {
      @apply pr-5 pl-0;

      .button-icon {
        @apply mx-3;
      }
    }

    &.button-only-icon {
      @apply w-12;
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

    &.button-only-icon {
      @apply w-9;

      .button-icon {
        &.svgicon-more-h,
        &.svgicon-more-v {
          @apply w-5 h-5;
        }
      }
    }
  }

  &-6 {
    &.button-only-icon {
      @apply w-6;

      .button-icon {
        @apply w-4 h-4;
      }
    }
  }

  &-8 {
    @apply rounded-lg;

    &.button-only-icon {
      @apply w-8;
    }
  }

  &-10 {
    @apply rounded-lg;

    &.button-only-icon {
      @apply w-10;

      .button-icon {
        @apply w-8 h-8;
      }
    }

    &.button-slider {
      @apply h-16;

      &:not(.is-disabled) {
        @apply shadow-medium;
      }
    }
  }

  &-12 {
    @apply rounded-xl;

    &.button-only-icon {
      @apply w-12;
    }
  }

  &-16 {
    @apply rounded-xl;

    &.button-only-icon {
      @apply w-16;

      .button-icon {
        @apply w-12 h-12;
      }
    }

    &.button-slider {
      @apply h-22;

      &:not(.is-disabled) {
        @apply shadow-big;
      }
    }
  }

  &-slider {
    &.button-theme-day {
      @apply bg-black bg-opacity-90 text-white backdrop-blur;

      &:hover,
      &:focus {
        @apply bg-day-violet-primary;
      }

      &:active,
      &.is-active {
        @apply bg-day-violet-dark;
      }
    }

    &.button-theme-night {
      @apply bg-white bg-opacity-20 text-white backdrop-blur;

      &:hover,
      &:focus {
        @apply bg-night-violet-primary;
      }

      &:active,
      &.is-active {
        @apply bg-night-violet-dark;
      }
    }
  }

  &-primary {
    &.button-theme-day {
      @apply bg-day-violet-primary text-white;

      &:hover,
      &:focus {
        @apply bg-day-violet-hover;
      }

      &:active,
      &.is-active {
        @apply bg-day-violet-dark;
      }
    }

    &.button-theme-night {
      @apply bg-night-violet-primary text-white;

      &:hover,
      &:focus {
        @apply bg-night-violet-hover;
      }

      &:active,
      &.is-active {
        @apply bg-night-violet-dark;
      }
    }
  }

  &-secondary {
    &.button-theme-day {
      @apply bg-day-violet-primary bg-opacity-15 text-day-violet-primary;

      &:hover,
      &:focus {
        @apply bg-opacity-20;
      }

      &:active,
      &.is-active {
        @apply bg-day-violet-dark text-white;
      }
    }

    &.button-theme-night {
      @apply bg-day-violet-primary bg-opacity-15 text-night-violet-primary;

      &:hover,
      &:focus {
        @apply bg-opacity-20;
      }

      &:active,
      &.is-active {
        @apply bg-night-violet-dark text-white text-opacity-90;
      }
    }
  }

  &-link {
    &.button-theme-day {
      @apply text-day-grey-primary;

      &:hover,
      &:focus {
        @apply text-day-violet-primary;
      }

      &:active {
        @apply text-day-violet-dark;
      }
    }

    &.button-theme-night {
      @apply text-white text-opacity-56;

      &:hover,
      &:focus {
        @apply text-night-violet-primary;
      }

      &:active {
        @apply text-night-violet-primary;
      }
    }
  }

  &-pill {
    @apply rounded-full;
  }
}
</style>
