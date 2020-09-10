<template>
  <Fragment>
    <div class="bg-day-grey-light py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16">Navigation Day</h1>
        <div class="space-y-8">
          <TabContainer theme="day" size="big">
            <TabLink size="big"> All </TabLink>
            <TabLink size="big" selected> All </TabLink>
            <TabLink size="big">
              All
              <Badge class="ml-2_5" theme="day" text="2" />
            </TabLink>
            <TabLink size="big" selected>
              All
              <Badge class="ml-2_5" theme="day" text="2" />
            </TabLink>
          </TabContainer>
          <TabContainer theme="day" size="medium">
            <TabLink size="medium"> All </TabLink>
            <TabLink size="medium" selected> All </TabLink>
            <TabLink size="medium">
              All
              <Badge class="ml-2_5" theme="day" text="2" />
            </TabLink>
            <TabLink size="medium" selected>
              All
              <Badge class="ml-2_5" theme="day" text="2" />
            </TabLink>
          </TabContainer>
          <HeaderDesktop theme="day" />
          <SidemenuContainer theme="day" />
          <Footer theme="day" />
        </div>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16 text-white">Navigation Night</h1>
        <div class="space-y-8">
          <TabContainer theme="night" size="big">
            <TabLink size="big"> All </TabLink>
            <TabLink size="big" selected> All </TabLink>
            <TabLink size="big">
              All
              <Badge class="ml-2_5" theme="night" text="2" />
            </TabLink>
            <TabLink size="big" selected>
              All
              <Badge class="ml-2_5" theme="night" text="2" />
            </TabLink>
          </TabContainer>
          <TabContainer theme="night" size="medium">
            <TabLink size="medium"> All </TabLink>
            <TabLink size="medium" selected> All </TabLink>
            <TabLink size="medium">
              All
              <Badge class="ml-2_5" theme="night" text="2" />
            </TabLink>
            <TabLink size="medium" selected>
              All
              <Badge class="ml-2_5" theme="night" text="2" />
            </TabLink>
          </TabContainer>
          <HeaderDesktop theme="night" />
          <SidemenuContainer theme="night" />
          <Footer theme="night" />
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import SidemenuContainer from '@/components/sidemenu/sidemenu-container'
import HeaderDesktop from '@/components/header/header-desktop'
import Footer from '@/components/footer/footer'
import { TabContainer, TabLink } from '@/components/tab/index'
import Badge from '@/components/badge/badge'

export default {
  components: {
    Fragment,
    SidemenuContainer,
    HeaderDesktop,
    Footer,
    TabLink,
    TabContainer,
    Badge,
  },
}
</script>
