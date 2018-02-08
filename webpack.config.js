var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        // 如果，这儿不写counter的话， [name].js 最后生成的是 main.js
        counter: './counter/app.js',
        // counter_hot: './counter-hot/app.js',
        // todo_mvc: './todomvc/app.js'
        // List:'./todomvc_jiandan/app.js'
        // shopping_cart: './shopping-cart/app.js',
        //     chat:'./chat/app.js'
        //     contact: './component_contact/app.js'
        // contact_2: './component_contact_2/app.js'
    },


    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
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
                loader:'vue-loader',
                options:{
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            }
        ]
    }
}