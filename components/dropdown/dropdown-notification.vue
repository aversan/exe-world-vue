<template>
  <span
    :class="{
      'dropdown-notification flex flex-no-wrap items-center px-4 py-2 relative': true,
      'is-new': isNew,
    }"
    role="button"
  >
    <img v-if="image" class="dropdown-notification-image rounded-lg mr-4 w-10 h-10 object-cover flex-shrink-0" :src="image" width="40" height="40" />
    <span v-if="text" class="dropdown-notification-text text-body-2 flex-auto clamp-line-2" v-text="text" />
    <Icon class="ml-4 relative dropdown-notification-action" name="close" role="button" />
  </span>
</template>

<script>
export default {
  props: {
    new: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    isNew() {
      return !!this.new
    },
  },
}
</script>

<style lang="scss">
.dropdown-notification {
  &::before {
    @apply absolute left-0 inset-y-0;
    content: '';
    width: 2px;
  }
}
</style>
