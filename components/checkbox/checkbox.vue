<template>
  <label
    :class="{
      'checkbox inline-flex items-center': true,
      [sizeClassMap[size]]: true,
      [themeClassMap[theme]]: true,
      'is-disabled': disabled,
      'is-checked': isChecked,
    }"
  >
    <input
      :class="{
        'checkbox-input': true,
        'is-disabled': disabled,
        'is-checked': isChecked,
      }"
      type="checkbox"
      :name="name"
      :value="label"
      :checked="isChecked"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
    <Icon v-if="!isChecked" class="checkbox-icon" name="checkbox-off" />
    <Icon v-if="isChecked" class="checkbox-icon" name="checkbox-on" />
    <span v-if="text" class="ml-4 text-body-1 checkbox-text" v-text="text" />
  </label>
</template>

<script>
import theme from '@/mixins/theme'
import Icon from '@/components/icon/icon'

export default {
  mixins: [theme],
  components: {
    Icon,
  },
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
  data() {
    return {
      sizeClassMap: {
        medium: 'checkbox-medium',
      },
      themeClassMap: {
        day: 'checkbox-theme-day',
        night: 'checkbox-theme-night',
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
.checkbox {
  @apply relative pl-6 min-h-6;

  .checkbox-input {
    @apply absolute left-0 w-6 h-6 opacity-0;
    z-index: -1;
  }

  .checkbox-icon {
    @apply absolute left-0 w-6 h-6;
  }

  &.is-disabled {
    @apply pointer-events-none opacity-32;
  }

  &.checkbox-theme-day {
    .checkbox-icon {
      @apply text-day-grey-primary;
    }

    .checkbox-text {
      @apply text-black;
    }

    &:hover,
    &:focus {
      .checkbox-icon {
        @apply text-day-violet-primary;
      }
    }
    &.is-checked {
      .checkbox-icon {
        @apply text-day-violet-primary;
      }

      &:hover,
      &:focus {
        .checkbox-icon {
          @apply text-day-violet-hover;
        }
      }
    }
  }

  &.checkbox-theme-night {
    .checkbox-icon {
      @apply text-white text-opacity-56;
    }

    .checkbox-text {
      @apply text-white text-opacity-90;
    }

    &:hover,
    &:focus {
      .checkbox-icon {
        @apply text-night-violet-primary;
      }
    }

    &.is-checked {
      .checkbox-icon {
        @apply text-night-violet-primary;
      }

      &:hover,
      &:focus {
        .checkbox-icon {
          @apply text-night-violet-hover;
        }
      }
    }
  }
}
</style>
