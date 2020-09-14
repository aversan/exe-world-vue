<template>
  <label
    :class="{
      'relative floating-input-container w-full cursor-text block': true,
      [themeClassMap[theme]]: true,
      'is-disabled': disabled,
      'has-icon': hasIcon,
      'is-filled': isFilled,
      'is-focus': isFocus,
      'is-active': active,
      'is-error': error,
    }"
  >
    <span
      :class="{
        [labelClass]: true,
        [labelPositionClassMap[labelPosition]]: true,
        [labelThemeClassMap[theme]]: true,
      }"
      v-text="label"
    />
    <Input
      class="floating-input"
      variant="floating"
      :theme="theme"
      :type="type"
      placeholder=""
      :disabled="disabled"
      :active="active"
      :error="error"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners"
      @focus="onFocus"
      @blur="onBlur"
    />
    <span
      :class="{
        'absolute top-0 right-0 w-14 h-14 flex items-center justify-center floating-input-icon': true,
        'is-active': activeButton,
      }"
      v-if="hasIcon"
      role="button"
      @click="iconToggle"
    >
      <Icon :name="iconName" />
    </span>
  </label>
</template>

<script>
import theme, { themes } from '@/mixins/theme'
import floatingTextfield from '@/mixins/floating-textfield'
import textfieldProps from '@/mixins/textfield'
import Icon from '@/components/icon/icon'
import Input from './input'

export default {
  components: {
    Input,
    Icon,
  },
  mixins: [theme, floatingTextfield, textfieldProps],
  props: {
    type: {
      type: String,
      default: 'text',
    },
    iconName: {
      type: String,
      default: '',
    },
    activeButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      themeClassMap: {
        [themes.DAY]: 'floating-input-theme-day',
        [themes.NIGHT]: 'floating-input-theme-night',
      },
    }
  },
  computed: {
    hasIcon() {
      return !!this.iconName
    },
  },
  methods: {
    iconToggle(event) {
      this.activeButton = !this.activeButton
      this.$emit('icon-click', this.activeButton)
    }
  }
}
</script>

<style lang="scss">
.floating-input-container {
  &.has-icon {
    .floating-input {
      @apply pr-14;
    }

    &.is-disabled .floating-input-icon,
    &:disabled .floating-input-icon {
      @apply pointer-events-none opacity-32;
    }
  }

  &.floating-input-theme-day {
    .floating-input-icon {
      @apply text-day-grey-primary;

      &:hover,
      &:focus {
        @apply text-day-violet-primary;
      }

      &.is-active {
        @apply text-day-violet-primary;

        &:hover,
        &:focus {
          @apply text-day-violet-hover;
        }
      }
    }

    &.is-error {
      .floating-input-icon {
        @apply text-day-orange-primary;
      }
    }
  }

  &.floating-input-theme-night {
    .floating-input-icon {
      @apply text-white text-opacity-56;

      &:hover,
      &:focus {
        @apply text-night-violet-primary;
      }

      &.is-active {
        @apply text-night-violet-primary;

        &:hover,
        &:focus {
          @apply text-night-violet-hover;
        }
      }
    }

    &.is-error {
      .floating-input-icon {
        @apply text-night-orange-primary;
      }
    }
  }
}
</style>
