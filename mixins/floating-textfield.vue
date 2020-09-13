<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      labelClass: 'max-w-full absolute top-0 px-4 py-2_5 inline-flex items-center whitespace-no-wrap overflow-hidden',
      labelPositionClassMap: {
        normal: 'label text-body-1 h-14',
        top: 'label-top caption-2 h-auto',
      },
      labelThemeClassMap: {
        day: 'label-theme-day text-day-grey-primary',
        night: 'label-theme-night text-white text-opacity-56',
      },
      focus: false,
    }
  },
  computed: {
    isFilled() {
      return this.value !== ''
    },
    isFocus() {
      return this.focus
    },
    labelPosition() {
      if (this.isFilled || this.isFocus) {
        return 'top'
      }

      return 'normal'
    },
  },
  methods: {
    onFocus() {
      this.focus = true
    },
    onBlur() {
      this.focus = false
    },
  },
}
</script>
