<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>Please add some products to cart.</i>
        </p>
        test v-show data： {{products.length}}  {{ !products.length }}<br>
        <ul>
            <li v-for="p in products">
                {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
            </li>
        </ul>
        <p>Total: {{ total | currency }}</p>
        <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
        <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            // 映射getters
            ...mapGetters({
                products: 'cartProducts',
                checkoutStatus: 'checkoutStatus'
            }),
            total () {
                //对数组中的所有元素调用指定的回调函数。该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。
                return this.products.reduce((total, p) => {
                    return total + p.price * p.quantity
                }, 0)
            }
        },
        methods: {
            checkout (products) {
                this.$store.dispatch('checkout', products)
            }
        }
    }
</script>
