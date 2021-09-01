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

运行页面
```
npm run dev
打开
localhost:3000/pages/classComponent.html
```