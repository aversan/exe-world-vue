<template>
  <footer
    :class="{
      'footer container h-16 flex flex-no-wrap items-center mx-auto border-t justify-between px-12': true,
      'bg-white border-day-grey-medium footer-theme-day': theme === 'day',
      'bg-elevation-01 border-white border-opacity-20 footer-theme-night':
        theme === 'night',
    }"
  >
    <div class="footer-text text-body-2">
      © 2020 EXE. WORLD | All rights reserved
    </div>
    <div class="footer-nav flex space-x-12 text-body-2-medium">
      <a class="footer-link" href="">About</a>
      <a class="footer-link" href="">Help</a>
      <a class="footer-link" href="">For Developers</a>
    </div>
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
        @apply text-day-grey-primary;
      }

      &:active,
      &.active,
      &.active:hover,
      &.active:focus {
        @apply text-day-grey-primary;
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
        @apply text-opacity-100;
      }

      &:active,
      &.active,
      &.active:hover,
      &.active:focus {
        @apply text-opacity-100;
      }
    }
  }
}
</style>
