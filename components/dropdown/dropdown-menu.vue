<template>
  <!--
    Dropdown panel, show/hide based on dropdown state.
    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div
    :class="{
      'dropdown-menu rounded-xl shadow-menu inline-flex flex-col bg-whte': true,
      [themeClassMap[theme]]: true,
      [variantClassMap[variant]]: true,
      'dropdown-menu-static absolute origin-top-right right-0': !static,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import theme, { themes } from '@/mixins/theme'

export default {
  mixins: [theme],
  props: {
    static: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'dropdown-theme-day bg-white',
        [themes.NIGHT]: 'dropdown-theme-night bg-elevation-24',
      },
      variantClassMap: {
        normal: 'dropdown-normal',
        notification: 'dropdown-notification',
      },
    }
  },
}
</script>

<style lang="scss">
.dropdown-menu {
  &.dropdown-theme-day {
    .dropdown-link {
      .dropdown-link-icon,
      .dropdown-link-text {
        @apply text-day-grey-primary;
      }

      &:hover,
      &:focus {
        @apply bg-day-violet-primary bg-opacity-15;

        .dropdown-link-icon {
          @apply text-day-violet-primary;
        }

        .dropdown-link-text {
          @apply text-day-violet-primary;
        }
      }

      &:active {
        @apply bg-day-violet-primary bg-opacity-20;

        .dropdown-link-icon {
          @apply text-day-violet-dark;
        }

        .dropdown-link-text {
          @apply text-day-violet-dark;
        }
      }

      &.is-selected {
        @apply bg-transparent;

        .dropdown-link-icon {
          @apply text-day-violet-primary;
        }

        .dropdown-link-text {
          @apply text-day-violet-primary;
        }
      }

      &.is-warning {
        .dropdown-link-icon,
        .dropdown-link-text {
          @apply text-day-orange-primary;
        }
      }
    }
  }

  &.dropdown-theme-night {
    .dropdown-link {
      .dropdown-link-icon {
        @apply text-white text-opacity-72;
      }

      .dropdown-link-text {
        @apply text-white text-opacity-90;
      }

      &:hover,
      &:focus {
        @apply bg-night-violet-primary bg-opacity-15;

        .dropdown-link-icon {
          @apply text-night-violet-primary;
        }

        .dropdown-link-text {
          @apply text-night-violet-primary;
        }
      }

      &:active {
        @apply bg-night-violet-primary bg-opacity-20;

        .dropdown-link-icon {
          @apply text-night-violet-primary;
        }

        .dropdown-link-text {
          @apply text-night-violet-primary;
        }
      }

      &.is-selected {
        @apply bg-transparent;

        .dropdown-link-icon {
          @apply text-night-violet-primary;
        }

        .dropdown-link-text {
          @apply text-night-violet-primary;
        }
      }

      &.is-warning {
        .dropdown-link-icon,
        .dropdown-link-text {
          @apply text-night-orange-primary;
        }
      }
    }
  }
}
</style>
