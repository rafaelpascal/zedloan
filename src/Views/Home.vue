<template>
    <div class="relative flex w-full h-[100vh]">
        <!-- <div class="absolute h-full sm:z-10 lg:w-[20%] w-full">
            <Sidebar class="bg-black h-full" />
        </div> -->
        <div :class="[
            'absolute h-[100%] z-20 bg-black transition-all duration-300',
            isSidebarOpen ? 'w-[70%] lg:w-[0px] flex' : 'lg:w-[304px] lg:flex hidden'
        ]">
            <Sidebar />
        </div>
        <div class="flex-1 h-[100%] pt-[4%] w-full lg:w-[80%] lg:ml-[314px] z-0">
            <button class="lg:hidden sticky bg-white w-full top-0 left-0 p-4 text-black z-20" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button>
            <div class="lg:px-20 px-4">
                <div class="w-full">
                    <h2 class="font-Montserrat text-[16px]">Next Due: <span>21/08/2024</span><span
                            class="text-[#2879FD]">{16 days}</span></h2>
                    <div class="flex lg:flex-row flex-col justify-start gap-8 py-4 items-center">
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
                            class="w-[161px] bg-[#0961E3] rounded-[4px] h-[60px] text-[16px] font-semibold font-Montserrat text-[#fff]"
                            @click="toggleisPaynow">Repay
                            Now</button>
                    </div>
                </div>
                <div class="mt-6">
                    <ProgressBar :value="50" :max="100" />
                </div>
                <h2 class="font-Montserrat text-[16px] mt-2">Remaining: 120,000</h2>
                <div class="w-full lg:w-[551px] h-auto bg-[#ECF5FF] p-10 mt-4 rounded-[12px]">
                    <h2 class="font-Montserrat font-normal text-[16px] mb-2">REPAYMENTS</h2>
                    <div>
                        <ul>
                            <li class="flex border-b-[2px] p-4 border-[#0961E3] w-full justify-between items-center"
                                v-for="item in items" :key="item.id">
                                <span class="font-Montserrat font-bold text-[16px]">{{ item.amount }}</span>
                                <span class="font-Montserrat font-normal uppercase text-[16px]">{{ item.date }}</span>
                                <span class="font-Montserrat font-normal uppercase text-[16px]">{{ item.bank }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" v-if="isSidebarOpen" @click="toggleSidebar">
        </div>

        <!-- Modal -->
        <Modal :show="isPaynow" @update:show="isPaynow = $event">
            <div class="flex lg:flex-row gap-4 flex-col justify-between items-center">
                <div
                    class="w-full lg:w-[417px] bg-[#ECF5FF] flex justify-start flex-col p-8 items-center rounded-[12px] h-[307px]">
                    <div class="flex flex-col space-y-4">
                        <div v-for="option in options" :key="option.value" class="flex items-center">
                            <input type="radio" :id="option.value" name="options" :value="option.value"
                                v-model="selectedOption" class="custom-radio text-blue-600" />
                            <label :for="option.value" class="ml-2 text-[20px] font-semibold uppercase">{{ option.label
                                }}</label>
                        </div>
                    </div>
                    <div class="mt-4 lg:mt-[10%] w-full flex justify-start items-center">
                        <button
                            class="w-full lg:w-[166px] bg-[#0961E3] font-bold text-[16px] font-Montserrat h-[51px] text-[#fff] rounded-[4px]">
                            PAY NOW
                        </button>
                    </div>
                </div>
                <div class="w-full lg:w-[570px] bg-[#ECF5FF] rounded-[12px] p-[10px]">
                    <h2 class="text-center text-[45px] text-[#2879FD] font-Montserrat font-bold uppercase">TRANSFER</h2>
                    <p class="text-center text-[20px] text-[#000] font-Montserrat font-bold uppercase">TO THE
                        FOLLOWING ACCOUNT</p>
                    <div class="w-full px-4 lg:px-10 ">
                        <p class="text-center text-[12px] text-[#000] font-Montserrat font-normal uppercase">TO THE
                            AMOUNT YOU WILL SEND</p>
                        <div class="flex justify-center items-center">
                            <div class="w-[209px] mt-2 py-2 bg-white">
                                <h2 class="text-center text-[30px] text-[#0961E3] font-Montserrat font-bold uppercase">
                                    N26,500
                                </h2>
                            </div>
                        </div>
                        <div class="w-full mt-2">
                            <ul>
                                <li class="flex border-b-[2px] py-2 border-[#0961E3] w-full justify-between items-center"
                                    v-for="bank in banks" :key="bank.id">
                                    <div>
                                        <p class="font-normal uppercase text-[#0961E3]">{{ bank.description }}</p>
                                        <p class="font-semibold uppercase text-[#000] font-Montserrat text-[20px]">{{
                                            bank.accountNo
                                            ||
                                            bank.accountName || bank.bank }}</p>
                                    </div>
                                    <button v-if="bank.copy === true"
                                        @click="copyToClipboard(bank.accountNo || bank.accountName || bank.bank)"
                                        class="ml-4 p-2 text-white rounded">
                                        <img v-if="copied === false" :src=copy alt="">
                                        <span v-if="copied === true" class="material-icons">
                                            <svg :class="{ 'fade-in': previousCopied && copied, 'fade-out': previousCopied && !copied }"
                                                class="w-6 h-6 text-green-500" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>

                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="w-[289px] flex justify-between items-center mt-2 p-2 bg-white">
                            <h2 class="text-left text-[15px] text-[#7F7F7F] font-Montserrat font-normal">
                                Narration/Ref: <span :reference class="text-[#0961E3]">{{ reference }}</span>
                            </h2>
                            <button @click="copyref(reference)" class="ml-4 p-2 text-white rounded">
                                <img v-if="refcopied === false" :src=copy alt="">
                                <span v-if="refcopied === true" class="material-icons">
                                    <svg :class="{ 'fade-in': previousCopied && refcopied, 'fade-out': previousCopied && !refcopied }"
                                        class="w-6 h-6 text-green-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>

                                </span>
                            </button>
                        </div>
                        <div class="mt-4 lg:mt-[10%] w-full flex justify-center items-center">
                            <button
                                class="w-full lg:w-[315px] bg-[#0961E3] font-bold text-[16px] font-Montserrat h-[51px] text-[#fff] rounded-[4px]">
                                I HAVE DONE THE TRANSFER
                            </button>
                        </div>
                        <div class="mt-4">
                            <p class="text-center text-[18px] mt-4 text-[#2879FD] font-Montserrat font-bold">
                                Checking for the payment <span class="text-[#174591]">of N26,500</span></p>
                            <p class="text-center text-[13px] text-[#7F7F7F] font-Montserrat font-normal">You will
                                be
                                notified when your payment is successful.</p>
                        </div>
                        <div class="flex justify-end items-center mt-4">
                            <button
                                class="underline text-center text-[13px] text-[#000] uppercase font-Montserrat font-normal">RETURN
                                TO DASHBOARD </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue';
import Sidebar from '../components/ui/sidebar/Sidebar.vue';
import ProgressBar from '../components/ui/progressbar/ProgressBar.vue'
import Modal from '../components/ui/modal/Modal.vue';
import { copy } from '../assets'

const items = ref([
    { id: 1, amount: '19,000', date: "02/5/2026", bank: "Zenith Bank" },
    { id: 2, amount: '19,000', date: "02/5/2026", bank: "Zenith Bank" },
    { id: 3, amount: '19,000', date: "02/5/2026", bank: "Zenith Bank" },
]);
const banks = ref([
    { id: 1, description: "Account Number", accountNo: '2004000698', copy: true },
    { id: 3, description: "Bank", bank: "fcmb", copy: false },
    { id: 2, description: "Account Name", accountName: 'ZEDLA ENTERPRISES LTD', copy: false },
]);

const options = ref([
    { value: 'option1', label: 'ZENITH BANK' },
    { value: 'option2', label: 'GTBANK' },
    { value: 'option3', label: 'ACCESS BANK' },
    { value: 'option4', label: 'TRANSFER FROM OTHER BANK' }
]);

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
function copyref(text) {
    navigator.clipboard.writeText(text).then(() => {
        refcopied.value = true
        setTimeout(() => {
            refcopied.value = false
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
const isSidebarOpen = ref(false);
const isPaynow = ref(false);
const copied = ref(false);
const refcopied = ref(false);
const previousCopied = ref(false);
const selectedOption = ref('option1');
const reference = ref("0657-hUVp");


function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
}
function toggleisPaynow() {
    isPaynow.value = !isPaynow.value;
}
watch(copied, (newVal) => {
    previousCopied.value = newVal;
});
watch(refcopied, (newVal) => {
    previousCopied.value = newVal;
});
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}

.fade-out {
    animation: fadeOut 0.5s ease-out;
}

.custom-radio {
    appearance: none;
    border-radius: 50%;
    border: 2px solid #8F8F8F;
    width: 23px;
    height: 23px;
    position: relative;
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
    background-color: #fff;
}

.custom-radio:checked {
    border-color: #0961E3;
    background-color: #0961E3;
}

.custom-radio:checked::after {
    content: '';
    display: block;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 2px solid #0961E3;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>