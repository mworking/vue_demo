<template>
    <li class="todo" :class="{ completed: todo.done, editing: editing }">
        <div class="view">
            <input class="toggle" type="checkbox" v-bind:checked="todo.done" v-on:change="toggleTodo({ todo: todo })">
            <!--dblclick html 事件，双击-->
            <label v-text="todo.text" @dblclick="editing = true"></label>
            <button class="destroy" @click="deleteTodo({ todo: todo })"></button>
        </div>
        <input class="edit" v-show="editing" v-focus="editing" :value="todo.text" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" @blur="doneEdit"/>
    </li>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'Todo',
        props: ['todo'],
        data () {
            return {
                editing: false
            }
        },
        //自定义指令
        directives: {
            focus (el, { value }, { context }) {
                if (value) {
                    //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
                    context.$nextTick(() => {
                        el.focus()
                    })
                }
            }
        },
        methods: {
            //映射mutations 中的三个方法
            ...mapMutations([
                'editTodo', 'toggleTodo', 'deleteTodo'
            ]),
            //完成编辑
            doneEdit (e) {
                const value = e.target.value.trim()
                const { todo } = this
                if (!value) { //value 为on个
                    this.deleteTodo({
                        todo
                    })
                } else if (this.editing) {
                    this.editTodo({
                        todo,
                        value
                    })
                    this.editing = false
                }
            },
            //取消编辑
            cancelEdit (e) {
                e.target.value = this.todo.text
                this.editing = false
            }
        }
    }
</script>
