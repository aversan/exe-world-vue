<template>
  <Fragment>
    <div class="bg-day-grey-light py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16">Form Fields Day</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <FormField label="Name" hint="Support Text" theme="day" type="text" />
            <FormField label="Name" hint="Support Text" theme="day" type="text" value="Text" />
            <FormField label="Name" hint="Support Text" theme="day" type="text" value="Text" error="Error text" />
            <FormField label="Name" hint="Support Text" theme="day" type="text" disabled />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16 text-white">Form Fields Night</h1>
        <div class="space-y-8">
          <div class="flex space-x-4">
            <FormField label="Name" hint="Support Text" theme="night" type="text" />
            <FormField label="Name" hint="Support Text" theme="night" type="text" value="Text" />
            <FormField label="Name" hint="Support Text" theme="night" type="text" value="Text" error="Error text" />
            <FormField label="Name" hint="Support Text" theme="night" type="text" disabled />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import FormField from '@/components/form/form-field'

export default {
  components: {
    Fragment,
    FormField,
  },
}
</script>
