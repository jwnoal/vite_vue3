<!-- @format -->
<template>
  <div>1233</div>
  <div>{{ topinset }}</div>
  <div>{{ doubleCount }}</div>
</template>

<script lang="ts">
interface STATE {
  topinset: number;
}
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  nextTick,
  computed,
  watch
} from "vue";

export default defineComponent({
  name: "App",
  props: ["list"],
  emits: ["openAgain"],
  components: {},
  setup(prop, context) {
    // emit
    // context.emit("openAgain");
    // prop
    // prop.list
    const state = reactive<STATE>({
      topinset: 0
    });
    const doubleCount = computed(() => state.topinset + "1");
    onMounted(() => {
      console.log("onMounted");
    });
    nextTick(() => {
      console.log("nextTick");
    });
    setTimeout(() => {
      state.topinset = 3;
    }, 1000);
    watch(
      () => state.topinset,
      (newValue: any) => {
        console.log("watch");
      }
    );
    return {
      doubleCount,
      ...toRefs(state)
    };
  }
});
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
