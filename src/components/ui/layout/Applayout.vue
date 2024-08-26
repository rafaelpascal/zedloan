<template>
    <div class="flex w-full overflow-y-auto">
        <!-- <Sidebar class="bg-black h-full w-[20%]" /> -->
        <router-view />
    </div>
</template>

<script setup>
import Sidebar from '../sidebar/Sidebar.vue';
</script>

<style scoped></style>