//using a core Node.js module that we've used previously, called path. Webpack uses Node.js to build our application, so we can use npm modules and the require module.
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './assets/js/script.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),  
    ],
    mode: 'development'
};