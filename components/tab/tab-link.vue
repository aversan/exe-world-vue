<template>
  <span
    :class="{
      'tab-link': true,
      [sizeClassMap[size]]: true,
      'is-selected': selected,
    }"
    role="tab"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium', // big medium
    },
  },
  data() {
    return {
      sizeClassMap: {
        big: 'text-button-1',
        medium: 'text-body-1-bold',
      },
    }
  },
}
</script>
