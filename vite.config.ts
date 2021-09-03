/** @format */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import glob from "glob";
import fs from "fs";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
const isProd = process.env.VITE_PROJECT_ENV === "prod";
const pageEntry = {};

(function () {
  // 遍历文件夹中含有main.ts的文件夹路径
  const allEntry = glob.sync("./src/views/**/main.ts");
  // 获取模板
  const temp = fs.readFileSync("./index.html");
  // 创建pages文件夹存放多页面模板
  if (!fs.existsSync("./pages")) {
    fs.mkdirSync("./pages");
  }
  // 创建多页面模板
  allEntry.forEach((entry: string) => {
    const pathArr = entry.split("/");
    const name = pathArr[pathArr.length - 2];
    // 判断文件是否存在
    try {
      fs.accessSync(`./pages/${name}.html`);
    } catch (err) {
      console.log(`创建${name}.html文件`);
      const index = temp.toString().indexOf("</body>");
      const content =
        temp.toString().slice(0, index) +
        `<script type="module" src=".${entry}"></script>` +
        temp.toString().slice(index);
      fs.writeFile(`./pages/${name}.html`, content, err => {
        if (err) console.log(err);
      });
    }
    // input中的配置
    pageEntry[name] = path.resolve(__dirname, `/pages/${name}.html`);
  });
})();

export default defineConfig({
  server: {
    fs: {
      strict: false
    }
  },
  plugins: [
    vue(),
    viteCompression({
      ext: ".gz",
      algorithm: "gzip",
      deleteOriginFile: false
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src")
    }
  },
  build: {
    outDir: isProd ? "dist" : "pre",
    rollupOptions: {
      input: pageEntry
    }
  }
});
