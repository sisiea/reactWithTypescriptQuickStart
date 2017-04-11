var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

var buildpath = path.join(__dirname, 'dist');

console.log("+++++++++++++++++++++++++++++++++++++");
console.log("public path is: " + buildpath);
console.log("+++++++++++++++++++++++++++++++++++++");
module.exports = {
    entry: {
        bundle: [path.join(__dirname, 'src', 'frame','Index.tsx')],
        bundle2: [path.join(__dirname, 'src', 'frame','Index.jsx')]
    },
    output: {
        path: buildpath,
        publicPath: "/assets/",
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.tsx', '.ts', '.js', '.less', '.css', '.ttf']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, "src")
            },
            { test: /\.jsx?$/, loader: 'babel-loader',include: path.resolve(__dirname, "src"),query:{presets:['react','es2015']}},
            { test: /\.css$/, loader: "style-loader!css-loader?minimize", include: path.resolve(__dirname, "src") },
            { test: /\.less$/, exclude: /\.module\.less$/, loader: "style-loader!css-loader?minimize!less-loader?compress", include: path.resolve(__dirname, "src") }
        ]
    },
    devtool:"source-map",
    watch: true,
    plugins: [
    ]

}