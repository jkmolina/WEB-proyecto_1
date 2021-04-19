const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  entry: './src/index.jsx',
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <html>
        <head>
          <title>Collaborate & Create Amazing Graphic Design for Free</title>
          <link rel="shortcut icon" href="https://static.canva.com/static/images/favicon.ico">
          <meta charset="utf-8">
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `,
  })],
}
