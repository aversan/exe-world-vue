<template>
  <span
    :class="{
      'sidemenu-link flex flex-col items-center justify-end rounded-xl h-20 overflow-hidden px-4 pb-3_5': true,
      'is-selected': selected,
    }"
  >
    <BadgeContainer v-if="hasBadge">
      <Icon class="sidemenu-icon" :name="icon" />
      <Badge bordered :text="badge" :theme="theme" position="top" />
    </BadgeContainer>
    <Icon v-if="!hasBadge" class="sidemenu-icon" :name="icon" />
    <span class="sidemenu-text caption-1-all-caps whitespace-no-wrap mt-2" v-text="text" />
  </span>
</template>

<script>
import { BadgeContainer, Badge } from '@/components/badge/index'
import Icon from '@/components/icon/icon'

export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      default: '',
    },
  },
  components: {
    BadgeContainer,
    Badge,
    Icon,
  },
  computed: {
    hasBadge() {
      return !!this.badge
    },
  },
}
</script>
