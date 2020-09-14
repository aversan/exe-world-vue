<template>
  <span
    :class="{
      'dropdown-link flex items-center px-4 py-2': true,
      'is-selected': selected,
      'is-warning': warning,
    }"
    role="button"
  >
    <Icon v-if="hasIcon" class="dropdown-link-icon mr-4" :name="iconName" />
    <span class="dropdown-link-text subtitle-2 truncate flex-auto" v-text="text" />
  </span>
</template>

<script>
import Icon from '@/components/icon/icon'

export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  },
  components: {
    Icon,
  },
  computed: {
    hasIcon() {
      return !!this.iconName
    },
  },
}
</script>
