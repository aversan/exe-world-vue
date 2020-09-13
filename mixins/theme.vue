<script>
export const themes = {
  DAY: 'day',
  NIGHT: 'night',
}

export default {
  props: {
    theme: {
      type: String,
      default: themes.DAY,
    },
  },
}
</script>
