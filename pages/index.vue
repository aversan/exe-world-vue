<template>
  <Fragment>
    <header role="banner"></header>
    <main role="main">
      <HeaderDesktop theme="day" />
      <HeaderDesktop theme="night" />
      <Footer theme="day" />
      <Footer theme="night" />
      <div class="container mx-auto">
        <div>
          <div class="h1">h1 exe-world-vue</div>
          <div class="h2">h2 exe-world-vue</div>
          <div class="h3">h3 exe-world-vue</div>
          <div class="h4">h4 exe-world-vue</div>
          <div class="h5">h5 exe-world-vue</div>
          <div class="h6">h6 exe-world-vue</div>
          <div class="subtitle-1">subtitle-1 exe-world-vue</div>
          <div class="subtitle-2">subtitle-2 exe-world-vue</div>
          <div class="subtitle-2-bold">subtitle-2-bold exe-world-vue</div>
          <div class="caption-1">caption-1 exe-world-vue</div>
          <div class="caption-1-medium">caption-1-medium exe-world-vue</div>
          <div class="caption-2">caption-2 exe-world-vue</div>
          <div class="caption-2-medium">caption2-medium exe-world-vue</div>
          <div class="text-body-1">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</div>
          <div class="text-body-1-medium">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</div>
          <div class="text-body-1-bold">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</div>
          <div class="text-body-2">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</div>
          <div class="text-body-2-medium">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</div>
          <div class="text-body-2-bold">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</div>
          <div class="my-2">
            <Button variant="primary" size="big" theme="day" text="Play" />
          </div>
          <div class="my-2">
            <span role="button" class="button button-theme-day button-with-icon button-big button-primary"><svgicon class="button-icon" name="play-1" />Play</span>
            <span role="button" class="button button-theme-day button-with-icon button-big button-primary disabled"><svgicon class="button-icon" name="play-1" />Play</span>
          </div>
          <div class="my-2">
            <span role="button" class="button button-theme-day button-medium button-primary">Play</span>
            <span role="button" class="button button-theme-day button-medium button-primary disabled">Play</span>
          </div>
          <div class="my-2">
            <span role="button" class="button button-theme-day button-with-icon button-medium button-primary"><svgicon class="button-icon" name="play-1" />Play</span>
            <span role="button" class="button button-theme-day button-with-icon button-medium button-primary disabled"><svgicon class="button-icon" name="play-1" />Play</span>
          </div>

          <div class="my-2">
            <span role="button" class="button button-theme-day button-big button-secondary">Play</span>
            <span role="button" class="button button-theme-day button-big button-secondary disabled">Play</span>
          </div>
          <div class="my-2">
            <span role="button" class="button button-theme-day button-with-icon button-big button-secondary"><svgicon class="button-icon" name="play-1" />Play</span>
            <span role="button" class="button button-theme-day button-with-icon button-big button-secondary disabled"><svgicon class="button-icon" name="play-1" />Play</span>
          </div>
          <div class="my-2">
            <span role="button" class="button button-theme-day button-medium button-secondary">Play</span>
            <span role="button" class="button button-theme-day button-medium button-secondary disabled">Play</span>
          </div>
          <div class="my-2">
            <span role="button" class="button button-theme-day button-with-icon button-medium button-secondary"><svgicon class="button-icon" name="play-1" />Play</span>
            <span role="button" class="button button-theme-day button-with-icon button-medium button-secondary disabled"><svgicon class="button-icon" name="play-1" />Play</span>
          </div>
        </div>
      </div>
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
