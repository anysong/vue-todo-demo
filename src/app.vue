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
    background-image: url('./assets/images/pic.jpeg')
  }
   
</style>
