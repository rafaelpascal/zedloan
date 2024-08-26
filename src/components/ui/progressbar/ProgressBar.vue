<template>
    <div class="w-full lg:w-[20%] bg-gray-200 rounded-full h-1 overflow-hidden">
        <div class="bg-blue-500 h-full transition-all duration-300 ease-in-out" :style="{ width: `${progress}%` }">
        </div>
    </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
    value: {
        type: Number,
        required: true,
        default: 0,
    },
    max: {
        type: Number,
        required: true,
        default: 100,
    },
});

const { value, max } = toRefs(props);

const progress = computed(() => {
    return (value.value / max.value) * 100;
});
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>