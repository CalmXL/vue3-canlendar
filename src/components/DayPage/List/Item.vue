<template>
  <div class="list-item">
    <div class="block title">{{ title }}</div>
    <div class="block content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: String,
    content: String
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    display: flex;
    flex-direction: row;
    height: .44rem;
    margin-bottom: .15rem;
    border: solid 1px #ddd;
    background: #fff;
    border-radius: .1rem;

    .block {
      height: 100%;

      &.title {
        width: 1rem;
        font-size: .18rem;
        color: #ed4040;
        line-height: .44rem;
        text-align: center;
      }

      &.content{
        color: #333;
      }
    }
  }
</style>