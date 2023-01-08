<script lang="ts" setup>
import TheButton from "./form/TheButton.vue";
import TheNavbar from "./TheNavbar.vue";
</script>

<template>
  <header class="header">
    <div class="container d-flex jc-between ai-center py-2">
      <div class="header__left">
        <img src="/img/logos/logo.svg" alt="" />
      </div>
      <div class="header__middle">
        <TheNavbar></TheNavbar>
      </div>
      <div class="header__right">
        <TheButton :size="22">Contact Us</TheButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  border-bottom: 1px solid #d4d4d4;
}
</style>
