var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

var buildpath = path.join(__dirname, 'dist');

console.log("+++++++++++++++++++++++++++++++++++++");
console.log("public path is: " + buildpath);
console.log("+++++++++++++++++++++++++++++++++++++");
module.exports = {
    entry: {
        main: [path.join(__dirname, 'src', 'frame','Index.tsx')]
    },
    output: {
        path: buildpath,
        publicPath: "/assets/",
        filename: 'bundle.js'
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
            { test: /\.css$/, loader: "style-loader!css-loader?minimize", include: path.resolve(__dirname, "src") },
            { test: /\.less$/, exclude: /\.module\.less$/, loader: "style-loader!css-loader?minimize!less-loader?compress", include: path.resolve(__dirname, "src") }
        ]
    },
    watch: true,
    plugins: [
    ]

}