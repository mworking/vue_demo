<template>
    <div id="app">
        <h2 v-text="title"></h2>
        <input v-model="newItem" v-on:keyup.enter="doneEdit" placeholder="please input..."/>
        <ul>
           <li v-for="item in items" v-bind:class="{finished: item.isFinished}">
               <!--绑定checkbox 自己的checked属性-->
               <input type="checkbox" v-bind:checked="item.isFinished" v-on:click="toggleFinish(item)"/>
               {{item.label}}
               <button v-on:click="deleteItem(item)">delete</button>
           </li>
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
            deleteItem: function (item) {
                this.items.splice(this.items.indexOf(item),1)
            },
            doneEdit(e){
                //添加输入框不为空的判断
                const value = e.target.value.trim()
                if(value){
                    this.items.push({
                        label:this.newItem,
                        'isFinished': false
                    }),
                    this.newItem = ""
                }else{
                    alert("empty content")
                }
            }
        }
    }

</script>

<style>
    .finished{
        text-decoration: underline;
    }
</style>

