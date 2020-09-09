<template>
  <Fragment>
    <div class="bg-white py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16">Buttons day</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <Button variant="primary" size="big" theme="day" text="Play" />
            <Button variant="primary" size="big" theme="day" text="Play" active />
            <Button variant="primary" size="big" theme="day" text="Play" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="primary" size="big" theme="day" text="Play" icon-name="play-1" />
            <Button variant="primary" size="big" theme="day" text="Play" icon-name="play-1" active />
            <Button variant="primary" size="big" theme="day" text="Play" icon-name="play-1" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="secondary" size="big" theme="day" text="Play" />
            <Button variant="secondary" size="big" theme="day" text="Play" active />
            <Button variant="secondary" size="big" theme="day" text="Play" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="primary" size="medium" theme="day" text="Play" />
            <Button variant="primary" size="medium" theme="day" text="Play" active />
            <Button variant="primary" size="medium" theme="day" text="Play" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="primary" size="medium" theme="day" text="Play" icon-name="play-1" />
            <Button variant="primary" size="medium" theme="day" text="Play" icon-name="play-1" active />
            <Button variant="primary" size="medium" theme="day" text="Play" icon-name="play-1" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="secondary" size="medium" theme="day" text="Play" tag="span" />
            <Button variant="secondary" size="medium" theme="day" text="Play" tag="span" active />
            <Button variant="secondary" size="medium" theme="day" text="Play" tag="span" disabled />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16 text-white">Buttons night</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <Button variant="primary" size="big" theme="night" text="Play" />
            <Button variant="primary" size="big" theme="night" text="Play" active />
            <Button variant="primary" size="big" theme="night" text="Play" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="primary" size="big" theme="night" text="Play" icon-name="play-1" />
            <Button variant="primary" size="big" theme="night" text="Play" icon-name="play-1" active />
            <Button variant="primary" size="big" theme="night" text="Play" icon-name="play-1" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="secondary" size="big" theme="night" text="Play" />
            <Button variant="secondary" size="big" theme="night" text="Play" active />
            <Button variant="secondary" size="big" theme="night" text="Play" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="primary" size="medium" theme="night" text="Play" />
            <Button variant="primary" size="medium" theme="night" text="Play" active />
            <Button variant="primary" size="medium" theme="night" text="Play" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="primary" size="medium" theme="night" text="Play" icon-name="play-1" />
            <Button variant="primary" size="medium" theme="night" text="Play" icon-name="play-1" active />
            <Button variant="primary" size="medium" theme="night" text="Play" icon-name="play-1" disabled />
          </div>
          <div class="flex space-x-4">
            <Button variant="secondary" size="medium" theme="night" text="Play" />
            <Button variant="secondary" size="medium" theme="night" text="Play" active />
            <Button variant="secondary" size="medium" theme="night" text="Play" disabled />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import Button from '@/components/shared/button'
import { Fragment } from 'vue-fragment'

export default {
  loading: false,
  components: {
    Fragment,
    Button,
  },
}
</script>
