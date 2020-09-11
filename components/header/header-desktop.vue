<template>
  <div
    :class="{
      'header-desktop h-22 flex flex-no-wrap items-center border-b justify-between pl-12 flex-shrink-0 rounded-tl-2xl': true,
      [themeClassMap[theme]]: true,
    }"
  >
    <ExeLogo
      :class="`flex-shrink-0 fill-current header-logo text-${theme}-violet-primary mr-8`"
    />
    <div class="ml-auto flex flex-no-wrap pr-12 space-x-8 overflow-hidden">
      <span class="header-button" role="button">
        <Icon class="header-button-icon mr-2" name="wallet" />
        <span class="header-button-text text-body-2-medium">$150</span>
        <span
          :class="`rounded-full bg-${theme}-violet-primary h-6 ml-2 inline-flex items-center`"
        >
          <Icon class="text-white" name="add" />
        </span>
      </span>
      <span class="header-button" role="button">
        <BadgeContainer>
          <Icon class="header-button-icon" name="notification" />
          <Badge bordered text="2" :theme="theme" position="top" />
        </BadgeContainer>
      </span>
      <span class="header-button" role="button">
        <img
          class="mr-4 rounded-full w-10 h-10 object-cover"
          width="40"
          height="40"
          src="http://placehold.it/40x40"
          alt=""
        />
        <span class="header-button-text subtitle-1">Alex Smith</span>
        <Icon class="header-button-icon ml-4" name="settings" />
      </span>
    </div>
  </div>
</template>

<script>
import { BadgeContainer, Badge } from '@/components/badge/index'
import ExeLogo from '@/assets/images/exe-logo.svg'
import Icon from '@/components/icon/icon'

export default {
  components: {
    ExeLogo,
    BadgeContainer,
    Badge,
    Icon,
  },
  props: {
    theme: {
      type: String,
      default: 'day',
    },
  },
  data() {
    return {
      themeClassMap: {
        day: 'bg-white border-day-grey-medium border-opacity-56 header-theme-day',
        night:
          'bg-elevation-01 border-white border-opacity-20 header-theme-night',
      },
      hideMenu: true,
    }
  },
}
</script>

<style lang="scss">
.header-desktop {
  @apply relative;

  &::before {
    content: '';
    @apply absolute inset-x-0 bottom-0 h-px mx-12;
  }

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

      &:active {
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

      &:active {
        @apply bg-night-violet-primary bg-opacity-20;
      }
    }
  }
}
</style>
