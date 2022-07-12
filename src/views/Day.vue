<template>
  <div class="container">
    <error-tip></error-tip>
    <div v-if="!errorCode">
      <day-card 
        :data="dayData"
      ></day-card>
      <day-list 
        :data="dayData"
      ></day-list>
      </div>
  </div>
</template>

<script>

import getData from '../services';
import { onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';

import DayCard from '@/components/DayPage/Card';
import DayList from '@/components/DayPage/List/Index.vue';
import ErrorTip from '@/components/ErrorTip/Index.vue';

import { getNowDate } from '@/libs/utils';

export default {
  name: 'DayPage',
  components: {
    DayCard,
    DayList,
    ErrorTip
  },
  setup () {
    const store = useStore(),
          state = store.state;


    onMounted (() => {
      getData(store, 'day', getNowDate('day'));
    })

    watch(() => {
      return state.dayData
    }, () => {
      // 将错误码清零
      store.commit('setErrorCode', 0)
    })

    return {
      dayData: computed(() => state.dayData),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>