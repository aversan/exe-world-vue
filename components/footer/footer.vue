<template>
  <footer
    :class="{
      'footer h-16 flex flex-shrink-0 flex-no-wrap items-center justify-between px-12 rounded-bl-2xl': true,
      [themeClassMap[theme]]: true,
    }"
  >
    <small class="footer-text text-body-2 truncate">
      © 2020 EXE. WORLD | All rights reserved
    </small>
    <nav class="footer-nav flex space-x-12 text-body-2-medium ml-12">
      <a class="footer-link truncate" href="">About</a>
      <a class="footer-link truncate" href="">Help</a>
      <a class="footer-link truncate" href="">For Developers</a>
    </nav>
  </footer>
</template>

<script>
import theme, { themes } from '@/mixins/theme'

export default {
  mixins: [theme],
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'bg-white footer-theme-day',
        [themes.NIGHT]: 'bg-elevation-01 footer-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.footer {
  @apply relative;

  &::before {
    content: '';
    @apply absolute inset-x-0 top-0 h-px mx-12;
  }

  &.footer-theme-day {
    &::before {
      @apply bg-day-grey-medium bg-opacity-56;
    }

    .footer-text {
      @apply text-day-grey-primary;
    }

    .footer-link {
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

  &.footer-theme-night {
    &::before {
      @apply bg-white bg-opacity-20;
    }

    .footer-text {
      @apply text-white text-opacity-56;
    }

    .footer-link {
      @apply text-white text-opacity-72;

      &:hover,
      &:focus {
        @apply text-night-violet-primary;
      }

      &:active {
        @apply text-night-violet-dark;
      }
    }
  }
}
</style>
