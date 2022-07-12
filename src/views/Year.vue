<template>
  <div class="container">
    <error-tip></error-tip>
    <div v-if="!errorCode">
      <card-list
        :data="yearData"
      ></card-list>
    </div>
  </div>
</template>

<script>

import getData from '../services';
import { getNowDate } from '@/libs/utils';

import { onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';

import ErrorTip from '@/components/ErrorTip/Index.vue';
import CardList from '@/components/YearPage/List.vue';

export default {
  name: 'YearPage',
  components: {
    ErrorTip,
    CardList
  },
  setup () {
    const store = useStore(),
          state = store.state;

    onMounted(() => {
      getData(store, 'year', getNowDate('year'));
    })

    watch(() => {
      return state.yearData
    }, () => {
      store.commit('setErrorCode', 0);
    })

    return {
      yearData: computed(() => state.yearData),
      errorCode: computed(() => state.errorCode)
    }
  }
  

  
}
</script>

<style lang="scss" scoped>

</style>