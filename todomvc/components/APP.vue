<template>
    <section>
        <!--header-->
        <header>
            <h1>todos</h1>
            <input autofocus autocomplete="off" placeholder="what needs to be done?" @keyup.enter = "addTodo">
        </header>
        <!--content-->
        <section>
            <input type="checkbox" :checked="allChecked" @change="toggleAll({ done: !allChecked})">
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <todo v-for="(todo,index) in filteredTodos" :key="index" :todo="todo"></todo>
            </ul>
        </section>
        <!--footer-->
        <footer>
            <span>
                <strong>{{ remaining }}</strong>
                {{ remaining | pluralize('item') }} left
            </span>
            <ul>
                <li v-for="(val,key) in filters">
                    <a :href="'#/' + key" @click="visibility = key">
                        {{ key | capitalize}}
                    </a>
                </li>
            </ul>
            <button @click="clearCompleted">
                clear completed
            </button>
        </footer>
    </section>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Todo from './Todo.vue'

    const filters = {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.done),
        completed: todos => todos.filter(todo => todo.done)
    }

    export default {
        components: { Todo },
        data () {
            return {
                visibility: 'all',
                filters: filters
            }
        },
        computed: {
            todos (){
                return this.$store.state.todos
            },
            allChecked () {
                return this.todos.every(todo => todo.done)
            },
            filteredTodos () {
                return filters[this.visibility](this.todos)
            },
            remaining (){
                return this.todos.filter(todo => !todo.done).length
            }
        },
        methods:{
            addTodo (e) {
                var text = e.target.value
                if(text.trim()){
                    this.$store.commit('addTodo',{text})
                }
                e.target.value = ''
            },
            ...mapMutations([
                'toggleAll','clearCompleted'
            ])
        },
        filters:{
            pluralize: (n, w) => n === 1 ? w : (w + 's'),
            capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
        }
    }
</script>


