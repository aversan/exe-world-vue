<template>
  <svgicon
    :class="`svgicon-${name}`"
    :name="name"
  />
</template>

<script>
import './icons/index'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.svg-icon {
  @apply flex-shrink-0 fill-current align-middle inline-block w-6 h-6;
}
</style>
