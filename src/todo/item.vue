<template>
    <div :class="['todo-item', todo.completed ? 'completed': '']">
        <input 
            type="checkbox"
            class="toggle"
            v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button class="destory" @click="deleteTodo">x</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo(){
            this.$emit('del', this.todo.id);
        }
    }
}
</script>
<style lang="less" scoped>
    .todo-item {
        background: white;
        border: 1px solid #ccc;
        padding: 5px;
    }
</style>


