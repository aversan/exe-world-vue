<template>
  <div
    :class="{
      'dropdown-header p-4 flex flex-no-wrap': true,
      [themeClassMap[theme]]: true,
    }"
  >
    <div class="h6 truncate clamp-line-2 dropdown-header-title flex-auto" v-text="text" />
    <Icon class="dropdown-header-action ml-4" name="clear-all" role="button" />
  </div>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import Icon from '@/components/icon/icon'

export default {
  mixins: [theme],
  props: {
    text: {
      type: String,
      required: true,
    },
    action: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'dropdown-header-theme-day',
        [themes.NIGHT]: 'dropdown-header-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.dropdown-header {
  &.dropdown-header-theme-day {
    .dropdown-header-title {
      @apply text-black;
    }

    .dropdown-header-action {
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

  &.dropdown-header-theme-night {
    .dropdown-header-title {
      @apply text-white text-opacity-90;
    }

    .dropdown-header-action {
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
</style>
