<template>
    <li>
        <div>
            <input type="checkbox" />
            <label v-text="todo.text"></label>
            <button></button>
        </div>
        <input
                :value="todo.text"
                @keyup.enter = "doneEdit"
                @keyup.esc="cancelEdit"
                @blur="doneEdit"/>
    </li>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: 'Todo',
        props: ['todo'],
        data () {
            return {
                editing: false
            }
        },
        //(自定义指令) 注册局部指令，组件中接受一个 directives 的选项：
        directives:{
            focus (el,{value},{context}){
                if(value){
                    context.$nextTick(()=>{
                        el.focus()
                    })
                }
            }
        },
        methods:{
            ...mapMutations([
                 'editTodo', 'toggleTodo', 'deleteTodo'
            ]),
            doneEdit (e) {
                const value = e.target.value.trim()
                const { todo } = this
                if (!value){
                    this.deleteTodo({
                        todo
                    })
                } else if(this.editing){
                    this.editTodo({
                        todo,
                        value
                    })
                    this.editing = false
                }
            },
            cancelEdit (e) {
                e.target.value = this.todo.text
                this.editing = false
            }
        }
    }

</script>


