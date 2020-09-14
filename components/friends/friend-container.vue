<template>
  <div
    :class="{
      'friend-container overflow-hidden': true,
      [themeClassMap[theme]]: true,
    }"
  >
    <div
      :class="{
        'friend-wrapper overflow-y-auto pr-8 space-y-14 flex flex-col': true,
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
        [themes.DAY]: 'friend-theme-day',
        [themes.NIGHT]: 'friend-theme-night',
      },
    }
  },
}
</script>

<style lang="scss">
.friend-container {
  .friend-wrapper {
    width: calc(100% + 2rem);
  }
}
</style>
