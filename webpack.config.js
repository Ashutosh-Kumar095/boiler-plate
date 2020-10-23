const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js', //defines the entry point
   output: {
      path: path.resolve( __dirname, 'dist' ), //where and by what name the build will be formed
      filename: 'main.js', 
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true //redirectls all server paths to index.html
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader', //what will transpile the js files
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'], //what will transpile the css and styles
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,  //what will transpile the images
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ), //entry point to index.
         filename: 'index.html'
      })
   ]
};

//it is essential that we set history api fallback to true and public path to '/' as this redirects all 
//requests made to index.html and allows react router to take it from there . 