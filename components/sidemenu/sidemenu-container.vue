<template>
  <header
    :class="{
      'sidemenu-container w-24 flex flex-col flex-shrink-0 overflow-auto sticky': true,
      [themeClassMap[theme]]: true,
    }"
    role="banner"
  >
    <nav class="sidemenu-list flex flex-col space-y-2 pt-5">
      <SidemenuLink
        v-for="item in items"
        :key="item.icon"
        :text="item.text"
        :icon="item.icon"
        :selected="item.selected"
        :badge="item.badge"
        :theme="theme"
      />
    </nav>
    <div
      class="sidemenu-games flex flex-col items-center space-y-2 pb-12 mt-12"
    >
      <SidemenuGame v-for="game in games" :key="game.id" />
    </div>
  </header>
</template>

<script>
import theme from '@/mixins/theme'
import SidemenuLink from './sidemenu-link'
import SidemenuGame from './sidemenu-game'

export default {
  mixins: [theme],
  components: {
    SidemenuLink,
    SidemenuGame,
  },
  data() {
    return {
      themeClassMap: {
        day: 'sidemenu-theme-day',
        night: 'sidemenu-theme-night',
      },
      items: [
        { icon: 'games', text: 'All Games', selected: true },
        { icon: 'library', text: 'My Games' },
        { icon: 'message', text: 'Messages', badge: '2' },
        { icon: 'friends', text: 'Friends' },
        { icon: 'news', text: 'News' },
      ],
      games: [
        { id: 'game-01' },
        { id: 'game-02' },
        { id: 'game-03' },
        { id: 'game-04' },
        { id: 'game-05' },
        { id: 'game-06' },
      ],
    }
  },
}
</script>

<style lang="scss">
.sidemenu-container {
  &.sidemenu-theme-day {
    .sidemenu-link {
      .sidemenu-icon,
      .sidemenu-text {
        @apply text-day-grey-primary;
      }

      &:hover,
      &:focus {
        @apply bg-day-violet-primary bg-opacity-15;

        .sidemenu-icon {
          @apply text-day-violet-primary;
        }

        .sidemenu-text {
          @apply text-black;
        }
      }

      &:active {
        @apply bg-day-violet-primary bg-opacity-20;

        .sidemenu-icon {
          @apply text-day-violet-primary;
        }

        .sidemenu-text {
          @apply text-black;
        }
      }

      &.is-selected {
        @apply bg-transparent;

        .sidemenu-icon {
          @apply text-day-violet-primary;
        }

        .sidemenu-text {
          @apply text-black;
        }
      }
    }
  }

  &.sidemenu-theme-night {
    .sidemenu-link {
      .sidemenu-icon,
      .sidemenu-text {
        @apply text-white text-opacity-56;
      }

      &:hover,
      &:focus {
        @apply bg-day-violet-primary bg-opacity-15;

        .sidemenu-icon {
          @apply text-night-violet-primary;
        }

        .sidemenu-text {
          @apply text-opacity-90;
        }
      }

      &:active {
        @apply bg-day-violet-primary bg-opacity-20;

        .sidemenu-icon {
          @apply text-night-violet-primary;
        }

        .sidemenu-text {
          @apply text-opacity-90;
        }
      }

      &.is-selected {
        @apply bg-transparent;

        .sidemenu-icon {
          @apply text-night-violet-primary;
        }

        .sidemenu-text {
          @apply text-opacity-90;
        }
      }
    }
  }
}
</style>
