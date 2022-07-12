<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <search-input
      :placeholder="placeholder"
      :maxlength="maxlength"
    ></search-input>
    <router-view v-slot="{ Component }">
      <keep-live>
        <component :is="Component"></component>
      </keep-live>
    </router-view>
    <tab />
  </div>
</template>

<script>

import MyHeader from '@/components/Header/Header.vue';
import SearchInput from '@/components/SearchInput/SearchInput.vue';
import Tab from '@/components/Tab';

import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    SearchInput
  },
  setup () {
    const store = useStore(),
          state = store.state,
          router = useRouter();
    
    router.push('/');
    // console.log(router);
    store.commit('setPlaceholder', 'day');

    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      // console.log(value);
      store.commit('setHeaderTitle', value);
      store.commit('setPlaceholder', value);
      store.commit('setMaxlength', value);
      store.commit('setField', value);
      store.commit('setErrorCode', 0);
    })

    return computed(() => state).value; // {}
  }
}
</script>