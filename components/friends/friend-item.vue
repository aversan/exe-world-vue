<template>
  <div
    :class="{
      'friend-item flex flex-no-wrap items-center py-4 px-10 border-b border-day-grey-medium': true,
      [themeClassMap[theme]]: true,
    }"
    class=""
  >
    <Avatar class="mr-6" size="large" :src="avatar" />
    <div class="subtitle-1 name flex-auto clamp-line-2" v-text="name" />
    <div class="mutual-friends flex flex-no-wrap items-center ml-6 flex-shrink-0">
      <span class="caption-1 mr-2 whitespace-no-wrap support-text">Mutual friends: <span class="count">5</span></span>
      <div class="flex flex-no-wrap space-x-2">
        <Avatar size="small" src="http://placehold.it/32x32" />
        <Avatar size="small" src="http://placehold.it/32x32" />
        <Avatar size="small" src="http://placehold.it/32x32" />
        <Avatar size="small" src="http://placehold.it/32x32" />
      </div>
    </div>
    <div v-if="status === 'accepted'" class="space-x-2 flex flex-no-wrap ml-14 actions">
      <Button variant="secondary" :theme="theme" text="Write" />
      <Button variant="link" :theme="theme" icon-name="more-v" />
    </div>
    <div v-if="status === 'waiting-answer'" class="space-x-2 flex flex-no-wrap ml-14 actions">
      <Button variant="primary" :theme="theme" text="Accept" />
      <Button variant="secondary" :theme="theme" text="Reject" />
    </div>
    <div v-if="status === 'send-request'" class="space-x-2 flex flex-no-wrap ml-14 actions">
      <Button variant="secondary" :theme="theme" text="Cancel Request" />
    </div>
  </div>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import Button from '@/components/button/button'

export default {
  mixins: [theme],
  props: {
    avatar: {
      type: String,
      default: 'http://placehold.it/56x56',
    },
    name: {
      type: String,
      default: 'David Smith',
    },
    status: {
      type: String,
      default: 'accepted', // accepted waiting-answer send-request
    },
  },
  components: {
    Button,
  },
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
.friend-item {
  &.friend-theme-day {
    .name {
      @apply text-black;
    }

    .support-text {
      @apply text-day-grey-primary;

      .count {
        @apply text-black;
      }
    }
  }

  &.friend-theme-night {
    .name {
      @apply text-white text-opacity-90;
    }

    .support-text {
      @apply text-white text-opacity-56;

      .count {
        @apply text-white text-opacity-90;
      }
    }
  }
}
</style>
