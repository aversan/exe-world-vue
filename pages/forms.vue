<template>
  <Fragment>
    <div class="bg-day-grey-light py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16">Forms Day</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <Radio v-model="person" name="person" label="x" text="Personal" theme="day" />
            <Radio v-model="person" name="person" label="x" text="Personal" theme="day" disabled />
            <Radio v-model="person" name="person" label="y" text="Personal" theme="day" />
            <Radio v-model="person" name="person" label="y" text="Personal" theme="day" disabled />
          </div>
          <div class="flex space-x-4">
            <Checkbox v-model="person2" name="person2" label="x" text="Personal" theme="day" />
            <Checkbox v-model="person2" name="person2" label="x" text="Personal" theme="day" disabled />
            <Checkbox v-model="person2" name="person2" label="y" text="Personal" theme="day" />
            <Checkbox v-model="person2" name="person2" label="y" text="Personal" theme="day" disabled />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16 text-white">Forms Night</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <Radio v-model="person" name="person" label="x" text="Personal" theme="night" />
            <Radio v-model="person" name="person" label="x" text="Personal" theme="night" disabled />
            <Radio v-model="person" name="person" label="y" text="Personal" theme="night" />
            <Radio v-model="person" name="person" label="y" text="Personal" theme="night" disabled />
          </div>
          <div class="flex space-x-4">
            <Checkbox v-model="person2" name="person2" label="x" text="Personal" theme="night" />
            <Checkbox v-model="person2" name="person2" label="x" text="Personal" theme="night" disabled />
            <Checkbox v-model="person2" name="person2" label="y" text="Personal" theme="night" />
            <Checkbox v-model="person2" name="person2" label="y" text="Personal" theme="night" disabled />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Radio from '@/components/radio/radio'
import Checkbox from '@/components/checkbox/checkbox'
// import Switch from '@/components/switch/switch'

export default {
  components: {
    Fragment,
    Radio,
    Checkbox,
    // Switch,
  },
  data() {
    return {
      person: 'y',
      person2: 'y',
    }
  },
}
</script>
