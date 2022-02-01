<template>
    <base-layout pageTitle="All Memories!">
        <template v-slot:actions-end>
            <ion-button router-link='/memories/add'>
                <ion-icon slot="icon-only" :icon="add">

                </ion-icon>
            </ion-button>
        </template>
        <memories-list :memories="memories"></memories-list>
    </base-layout>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import MemoriesList from '../components/memories/MemoriesList.vue'
import {IonButton, IonIcon} from '@ionic/vue';
import {add} from 'ionicons/icons'

export default {
    components: {
        MemoriesList,
        IonButton,
        IonIcon
    },
    setup() {
        const store = useStore();
        const memories = computed(() => store.getters.getMemories)
        return {memories, add}
    }
}
</script>

<style scoped>

</style>