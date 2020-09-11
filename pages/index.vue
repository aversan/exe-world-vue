<template>
  <div
    class="layout flex flex-auto flex-no-wrap mx-auto bg-day-grey-light min-h-screen min-w-0"
  >
    <SidemenuContainer theme="day" />
    <main class="overflow-auto flex flex-col flex-auto" role="main">
      <HeaderDesktop theme="day" />
      <div class="flex-auto layout-content bg-white p-8">
        <div class="space-y-4">
          <p><a target="_blank" href="/buttons">Buttons</a></p>
          <p><a target="_blank" href="/icons">Icons</a></p>
          <p><a target="_blank" href="/typography">Typography</a></p>
          <p><a target="_blank" href="/navigations">Navigations</a></p>
          <p><a target="_blank" href="/forms">Forms</a></p>
        </div>
      </div>
      <Footer theme="day" />
    </main>
  </div>
</template>

<script>
import HeaderDesktop from '@/components/header/header-desktop'
import Footer from '@/components/footer/footer'
import SidemenuContainer from '@/components/sidemenu/sidemenu-container'
import { TabContainer, TabLink } from '@/components/tab/index'
import Badge from '@/components/badge/badge'

export default {
  loading: false,
  components: {
    SidemenuContainer,
    TabContainer,
    TabLink,
    HeaderDesktop,
    Footer,
    Badge,
  },
}
</script>
