const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: "$",
        libraryTarget: "umd",
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          }
        ],
      },
      devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
      },
}