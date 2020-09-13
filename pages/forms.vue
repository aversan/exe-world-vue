<template>
  <Fragment>
    <div class="bg-day-grey-light py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16">Forms Day</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <Radio v-model="person" label="x" text="Personal" theme="day" />
            <Radio v-model="person" label="x1" text="Personal" theme="day" disabled />
            <Radio v-model="person" label="y" text="Personal" theme="day" />
            <Radio v-model="person" label="y1" text="Personal" theme="day" disabled />
          </div>
          <div class="flex space-x-4">
            <Checkbox v-model="person2" label="x" text="Personal" theme="day" />
            <Checkbox v-model="person2" label="x1" text="Personal" theme="day" disabled />
            <Checkbox v-model="person2" label="y" text="Personal" theme="day" />
            <Checkbox v-model="person2" label="y1" text="Personal" theme="day" disabled />
          </div>
          <div class="flex space-x-4">
            <Input placeholder="Name" theme="day" />
            <Input placeholder="Name" value="xxx" theme="day" active />
            <Input placeholder="Name" value="xxx" theme="day" error />
            <Input placeholder="Name" value="xxx" theme="day" disabled />
          </div>
          <div class="flex space-x-4">
            <FloatingInput v-model="input2" label="Name" theme="day" />
            <FloatingInput v-model="input2" label="Name" theme="day" active />
            <FloatingInput v-model="input2" label="Name" theme="day" error />
            <FloatingInput v-model="input2" label="Name" theme="day" disabled />
          </div>
          <div class="flex space-x-4">
            <FloatingInput v-model="input2" label="Name" theme="day" />
            <FloatingInput v-model="input2" label="Name" theme="day" active />
            <FloatingInput v-model="input2" label="Name" theme="day" error />
            <FloatingInput v-model="input2" label="Name" theme="day" disabled />
          </div>
          <div class="flex space-x-4">
            <Textarea placeholder="Name" theme="day" cols="5" rows="6" />
            <Textarea placeholder="Name" theme="day" active value="xxx" cols="5" rows="6" />
            <Textarea placeholder="Name" theme="day" error value="xxx" cols="5" rows="6" />
            <Textarea placeholder="Name" theme="day" disabled value="xxx" cols="5" rows="6" />
          </div>
          <div class="flex space-x-4">
            <FloatingTextarea v-model="textarea2" label="Name" theme="day" cols="5" rows="6" />
            <FloatingTextarea v-model="textarea2" label="Name" theme="day" active value="xxx" cols="5" rows="6" />
            <FloatingTextarea v-model="textarea2" label="Name" theme="day" error value="xxx" cols="5" rows="6" />
            <FloatingTextarea v-model="textarea2"  label="Name" theme="day" disabled value="xxx" cols="5" rows="6" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16 text-white">Forms Night</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <Radio v-model="person" label="x" text="Personal" theme="night" />
            <Radio v-model="person" label="x1" text="Personal" theme="night" disabled />
            <Radio v-model="person" label="y" text="Personal" theme="night" />
            <Radio v-model="person" label="y1" text="Personal" theme="night" disabled />
          </div>
          <div class="flex space-x-4">
            <Checkbox v-model="person2" label="x" text="Personal" theme="night" />
            <Checkbox v-model="person2" label="x1" text="Personal" theme="night" disabled />
            <Checkbox v-model="person2" label="y" text="Personal" theme="night" />
            <Checkbox v-model="person2" label="y1" text="Personal" theme="night" disabled />
          </div>
          <div class="flex space-x-4">
            <Input placeholder="Name" value="xxx" theme="night" />
            <Input placeholder="Name" value="xxx" theme="night" active />
            <Input placeholder="Name" value="xxx" theme="night" error />
            <Input placeholder="Name" value="xxx" theme="night" disabled />
          </div>
          <div class="flex space-x-4">
            <FloatingInput v-model="input2" label="Name" theme="night" />
            <FloatingInput v-model="input2" label="Name" theme="night" active />
            <FloatingInput v-model="input2" label="Name" theme="night" error />
            <FloatingInput v-model="input2" label="Name" theme="night" disabled />
          </div>
          <div class="flex space-x-4">
            <Textarea placeholder="Name" theme="night" cols="5" rows="6" />
            <Textarea placeholder="Name" theme="night" active value="xxx" cols="5" rows="6" />
            <Textarea placeholder="Name" theme="night" error value="xxx" cols="5" rows="6" />
            <Textarea placeholder="Name" theme="night" disabled value="xxx" cols="5" rows="6" />
          </div>
          <div class="flex space-x-4">
            <FloatingTextarea v-model="textarea2" label="Name" theme="night" cols="5" rows="6" />
            <FloatingTextarea v-model="textarea2" label="Name" theme="night" active value="xxx" cols="5" rows="6" />
            <FloatingTextarea v-model="textarea2" label="Name" theme="night" error value="xxx" cols="5" rows="6" />
            <FloatingTextarea v-model="textarea2" label="Name" theme="night" disabled value="xxx" cols="5" rows="6" />
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
import { Input, FloatingInput } from '@/components/input/index'
import { Textarea, FloatingTextarea } from '@/components/textarea/index'

export default {
  components: {
    Fragment,
    Radio,
    Checkbox,
    Input,
    FloatingInput,
    Textarea,
    FloatingTextarea,
  },
  data() {
    return {
      person: 'y',
      person2: 'y',
      input2: 'xxx',
      textarea2: 'xxx',
    }
  },
}
</script>
