<!-- @format -->
<template>
  <div>
    1233
    <div>{{ balance }} {{ balance1 }}</div>
    <img src="@/assets/bg.png" alt="" />
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
import api from "@/api";
class Props {
  public list = prop<number>({ default: 0 });
}
@Options({
  components: {},
  watch: {
    balance: function (val) {
      console.log("watch");
    }
  }
})
export default class Cla extends Vue.with(Props) {
  balance: string = "0.00";

  created() {
    console.log(api.name);
    console.log("created");
    setTimeout(() => {
      this.balance = "123";
    }, 1000);
    this.$nextTick(() => {
      console.log("nextTick");
    });
  }

  get balance1() {
    return this.balance + "2342";
  }

  mounted() {
    console.log("mounted");
  }
}
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
