<!-- @format -->
<template>
  <div>1233</div>
  <div>{{ a }}</div>
  <div>{{ ab }}</div>
  <hello-world :a="ab" :b="a"></hello-world>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed, watch } from "vue";
// 组件直接import
import HelloWorld from "@/components/HelloWorld.vue";
// defineProps<{ a: string; b: string }>();
let a = ref("小明");
const ab = computed(() => a.value + "1");
nextTick(() => {
  console.log("nextTick");
});
setTimeout(() => {
  a.value = "kkkk";
}, 1000);
watch(
  () => a.value,
  (newValue: any) => {
    console.log("watch", newValue);
  }
);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a {
  .b {
    font-size: 100px;
  }
}
</style>
