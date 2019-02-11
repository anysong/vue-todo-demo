<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="做什么?"
      @keyup.enter="addTodo"
    >
    <Item @del="deleteTodo" :todo="todo" :key="todo.id" v-for="todo in filterTodos" />
    <tabs :filter="filter" :todos="todos" @toggle="toggleFn"></tabs>
  </section>
</template>
<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id=0;

export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  components: {
    Item,
    Tabs
  },
  computed: {
      filterTodos(){
          console.log(this.filter);
          if(this.filter === 'all'){
              return this.todos
          }else {
              return [];
          }
      }
  },
  methods: {
    addTodo(e) {
        this.todos.unshift({
            id: id++,
            content: e.target.value.trim(),
            completed: false
        })
        e.target.value = '';
    },
    deleteTodo(id){
        console.log(id);
        this.todos.splice(this.todos.findIndex(todo => todo.id == id, 1))
    },
    toggleFn(state){
        console.log(state);
        this.filter = state;
    }
  }
};
</script>
<style lang="less" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
  .add-input {
    position: relative;
    width: 100%;
    font-size: 24px;
    border: 0;
    line-height: 1.4em;
    padding: 6px;
    border: 1px solid #999;
    box-sizing: border-box;
    padding: 16px 16px 16px 60px;
  }
}
</style>


