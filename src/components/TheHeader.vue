<script lang="ts" setup>
import { ref } from "vue";
import TheButton from "./form/TheButton.vue";
import TheNavbar from "./TheNavbar.vue";
import MobileNavbar from "./MobileNavbar.vue";

const navbarOpened = ref(false);
</script>

<template>
  <header class="header px-3 px-md-0">
    <div class="container d-flex jc-between ai-center py-2">
      <div class="header__left">
        <a href="/">
          <img src="/img/logos/logo.svg" alt="" />
        </a>
      </div>
      <div class="header__middle">
        <div class="d-none d-md-block">
          <TheNavbar></TheNavbar>
        </div>
      </div>
      <div class="header__right">
        <div class="d-none d-md-block">
          <TheButton :size="22">Contact Us</TheButton>
        </div>
        <div class="menu-icon d-inline-block d-md-none">
          <img
            src="/img/icons/menu.png"
            alt=""
            @click="navbarOpened = !navbarOpened"
          />
        </div>
      </div>
    </div>
    <div class="container d-block d-md-none" v-if="navbarOpened">
      <MobileNavbar @itemClick="navbarOpened = false"></MobileNavbar>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  background-image: url(/img/backgrounds/lightbg.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
  z-index: 99999;
}
.container {
  border-bottom: 1px solid #d4d4d4;
}

.menu-icon {
  cursor: pointer;
}

.menu-icon img {
  height: 30px;
}
</style>
