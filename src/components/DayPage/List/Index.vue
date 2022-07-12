<template>
  <div class="day-list">
    <list-item 
      title="当前年月"
      :content="data['year-month']"
    ></list-item>
    <list-item 
      title="今年属相"
      :content="data.animalYear"
    ></list-item>
    <list-item 
      title="农历年份"
      :content="data.lunarYear"
    ></list-item>
    <list-item 
      title="适宜事件"
      :content="data['year-month']"
    ></list-item>
    <list-item 
      title="避免事件"
      :content="data['year-month']"
    ></list-item>
  </div>
</template>

<script>

import listItem from './Item';

export default {
  name: 'DayList',
  props: {
    data: Object
  },
  components: {
    listItem
  }
}
</script>

<style lang="scss" scoped>
  .day-list {
    padding: .15rem;
    box-sizing: border-box;
  }
</style>