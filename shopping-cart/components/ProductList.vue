<template>
    <ul>
        <li v-for="p in products">
            {{ p.title }} - {{ p.price | currency }}
            <br>
            <button :disabled="!p.inventory" @click="addToCart(p)">
                Add to cart  <br>
                test :disabled info {{ p.inventory }} {{ !p.inventory }}
            </button>
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        //映射getters
        computed: mapGetters({
            products: 'allProducts'
        }),
        //映射actinos
        methods: mapActions([
            'addToCart'
        ]),
        //在实例创建完成后被立即调用。
        // 在这一步，实例已完成以下的配置： 数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
        created () {
            this.$store.dispatch('getAllProducts')
        }
    }
</script>
