const path = require("path");

module.exports = {
  // 元になるファイル(中心)
  entry: "./src/index.js",
  // どこにbundleした後のファイルを置くか
  output: {
    // プロジェクト直下のdistというディレクトリ(なければ作る)
    path: path.resolve(__dirname, "dist"),
    // dist/bundle.js
    filename: "bundle.js",
  },
};
