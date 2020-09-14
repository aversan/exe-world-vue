<template>
  <div
    :class="{
      'dropdown-notification-container overflow-hidden': true,
      [themeClassMap[theme]]: true,
    }"
  >
    <div
      :class="{
        'dropdown-notification-wrapper overflow-y-auto pr-8 max-h-xs divide-y': true,
        [divideThemeClassMap[theme]]: true,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import theme, { themes } from '@/mixins/theme'

export default {
  mixins: [theme],
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'dropdown-notification-theme-day',
        [themes.NIGHT]: 'dropdown-notification-theme-night',
      },
      divideThemeClassMap: {
        [themes.DAY]: 'divide-day-grey-medium',
        [themes.NIGHT]: 'divide-white divide-opacity-20',
      },
    }
  },
}
</script>

<style lang="scss">
.dropdown-notification-container {
  .dropdown-notification-wrapper {
    width: calc(100% + 2rem);
  }

  &.dropdown-notification-theme-day {
    .dropdown-notification {
      &:hover,
      &:focus {
        @apply bg-day-violet-primary bg-opacity-15;
      }

      &:active {
        @apply bg-day-violet-primary bg-opacity-20;
      }

      &.is-new {
        @apply bg-day-grey-light;

        &::before {
          @apply bg-day-orange-primary;
        }
      }

      .dropdown-notification-text {
        @apply text-black text-opacity-90;
      }

      .dropdown-notification-action {
        @apply text-day-grey-primary;

        &:hover,
        &:focus {
          @apply text-day-violet-primary;
        }

        &:active {
          @apply text-day-violet-dark;
        }
      }
    }
  }

  &.dropdown-notification-theme-night {
    .dropdown-notification {
      &:hover,
      &:focus {
        @apply bg-day-violet-primary bg-opacity-15;
      }

      &:active {
        @apply bg-day-violet-primary bg-opacity-20;
      }

      &.is-new {
        @apply bg-white bg-opacity-5;

        &::before {
          @apply bg-day-orange-primary;
        }
      }

      .dropdown-notification-text {
        @apply text-white text-opacity-72;
      }

      .dropdown-notification-action {
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
  }
}
</style>
