<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import {
  inputTypeProp,
  sizeProp,
  stringProp,
  variantProp,
  booleanProp,
  stringOrNumberProp
} from "../props";
const inputParent = ref<HTMLElement>();
const inputField = ref<HTMLElement>();
const props = defineProps({
  type: inputTypeProp,
  floatingLabel: stringProp,
  modelValue: stringOrNumberProp,
  size: sizeProp,
  variant: variantProp,
  clearable: booleanProp,
  placeholder: stringProp,
  isDisabled: booleanProp
});

const emit = defineEmits(["update:modelValue"]);

const isFocused = ref(false);
const isFloating = computed(() => props.modelValue || isFocused.value);
const floatingStyle = computed(() => {
  if (!inputField.value || !inputParent.value) {
    return {};
  }
  if (!isFloating.value) {
    return {
      top: inputField.value?.offsetTop! + "px",
      left: inputField.value?.offsetLeft! + "px",
      height: inputField.value?.clientHeight! + "px"
    };
  } else {
    return {
      top: `var(--floating-pos-top, calc(-1.5 * var(--font-size, 16px)))`,
      left: `var(--floating-pos-left, calc(0.15 * var(--font-size, 16px)))`,
      height: inputField.value?.clientHeight! + "px"
    };
  }
});
const classes = computed(() => {
  return {
    "a-input": true,
    [`a-${props.variant}`]: true
  };
});

function clearValue() {
  emit("update:modelValue", "");
  console.log("clearing..");
}

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});
</script>
<template>
  <div
    :class="classes"
    ref="inputParent"
    :style="{ '--a-font-size': `${size}px` }"
  >
    <span class="a-fl-label" v-if="floatingLabel" :style="floatingStyle">
      {{ floatingLabel }}
    </span>
    <slot name="prepend"></slot>
    <input
      @focus="isFocused = true"
      @blur="isFocused = false"
      ref="inputField"
      :type="type"
      class="a-input-field"
      :placeholder="placeholder"
      v-model="localValue"
      :disabled="isDisabled"
    />
    <slot name="append"></slot>

    <div
      class="a-icon-close a-action-btn"
      v-if="clearable && modelValue"
      @click="clearValue"
    ></div>
  </div>
</template>
