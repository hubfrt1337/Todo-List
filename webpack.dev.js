const { merge } = require("webpack-merge");
const common = require("./webpack.common.js")

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: './dist',
        watchFiles: './src/template.html',
    },
    devtool: "inline-source-map",
})