<template>
  <small
    :class="{
      'badge inline-flex items-center justify-center h-4 px-1 rounded w-6': true,
      [variantClassMap[variant]]: true,
      [themeClassMap[theme]]: true,
      [positionClassMap[position]]: true,
      'badge-bordered border': bordered,
    }"
  >
    {{ text }}
  </small>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'static', // static top
    },
    variant: {
      type: String,
      default: 'normal', // normal medium
    },
    theme: {
      type: String,
      default: 'day', // day night
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      positionClassMap: {
        static: 'badge-static',
        top: 'badge-top absolute transform -translate-y-1/2 -translate-x-1/2',
      },
      variantClassMap: {
        normal: 'badge-variant-normal caption-2',
        medium: 'badge-variant-medium caption-2-medium',
      },
      themeClassMap: {
        day: 'badge-theme-day bg-day-orange-primary text-white',
        night: 'badge-theme-night bg-day-orange-primary text-white',
      },
    }
  },
}
</script>

<style lang="scss">
.badge {
  &-bordered {
    &.badge-theme-day {
      @apply border-white;
    }

    &.badge-theme-night {
      @apply border-grey-750;
    }
  }
}
</style>
