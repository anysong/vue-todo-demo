<template>
  <div class="text">{{text}}</div>
</template>

<script>
export default {
  data() {
    return {
      text: "abc"
    };
  }
};
</script>

<style lang='less'>
  body {
    .text {
        color: red;
    }
  }
   
</style>
