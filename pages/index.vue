<template>
  <Fragment>
    <header role="banner"></header>
    <main role="main">
      <HeaderDesktop theme="day" />
      <HeaderDesktop theme="night" />
      <Footer theme="day" />
      <Footer theme="night" />
    </main>
  </Fragment>
</template>

<script>
import HeaderDesktop from '@/components/shared/header-desktop'
import Footer from '@/components/shared/footer'
import Button from '@/components/shared/button'
import '@/components/icons/play-1'
import { Fragment } from 'vue-fragment'

export default {
  loading: false,
  components: {
    HeaderDesktop,
    Fragment,
    Footer,
    Button,
  },
}
</script>
