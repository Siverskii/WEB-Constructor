const path = require('path');
webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');  

module.exports = {
    mode: 'development',
    entry: {
        webConstructor: [path.resolve(__dirname,'app/index.js')],
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
    output: {
       path: path.resolve(__dirname,'app/public/'),
       publicPath: '/',
       filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],     
                    }
                }],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },{
              test: /\.(png|jpg|jp(e*)g|gif|ttf|otf|mp3|woff)$/,
                use: [
                  {
                    loader: 'url-loader',
                  }
                ]
              }
        ],
    },

    resolve: {
       modules: [
         "node_modules",
          path.resolve(__dirname, "app/")
       ],
       extensions: [".js", ".json", ".jsx", ".css",".scss",'.vue']
     },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: "source-map"
};
