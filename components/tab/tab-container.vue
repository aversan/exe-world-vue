<template>
  <div
    :class="{
      'tab-container max-w-full overflow-hidden': true,
      [sizeClassMap[size]]: true,
      [themeClassMap[theme]]: true,
    }"
  >
    <div
      class="tab-wrapper flex pb-8 overflow-x-auto whitespace-no-wrap scrolling-touch space-x-2"
      role="tablist"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium', // big medium
    },
    theme: {
      type: String,
      default: 'day', // day night
    },
  },
  data() {
    return {
      sizeClassMap: {
        big: 'tab-big',
        medium: 'tab-medium',
      },
      themeClassMap: {
        day: 'tab-theme-day',
        night: 'tab-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.tab-container {
  .tab-link {
    @apply inline-flex flex-no-wrap items-center justify-center cursor-pointer;
  }

  &.tab-big {
    @apply h-12;

    .tab-link {
      @apply rounded-xl h-12 px-4;
    }
  }

  &.tab-medium {
    @apply h-9;

    .tab-link {
      @apply rounded-lg h-9 px-3;
    }
  }

  &.tab-theme-day {
    .tab-link {
      @apply bg-day-grey-light text-day-grey-primary;

      &:hover,
      &:focus {
        @apply bg-day-orange-primary bg-opacity-15;
      }

      &:active {
        @apply bg-day-orange-primary bg-opacity-20;
      }

      &.is-selected {
        @apply bg-day-orange-primary text-white;
      }
    }
  }

  &.tab-theme-night {
    .tab-link {
      @apply bg-white bg-opacity-5 text-white text-opacity-56;

      &:hover,
      &:focus {
        @apply bg-night-orange-primary bg-opacity-15 text-white;
      }

      &:active {
        @apply bg-night-orange-primary bg-opacity-20 text-white;
      }

      &.is-selected {
        @apply bg-day-orange-primary text-white;
      }
    }
  }
}
</style>
