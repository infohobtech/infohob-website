// import { PropType } from "vue";
import type { PropType } from "vue";

type allowedInputTypes =
  | "text"
  | "number"
  | "email"
  | "password"
  | "search"
  | "url"
  | "tel"
  | "date"
  | "time"
  | "range"
  | "color"
  | string;
export const inputTypeProp = {
  type: String as PropType<allowedInputTypes>,
  default: "text",
  validator(value: string) {
    return [
      "",
      "text",
      "number",
      "email",
      "password",
      "search",
      "url",
      "tel",
      "date",
      "time",
      "range",
      "color"
    ].includes(value);
  }
};

export const sizeProp = {
  type: Number as PropType<number>,
  default: 22
};

export const stringProp = {
  type: String,
  default: ""
};

export const stringOrNumberProp = {
  type: [String, Number],
  default: ""
};

export const booleanProp = {
  type: Boolean,
  default: false
};

type allowedStates = "info" | "success" | "warning" | "danger" | "";
export const stateProp = {
  type: String as PropType<allowedStates>,
  default: "",
  validator(value: string) {
    return ["", "info", "success", "warning", "danger"].includes(value);
  }
};

export const widthProp = {
  type: String,
  default: "100%"
};

type allowedColors =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "info"
  | "success"
  | string;

export const variantProp = {
  type: String as PropType<allowedColors>,
  default: "primary",
  validator(value: string) {
    return [
      "",
      "primary",
      "secondary",
      "warning",
      "danger",
      "success",
      "info"
    ].includes(value);
  }
};
