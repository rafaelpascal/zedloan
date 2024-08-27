<template>
    <div class="relative flex w-full h-[100vh]">
        <!-- <div class="absolute h-full sm:z-10 lg:w-[20%] w-full">
            <Sidebar class="bg-black h-full" />
        </div> -->
        <div :class="[
            'absolute z-10 h-[100%] bg-black transition-all duration-300',
            isSidebarOpen ? 'w-[70%] lg:w-[0px] flex' : 'lg:w-[304px] lg:flex hidden'
        ]">
            <Sidebar />
        </div>
        <div class="flex-1 h-[100%] pt-[2%] w-full lg:w-[80%] px-2 lg:ml-[314px] z-0">
            <button class="lg:hidden sticky bg-white w-full top-0 left-0 p-4 text-black z-20" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button>

            <div class="flex justify-center items-center flex-col">
                <form @submit.prevent="handleSubmit"
                    class="w-full lg:w-[541px] rounded-[12px] border-[1px] border-[#8F8F8F] h-[751px]">
                    <div class="h-full px-6 w-full">
                        <button class=" mt-4 mb-4 flex justify-start items-center gap-3" @click="handleCloseNewAccount">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <p class="text-[#000] font-normal text-[22px] uppercase
                                font-Montserrat">Back</p>
                        </button>
                        <h2 class="text-[#000]  mb-10 font-semibold text-[18px] uppercase
                        font-Montserrat">PROFILE</h2>
                        <div
                            class="border-[1px] my-1 border-[#2879FD] flex justify-between items-center pr-6 w-full py-5 mb-5 rounded-[12px]">
                            <input type="text" v-model="myName" placeholder="Additional Details"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                            <button class="text-[#000] font-normal text-[18px]
                            font-Montserrat">edit</button>
                        </div>
                        <div
                            class="border-[1px] my-1 border-[#2879FD] flex justify-between items-center pr-6  w-full py-5 mb-5 rounded-[12px]">
                            <input type="text" v-model="myPhone" placeholder="Additional Details"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                            <button class="text-[#000] font-normal text-[18px]
                                font-Montserrat">edit</button>
                        </div>
                        <div
                            class="border-[1px] my-1 border-[#2879FD] w-full  flex justify-between items-center pr-6  py-5 mb-5 rounded-[12px]">
                            <input type="text" v-model="myEmail" placeholder="Additional Details"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                            <button class="text-[#000] font-normal text-[18px]
                                font-Montserrat">edit</button>
                        </div>

                        <div class="w-full border-[1px] my-1 border-[#2879FD] rounded-[12px] px-6">
                            <button type="submit"
                                class="w-full bg- py-5 rounded-[12px] text-[#00] font-normal text-left">Change
                                password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" v-if="isSidebarOpen" @click="toggleSidebar">
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Sidebar from '../components/ui/sidebar/Sidebar.vue';

const isSidebarOpen = ref(false);
const formsubmitted = ref(false);


function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;

}

// Define reactive data properties for form inputs
const myName = ref('Stephen Michael');
const myPhone = ref('07035957197');
const myEmail = ref('rafaelpascal234@gmail.com');

</script>

<style scoped></style>