<template>
  <span
    :class="{
      'sidemenu-link flex flex-col items-center justify-end rounded-xl h-20 overflow-hidden px-4 pb-3_5': true,
      selected: selected,
    }"
    role="tab"
  >
    <BadgeContainer v-if="hasBadge">
      <svgicon class="sidemenu-icon" :name="icon"></svgicon>
      <Badge bordered :text="badge" :theme="theme" position="top" />
    </BadgeContainer>
    <svgicon v-if="!hasBadge" class="sidemenu-icon" :name="icon"></svgicon>
    <span class="sidemenu-text caption-1-all-caps whitespace-no-wrap mt-2">{{
      text
    }}</span>
  </span>
</template>

<script>
import '@/components/icons/games'
import '@/components/icons/library'
import '@/components/icons/message'
import '@/components/icons/friends'
import '@/components/icons/news'
import { BadgeContainer, Badge } from '@/components/badge/index'

export default {
  components: {
    BadgeContainer,
    Badge,
  },
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
    theme: {
      type: String,
      default: 'day',
    },
  },
  computed: {
    hasBadge() {
      return !!this.badge
    },
  },
}
</script>
