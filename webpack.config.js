const path = require("path")

const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "nutnet-weather.bundle.js",
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/react"
                    ]
                }
            }
        }]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },

    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({}),
        new ESLintPlugin({
            context: ".",
            extensions: ["js", "jsx"],
            files: "src/"
        })
    ],
};
