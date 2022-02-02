<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="title"/>
            </ion-item>
            <ion-item>
                <ion-thumbnail slot="start">
                    <img src=""/>
                </ion-thumbnail>
                <ion-button type="button" fill="clear" @click="takePhoto">
                    <ion-icon slot="start" :icon="camera"></ion-icon>
                     Take Photo
                </ion-button>
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
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonThumbnail, IonIcon} from '@ionic/vue';
import { camera } from 'ionicons/icons'
import { ref } from '@vue/reactivity';

export default {
    emits: ['save-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
        IonThumbnail,
        IonIcon
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

        const takePhoto = () => {
            
        }

        return {
            title: enteredTitle,
            imageUrl: enteredImageUrl,
            description: enteredDescription,
            submitForm,
            camera,
            takePhoto
        }
    }
}
</script>

<style>

</style>