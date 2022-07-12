<template>
  <header class="header">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="scss" scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .44rem;
    text-align: center;
    line-height: .44rem;
    background-color: #ed4040;

    h1 {
      font-size: .18rem;
      color: #fff;
    }
  }
</style>