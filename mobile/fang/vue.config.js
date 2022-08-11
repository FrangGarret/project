

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  indexPath: "index.html",
  filenameHashing: true,
  publicPath: "./", //默认“./”,最好书写一下，程千你要记住！！！
  assetsDir: "static", //放置静态资源的目录(js、css、img、font)
  outputDir: "../../pages/fang", //将构建好的文件输出到哪个文件夹
  lintOnSave: false, //这个是设置是否在保存时使用eslint检查，有效值：true|false|error，我很讨厌，所以不要，但是因为爱你，还是给你写上，阿千你要懂我！！！
  runtimeCompiler: false, //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  transpileDependencies: [], //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  productionSourceMap: false, //生产最好关了，要不然会让别人看见比较low的代码，有安全风险
  css: {
    extract: true, //Default: 生产环境下是 true，开发环境下是 false,是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。,
    sourceMap: true,
    requireModuleExtension: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            // exclude: /(page_pc)/i,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            //exclude: /node_modules/i,
            // selectorBlackList: ['van-'], //要忽略并保留为px的选择器,我们一般不转换vantui中的大小
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: true, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 1 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(jpg|png|gif|jpeg|mp3|webp)$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        // 使文件大小小于此limit值(单位为byte)的文件转换为base64格式
        // 大于此limit的, 会执行options中的fallback配置项插件, fallback默认值为file-loader,
        // 而url-loader的options配置项也会被传递给file-loader
        limit: 10000,
        // 根据环境使用cdn或相对路径
        publicPath: "",
        //publicPath: process.env.NODE_ENV === 'production' ? 'http://parun.pingan.com/vitality/vitality/biz/shequ/' : '',
        // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
        outputPath: "img",
        // 配置打包后图片文件名
        name: "[name].[hash:6].[ext]",
      })
      .end();

    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));

    //将main.js中的ES6语法转换成ES5
    config.entry.app = ["babel-polyfill", "./src/main.js"];

    config.optimization.minimizer("terser").tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = false;
      return args;
    });
  },
};