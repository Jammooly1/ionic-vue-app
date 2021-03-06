import { ref } from 'vue';
import {createStore} from 'vuex'
import { v4 as uuidv4 } from "uuid";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: uuidv4(),
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg",
                    title: 'surfing',
                    description: 'surfing in hawaii'
                },
                {
                    id: uuidv4(),
                    title: 'study abroad',
                    image: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg',
                    description: 'study abroad in Italy'
                },
                {
                    id: uuidv4(),
                    title: 'hiking',
                    image: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg',
                    description: 'hiking in hawaii'
                },
                {
                    id: uuidv4(),
                    title: 'family reunion!',
                    image: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg',
                    description: 'family reunion in hawaii'
                }
            ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: uuidv4(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory({ commit }, memoryData) {
            commit('addMemory', memoryData);
        }
    },
    getters: {
        getMemories(state) {
            return state.memories;
        },
        getMemory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            }
        }
    },
});

export default store;