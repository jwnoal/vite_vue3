<!-- @format -->

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ a: string; b: string }>();
// defineEmits(["a"]);
</script>

<template>
  <div>HelloWorld</div>
  <div>{{ a }}</div>
  <div>{{ b }}</div>
</template>
