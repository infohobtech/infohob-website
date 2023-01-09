<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["itemClick"]);
</script>

<template>
  <nav class="mobile-navbar" @click="emit(`itemClick`)">
    <a href="#about-us" class="link"> About </a>
    <a href="#services" class="link"> Tech Recruitment </a>
    <a href="#services" class="link"> Software Development </a>
  </nav>
</template>

<style scoped>
.mobile-navbar {
  background-color: #fff;
}
.mobile-navbar a {
  display: block;
}
.link {
  font-weight: 500;
  font-size: 20px;
  font-style: normal;
  line-height: 24px;
  color: #1d1d1d;
  text-decoration: none;
  padding: 22px;
}
</style>
