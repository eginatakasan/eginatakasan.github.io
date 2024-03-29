const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = function webpackConfig(env, { mode }) {
  return {
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'public'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          // See .babelrc for further babel config
        },
        {
          test: /\.css?$/,
          exclude: /node_modules/,
          loader: require.resolve('css-loader'),
          // See .babelrc for further babel config
        },
        {
          test: /\.png|\.jpg/,
          type: 'asset/resource'
        }
      ],
    },
    optimization: {
      minimizer: [
        // Omit creation of .txt files
        new (require('terser-webpack-plugin'))({ extractComments: false }),
      ],
    },
    devServer: {
      hot: true,
      // open: true,
      static: { directory: path.join(__dirname, 'public') },
      historyApiFallback: { index: '/' },
    },
    plugins: [
      new Dotenv({
        path: `./.env.${mode}`,
      }),
    ],
  }
}
