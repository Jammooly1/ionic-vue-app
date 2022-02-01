<template>
  <base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'Loading'" pageDefaultBackLink="/memories">
    <h2 v-if="!loadedMemory">Could not find a memory for the given ID</h2>
    <memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></memory-overview>
  </base-layout>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import MemoryOverview from '../components/memories/MemoryOverview.vue'

export default {
  components: {
    MemoryOverview
  },
  setup() {
    const store = useStore();
    const route = useRoute(); 
    const memoryId = ref(route.params.id)
    
    // watch(route, () => {
    //   memoryId.value = route.params.id
    // })
 
    const loadedMemory = computed(() => store.getters.getMemory(memoryId.value))
    return {memoryId, loadedMemory}
  }
}
</script>

<style>

</style>