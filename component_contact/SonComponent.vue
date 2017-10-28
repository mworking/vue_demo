<template>
    <div>
        父组件传递过来的数据： {{ msgFromFather }} <br>
        <button v-on:click="getFromFatherData()"> 打印传递数据到控制台 </button>
    </div>
</template>

<script>
    export default {
        props: [ 'msgFromFather' ],
        methods:{
            getFromFatherData(){
                console.log(this.msgFromFather)
            }
        }
    }
</script>