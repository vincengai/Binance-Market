const path = require("path");

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', "./frontend/binance.jsx"],
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
             limit: 8192
            },
          },
        ]
      },
    ],
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
