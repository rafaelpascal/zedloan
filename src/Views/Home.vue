<template>
    <div class="relative flex w-full ">
        <!-- <div class="absolute h-full sm:z-10 lg:w-[20%] w-full">
            <Sidebar class="bg-black h-full" />
        </div> -->
        <div :class="[
            'absolute h-[100vh] sm:z-10 bg-black transition-all duration-300',
            isSidebarOpen ? 'w-[70%] lg:w-[0px] flex' : 'lg:w-[304px] lg:flex hidden'
        ]">
            <Sidebar />
        </div>
        <div class="flex-1 h-[100vh] w-full lg:w-[80%] lg:ml-[314px] sm:z-0 p-4">
            <button class="lg:hidden absolute top-0 left-0 p-4 text-black z-20" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button>
            <div class="py-[6%] px-2 lg:px-[15%]">
                <div class="w-full">
                    <h2 class="font-Montserrat text-[16px]">Next Due: <span>21/08/2024</span><span
                            class="text-[#2879FD]">{16 days}</span></h2>
                    <div class="flex lg:flex-row flex-col justify-start gap-8 py-10 items-center">
                        <div class="w-full lg:w-[351px] h-[197px] bg-[#0961E3] rounded-lg">
                            <div class="p-10">
                                <h2 class="text-[20px] font-normal font-Montserrat text-[#F9FAFC]">REMAINING
                                    LOAN</h2>
                                <h1 class="text-[30px] font-bold font-Montserrat text-[#F9FAFC]">120,000</h1>
                            </div>
                            <h3 class="text-[18px] font-normal text-right w-full px-4 font-Montserrat text-[#F9FAFC]">
                                N130,000
                            </h3>
                        </div>
                        <div class="w-full lg:w-[351px] h-[197px] bg-[#0961E3] rounded-lg">
                            <div class="p-10">
                                <h2 class="text-[20px] font-normal font-Montserrat text-[#F9FAFC]">REPAID AMOUNT</h2>
                                <h1 class="text-[30px] font-bold font-Montserrat text-[#F9FAFC]">10,000</h1>
                            </div>
                            <h3 class="text-[18px] font-normal text-right w-full px-4 font-Montserrat text-[#F9FAFC]">
                                1/4
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="font-Montserrat text-[16px] mb-2">INSTANT REPAYMENT</h2>
                    <div class="flex justify-start gap-1 items-center">
                        <div
                            class="w-[181px] flex justify-center items-center h-[76px] rounded-[4px] border-l-[1.5px]  border-r-[1.5px]  border-t-[1.5px] border-b-[3px] border-[#2879FD]">
                            <h3 class="text-[30px] font-semibold font-Montserrat text-[#000]">10,000+</h3>
                        </div>
                        <button
                            class="w-[161px] bg-[#0961E3] rounded-[4px] h-[60px] text-[16px] font-semibold font-Montserrat text-[#fff]">Repay
                            Now</button>
                    </div>
                </div>
                <div class="mt-6">
                    <ProgressBar :value="50" :max="100" />
                </div>
                <h2 class="font-Montserrat text-[16px] mt-2">Remaining: 120,000</h2>
                <div class="w-full lg:w-[551px] h-[259px] rounded-[12px]">

                </div>
            </div>
        </div>
        <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" v-if="isSidebarOpen" @click="toggleSidebar">
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Sidebar from '../components/ui/sidebar/Sidebar.vue';
import ProgressBar from '../components/ui/progressbar/ProgressBar.vue'

const isSidebarOpen = ref(false);

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
}
</script>