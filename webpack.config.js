const path = require("path");

console.log(__dirname);
// /Users/yuu/Desktop/webpack
console.log(path.resolve(__dirname, "dist"));
console.log(path.join(__dirname, "dist"));
// /Users/yuu/Desktop/webpack/dist
console.log("---------------------");

module.exports = {
  // --mode=developmentを省略できるようになる
  mode: "development",
  // 元になるファイル(中心)
  entry: "./src/index.js",
  // どこにbundleした後のファイルを置くか
  output: {
    // プロジェクト直下のdistというディレクトリ(なければ作る)
    path: path.join(__dirname, "dist"),
    // dist/bundle.js
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
