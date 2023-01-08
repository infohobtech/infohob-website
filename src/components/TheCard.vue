<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "Default title"
  },
  description: {
    type: String,
    default: "Default description"
  }
});
</script>

<template>
  <div class="card">
    <img :src="icon" alt="" />
    <div class="card__title mt-3">{{ title }}</div>
    <div class="card__description mt-2">{{ description }}</div>
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
  box-shadow: 0px 0px 20px 5px #edf3fc;
  border-radius: 10px;
  padding: 60px 10px;
  max-width: 377px;
  text-align: center;
  padding-bottom: 91px;
  margin: 11px 22px;
}

.card__title {
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
}

.card__description {
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
  color: #000000;
}
</style>
