<template>
    <div>
        <p>父组件向子组件传值 == 父组件向子组件props中的值赋值，直接把子组件的msgFromFather 拿过来用，赋上一个值ok完事</p>
        <son-component msgFromFather = 'this is data from father'></son-component>
    </div>
</template>

<script>

    import SonComponent from './SonComponent.vue'

    export default {
        components: { SonComponent }
    }
</script>