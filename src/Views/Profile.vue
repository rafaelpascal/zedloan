<template>
    <div class="relative flex w-full ">
        <!-- <div class="absolute h-full sm:z-10 lg:w-[20%] w-full">
            <Sidebar class="bg-black h-full" />
        </div> -->
        <div :class="[
            'absolute h-[100vh] z-10 bg-black transition-all duration-300',
            isSidebarOpen ? 'w-[70%] lg:w-[0px] flex' : 'lg:w-[304px] lg:flex hidden'
        ]">
            <Sidebar />
        </div>
        <div class="flex-1 h-[100vh] pt-[4%] w-full lg:w-[80%] lg:ml-[314px] z-0">
            <button class="lg:hidden sticky bg-white w-full top-0 left-0 p-4 text-black z-20" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button>
        </div>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue';
import Sidebar from '../components/ui/sidebar/Sidebar.vue';
import ProgressBar from '../components/ui/progressbar/ProgressBar.vue'

</script>

<style scoped></style>