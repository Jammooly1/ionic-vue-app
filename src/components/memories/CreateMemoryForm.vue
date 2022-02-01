<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="title"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input type="url" required v-model="imageUrl"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" v-model="description"/>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block" fill="outline">Save</ion-button>
    </form>
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue';
import { ref } from '@vue/reactivity';

export default {
    emits: ['save-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton
    },
    setup(_, {emit}) {
        const enteredTitle = ref('');
        const enteredImageUrl = ref('');
        const enteredDescription = ref('');

        const submitForm = () => {
            const memoryData = {
                title: enteredTitle.value,
                imageUrl: enteredImageUrl.value,
                description: enteredDescription.value
            }
            console.log(memoryData)
            emit('save-memory', memoryData)
        }

        return {
            title: enteredTitle,
            imageUrl: enteredImageUrl,
            description: enteredDescription,
            submitForm
        }
    }
}
</script>

<style>

</style>