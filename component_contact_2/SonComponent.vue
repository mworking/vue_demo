<template>
    <div>
        <button v-on:click="sendMsgTofather"> 传递消息给父组件 </button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                content_msg : 'this msg from child ！'
            }
        },
        methods:{
            sendMsgTofather () {
                this.$emit('child-tell-me-something',this.content_msg);
            }
        }
    }
</script>