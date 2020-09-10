<template>
  <footer
    :class="{
      'footer h-16 flex flex-shrink-0 flex-no-wrap items-center justify-between px-12 rounded-bl-2xl border-t': true,
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
export default {
  props: {
    theme: {
      type: String,
      default: 'day',
    },
  },
  data() {
    return {
      themeClassMap: {
        day: 'bg-white border-day-grey-medium border-opacity-56 footer-theme-day',
        night: 'bg-elevation-01 border-white border-opacity-20 footer-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.footer {
  &.footer-theme-day {
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
