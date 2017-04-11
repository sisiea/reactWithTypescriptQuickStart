var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
var compiler = webpack(config);

var server = new WebpackDevServer(compiler,{
// webpack-dev-server options
  progress: true,

  hot: true, 

  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,

  // Set this if you want to enable gzip compression for assets
  compress: true,
  publicPath: config.output.publicPath,
  noInfo: false,
  stats: { colors: true },
  proxy: {
    "/api": "http://localhost:9090"
  },

})

server.listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:8080. Please wait, I'm building things for you...");
});