<template>
    <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    progress: {
        type: Number,
        required: true,
    },
});
</script>

<style scoped>
.progress-bar-container {
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
}

.progress-bar {
    border: 2px solid #2879FD;
    transition: width 0.3s ease;
}
</style>