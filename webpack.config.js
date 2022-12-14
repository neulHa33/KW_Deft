const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
 
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    // 클라이언트 포트는 3000
    port: 3000,
    proxy: {
      '/user_inform': {
      	// 서버 포트는 3001
        target: 'http://localhost:3001/',
        changeOrigin: true,
      }
    }
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};