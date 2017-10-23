<template>
    <div id="app">
        <h2 v-text="title"></h2>
        <input v-model="newItem" v-on:keyup.enter="addNew"/>
        <ul>
           <li v-for="item in items" v-bind:class="{finished: item.isFinished}">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>

    import Store from './store'
    export default {
        data:function () {
            return {
                title: 'this is a todolist',
                items:Store.fetch(),
                newItem: ''
            }
        },
        watch:{
            items:{
                handler: function (items) {
                    Store.save(items)
                },
                deep:true
            }
        },
        methods:{
            toggleFinish: function (item) {
                item.isFinished = !item.isFinished
            },
            addNew:function () {
                this.items.push({
                    label:this.newItem,
                    'isFinished': false
                }),
                this.newItem = ""
            }
        }
    }

</script>

<style>
    .finished{
        text-decoration: underline;
    }

</style>

