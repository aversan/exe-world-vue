<template>
  <div
    :class="{
      'header header-desktop container h-22 flex flex-no-wrap items-center mx-auto border-b justify-between pl-12': true,
      'bg-white border-day-grey-medium header-theme-day': theme === 'day',
      'bg-elevation-01 border-white border-opacity-20 header-theme-night': theme === 'night',
    }"
    class=""
  >
    <ExeLogo
      :class="{
        'flex-shrink-0 fill-current header-logo': true,
        'text-day-violet-primary': theme === 'day',
        'text-night-violet-primary': theme === 'night',
      }"
    />
    <div class="ml-auto flex flex-no-wrap pr-12 space-x-8 overflow-hidden">
      <span class="header-button" role="button">
        <svgicon class="header-button-icon mr-2" name="wallet" />
        <span class="header-button-text text-body-2-medium">$150</span>
        <span :class="`rounded-full bg-${theme}-violet-primary h-6 ml-2 inline-flex items-center`">
          <svgicon class="text-white" name="add" />
        </span>
      </span>
      <span class="header-button" role="button">
        <svgicon class="header-button-icon" name="notification" />
      </span>
      <span class="header-button" role="button">
        <img class="mr-4 rounded-full" width="40" height="40" src="http://placehold.it/40x40" alt="">
        <span class="header-button-text subtitle-1">Alex Smith</span>
        <svgicon class="header-button-icon ml-4" name="settings" />
      </span>
    </div>
  </div>
</template>
<script>
import ExeLogo from '@/assets/images/exe-logo.svg'
import '@/components/icons/add'
import '@/components/icons/wallet'
import '@/components/icons/notification'
import '@/components/icons/settings'

export default {
  components: {
    ExeLogo,
  },
  data() {
    return {
      hideMenu: true,
    }
  },
  props: {
    theme: {
      type: String,
      default: 'day',
    },
  },
}
</script>

<style lang="scss">
.header-desktop {
  .header-button {
    @apply inline-flex flex-no-wrap items-center rounded-xl h-14 px-4 flex-shrink-0;
  }

  &.header-theme-day {
    .header-button {
      @apply bg-day-grey-light;

      .header-button-icon,
      .header-button-text {
        @apply text-day-grey-primary;
      }

      &:hover,
      &:focus {
        @apply bg-day-violet-primary bg-opacity-15;
      }

      &:active,
      &.active,
      &.active:hover,
      &.active:focus {
        @apply bg-day-violet-primary bg-opacity-20;
      }
    }
  }

  &.header-theme-night {
    .header-button {
      @apply bg-elevation-04;

      .header-button-icon,
      .header-button-text {
        @apply text-white;
      }

      .header-button-icon {
        @apply text-opacity-72;
      }

      .header-button-text {
        @apply text-opacity-90;
      }

      &:hover,
      &:focus {
        @apply bg-night-violet-primary bg-opacity-15;
      }

      &:active,
      &.active,
      &.active:hover,
      &.active:focus {
        @apply bg-night-violet-primary bg-opacity-20;
      }
    }
  }
}
</style>
