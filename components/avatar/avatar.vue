<template>
  <img
    :class="{
      'avatar object-cover flex-shrink-0': true,
      [shapeClassMap[shape]]: true,
      [sizeClassMap[size]]: true,
    }"
    :src="src"
    :loading="lazy"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    shape: {
      type: String,
      default: 'circle', // circle square
    },
    size: {
      type: String,
      default: 'medium', // extra large medium small
    },
    lazy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      shapeClassMap: {
        circle: 'avatar-circle rounded-full',
        square: 'avatar-square rounded-lg',
      },
      sizeClassMap: {
        extra: 'avatar-extra w-18 h-18 md:w-28 md:h-28', // 72px 112px
        large: 'avatar-large w-10 h-10 md:w-14 md:h-14', // 40px 56px
        medium: 'avatar-medium w-8 h-8 md:w-10 md:h-10', // 32px 40px
        small: 'avatar-small w-8 h-8', // 32px
      },
    }
  },
}
</script>
