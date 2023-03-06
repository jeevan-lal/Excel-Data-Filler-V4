<script setup>
import { onMounted, ref } from "vue";

// Today Date
const todayDate = ref(0);

const date = new Date();
todayDate.value = `${("0" + date.getDate()).slice(-2)}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
</script>

<template>
  {{ todayDate }}
</template>
