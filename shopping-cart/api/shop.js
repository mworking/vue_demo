/**
 * Mocking client-server processing
 */
const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export default {
    // 获取产品
    getProducts (cb) {
        setTimeout(() => cb(_products), 100)
    },

    // 购买产品
    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            // simulate(模拟) random checkout failure.  模拟随机失败
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ? cb() : errorCb()
        }, 100)
    }
}
