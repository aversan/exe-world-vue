<script>
export default {
  data() {
    return {
      currentValue: this.getDefaultValue(),
    }
  },
  methods: {
    getDefaultValue() {
      if (this.$slots.default && this.$slots.default.length) {
        return this.$slots.default[0].text
      }

      return this.value
    },
  },
}
</script>
