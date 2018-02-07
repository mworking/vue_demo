<template>
    <div>
        <p>子组件向我传递的消息是 {{ childWords }}</p>
        <!--子组件向父组件传递消息
            用到的知识点是： 自定义事件
            在SonComponent中通过this.$emit()触发child-tell-me-something这个方法，然后调用到父组件的listenToMyboy，
            并且携带参数传递
        -->
        <!--子组件向父组件传值，相当于子组件中的child-tell-me-something方法，等同于父组件中的listenToMyboy方法，就是绑定称为一个方法-->
        <son-component v-on:child-tell-me-something='listenToMyboy'></son-component>
    </div>
</template>

<script>

    import SonComponent from './SonComponent.vue'

    export default {
        data: function () {
            return {
                //对childWords 进行注册，这儿一定要注意，就像是，用这个变量的时候，一定要先声明
                childWords: ''
            }
        },
        components: { SonComponent },
        methods:{
            listenToMyboy(msg) {
                this.childWords = msg;
            }
        }
    }
</script>