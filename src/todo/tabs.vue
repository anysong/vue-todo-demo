<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state? 'actived':'']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>
<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
        type: Array,
        required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  computed: {
      unFinishedTodoLength(){
          return this.todos.filter(todo => !todo.completed).length;
      }
  },
  methods: {
    clearAllCompleted() {},
    toggleFilter(state) {
        this.$emit('toggle', state)
    }
  }
};
</script>
<style lang="less" scoped>
.helper {
  background: white;
  height: 40px;
  &::after {
    content: "";
    height: 0;
    clear: both;
    visibility: hidden;
    display: block;
  }
  .tabs {
    margin-left: 100px;
    float: left;
    span {
        display:inline-block;
        margin: 0 2px;
        border: 1px solid #ccc;
        padding: 5px;
    }
  }
  .left {
    float: left;
    border: 1px solid #ccc;
    padding: 5px;
  }
  .clear {
    float: right;
    border: 1px solid #ccc;
    padding: 5px;
  }
}
</style>


