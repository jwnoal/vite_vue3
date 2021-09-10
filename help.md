#### 使用scss
npm i --save-d sass
<style lang="scss"> 即可

#### 使用@路径
```
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("./src")
    }
  }
});
```

#### 环境区分

1. 新增 .env.dev .env.test .env.prod 三个文件
```
VITE_PROJECT_ENV = 'prod'
```
(必须VITE开头)
在ts中可使用 import.meta.env.VITE_PROJECT_ENV 区分

2. package.json
```
"build": "vue-tsc --noEmit && VITE_PROJECT_ENV=prod vite build"
```
在vite.config.ts中使用 process.env.VITE_PROJECT_ENV === "prod"

#### 多页面打包
```
build: {
    outDir: isProd ? "dist" : "pre",
    rollupOptions: {
      input: {}
    }
  }
```
可手动添加目录新增html模板，也可根据views中的目录名自动生产模板
代码详情查看vite.config.ts

#### gzip
```
import viteCompression from 'vite-plugin-compression';
plugins: [vue(), viteCompression()],
```

#### 图片压缩
```
import viteImagemin from "vite-plugin-imagemin";
plugins: [vue(), viteImagemin()],
```

#### vue3 的两种写法
详情请查看views/classComponent、views/defineComponent

注意：项目创建新页面只需要在view中创建新目录，目录中必须包含main.ts
运行：npm run dev 或者 yarn dev
打开：localhost:3000/pages/classComponent.html

改良：
1. tsconfig.json新增：
```
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}
```
使页面引入ts不报错 import api from "@/api";

2. 打包新增判断，pages已经有对应html的时候不进行创建文件
