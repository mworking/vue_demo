var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './counter/app.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    }
}