<template>
  <FloatingInput :type="type" icon-name="eye" :label="label" :theme="theme" :disabled="disabled" :active="active" :error="error" v-on="$listeners" :value="value" :activeButton="show" v-on:icon-click="iconClick" />
</template>

<script>
import theme from '@/mixins/theme'
import textfieldProps from '@/mixins/textfield'
import FloatingInput from './floating-input'

export default {
  mixins: [theme, textfieldProps],
  props: {
    label: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FloatingInput,
  },
  computed: {
    type() {
      return this.show ? 'text' : 'password'
    },
  },
  methods: {
    iconClick(show) {
      this.show = show
    },
  },
}
</script>
