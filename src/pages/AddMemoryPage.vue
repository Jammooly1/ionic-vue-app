<template>
    <base-layout pageTitle="Add Memory" pageDefaultBackLink="/memories">
        <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    components: {
        CreateMemoryForm
    },
    setup() {
        const store = useStore()
        const router = useRouter()

        const saveMemory = (memoryData) => {
            store.dispatch('addMemory', memoryData)
            router.replace('/memories')
        }
        return { saveMemory }
    }
}
</script>

<style>

</style>