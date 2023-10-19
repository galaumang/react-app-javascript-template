const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  devServer: {
    static: { // Serve content from the build directory
      directory: path.resolve(__dirname, 'build'),
    },
    // contentBase: './build', // Serve content from the build directory
    port: 3000, // Port to run the development server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling JavaScript/JSX files
          options: {
            "presets": ["@babel/preset-react", "@babel/preset-env"]
          }          
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for handling CSS files
      }
    ],
  },
  plugins: [new HTMLWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html')
  })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
