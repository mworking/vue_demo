export const cartProducts = state => {
    return state.cart.added.map(({ id, quantity }) => {
        const product = state.products.all.find(p => p.id === id)
        console.log(product)
        return {
            title: product.title,
            price: product.price,
            quantity
        }
    })
}

/* *******************
 *  这里的state 为啥可以用， 应为这是模块话， 就是插槽式开发，在App.vue 中会将这个getter.js
 *  文件插入进去，这个state是全局的变量， 所以，这儿的话，可以直接使用
 *
 *  这个getter.js 文件 getter是抽出来的
 *
 *  //return 返回一个对象合集
     cartProducts{
         title,
         price,
         quantity
     }

     p => p.id === id

     var data = function(p){
          return p.id === id;
     }

     console.log( 5 === 5 ) true
     console.log( 5 === '5' ) false
 *
 * */