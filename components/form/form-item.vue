<template>
  <div
    class="layout flex flex-auto flex-no-wrap mx-auto bg-day-grey-light min-h-screen min-w-0"
  >
    <SidemenuContainer theme="day" />
    <main class="overflow-auto flex flex-col flex-auto" role="main">
      <HeaderDesktop theme="day" />
      <div class="flex-auto layout-content">
        content
      </div>
      <Footer theme="day" />
    </main>
  </div>
</template>

<script>
import HeaderDesktop from '@/components/header/header-desktop'
import Footer from '@/components/footer/footer'
import SidemenuContainer from '@/components/sidemenu/sidemenu-container'

export default {
  loading: false,
  components: {
    SidemenuContainer,
    HeaderDesktop,
    Footer,
  },
}
</script>
