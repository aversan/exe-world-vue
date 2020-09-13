<template>
  <label
    :class="{
      'radio inline-flex items-center': true,
      [sizeClassMap[size]]: true,
      [themeClassMap[theme]]: true,
      'is-disabled': disabled,
      'is-checked': isChecked,
    }"
  >
    <input
      :class="{
        'radio-input': true,
        'is-disabled': disabled,
        'is-checked': isChecked,
      }"
      type="radio"
      :name="name"
      :value="label"
      :checked="isChecked"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
    <Icon v-if="!isChecked" class="radio-icon" name="radio-off" />
    <Icon v-if="isChecked" class="radio-icon" name="radio-on" />
    <span v-if="text" class="ml-4 text-body-1 radio-text" v-text="text" />
  </label>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import Icon from '@/components/icon/icon'

export default {
  mixins: [theme],
  props: {
    name: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium', // medium
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      sizeClassMap: {
        medium: 'radio-medium',
      },
      themeClassMap: {
        [themes.DAY]: 'radio-theme-day',
        [themes.NIGHT]: 'radio-theme-night',
      },
    }
  },
  computed: {
    isChecked() {
      return this.value === this.label
    },
  },
}
</script>

<style lang="scss">
.radio {
  @apply relative pl-6 min-h-6;

  .radio-input {
    @apply absolute left-0 w-6 h-6 opacity-0;
    z-index: -1;
  }

  .radio-icon {
    @apply absolute left-0 w-6 h-6;
  }

  &.is-disabled {
    @apply pointer-events-none opacity-32;
  }

  &.radio-theme-day {
    .radio-icon {
      @apply text-day-grey-primary;
    }

    .radio-text {
      @apply text-black;
    }

    &:hover,
    &:focus {
      .radio-icon {
        @apply text-day-violet-primary;
      }
    }
    &.is-checked {
      .radio-icon {
        @apply text-day-violet-primary;
      }

      &:hover,
      &:focus {
        .radio-icon {
          @apply text-day-violet-hover;
        }
      }
    }
  }

  &.radio-theme-night {
    .radio-icon {
      @apply text-white text-opacity-56;
    }

    .radio-text {
      @apply text-white text-opacity-90;
    }

    &:hover,
    &:focus {
      .radio-icon {
        @apply text-night-violet-primary;
      }
    }

    &.is-checked {
      .radio-icon {
        @apply text-night-violet-primary;
      }

      &:hover,
      &:focus {
        .radio-icon {
          @apply text-night-violet-hover;
        }
      }
    }
  }
}
</style>
