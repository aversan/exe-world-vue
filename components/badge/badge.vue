<template>
  <small
    :class="{
      'badge inline-flex items-center justify-center overflow-hidden': true,
      [variantClassMap[variant]]: true,
      [themeClassMap[theme]]: true,
      [positionClassMap[position]]: true,
      'badge-bordered border': bordered && !dot,
      'badge-not-dot h-4 w-6 px-1 rounded': !dot,
      'badge-dot w-2 h-2 rounded-full': dot,
    }"
    v-text="text"
  />
</template>

<script>
import theme, { themes } from '@/mixins/theme'

export default {
  mixins: [theme],
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
    bordered: {
      type: Boolean,
      default: false,
    },
    dot: {
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
        [themes.DAY]: 'badge-theme-day bg-day-orange-primary text-white',
        [themes.NIGHT]: 'badge-theme-night bg-day-orange-primary text-white',
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

  &-dot {
    text-indent: -999999px;

    &.badge-theme-day {
      @apply bg-day-orange-primary border-day-grey-light;
    }

    &.badge-theme-night {
      @apply bg-day-orange-primary border-black;
    }
  }
}
</style>
