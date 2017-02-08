const path = require('path')

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, '.'),
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '/static/js'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: "style-loader!css-loader",
        test: /\.css$/
      }
    ]
  }
}
