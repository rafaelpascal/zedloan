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
                <button class="mb-8 mt-4 flex justify-start items-center gap-3" @click="handleCloseNewAccount">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <p class="text-[#000] font-normal text-[22px] uppercase
                            font-Montserrat">Back</p>
                </button>
                <h2>PROFILE</h2>
                <form @submit.prevent="handleSubmit"
                    class="w-full lg:w-[541px] rounded-[12px] border-[1px] border-[#8F8F8F] h-[751px]">
                    <div class="h-[731px] px-6 w-full overflow-y-auto">
                        <div class="relative my-8 border-[1px] mt-[20px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[140px] py-[4px] bg-[#ECF3FF]">
                                Loan title</p>
                            <input type="text" v-model="loanTitle" placeholder="Loan Title"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                        </div>
                        <div class="relative my-8 border-[1px] border-[#2879FD] w-full h-[100px] rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[180px] py-[4px] bg-[#ECF3FF]">
                                Loan description</p>
                            <textarea v-model="loanDescription" placeholder="Loan description"
                                class="h-full w-full px-4 py-4 rounded-[12px] outline-none resize-none"></textarea>
                        </div>
                        <div class="relative my-8 border-[1px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[140px] py-[4px] bg-[#ECF3FF]">
                                Loan amount</p>
                            <input type="text" v-model="loanAmount" placeholder="Loan amount"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                        </div>
                        <div class="relative my-8 border-[1px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[140px] py-[4px] bg-[#ECF3FF]">
                                Loan duration</p>
                            <div class="flex px-4 h-full py-2 justify-between items-center">
                                <div
                                    class="flex h-full px-2 border-r-[1px] border-[#2879FD] w-[50%] justify-start items-center">
                                    <div>
                                        <select v-model="loanDuration" name="duration" id="duration"
                                            class="outline-none text-[20px] font-semibold font-Montserrat">
                                            <option value="" disabled selected>3</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select v-model="loanDurationUnit" name="months" id="months"
                                            class="outline-none text-[20px] font-normal font-Montserrat">
                                            <option value="" disabled selected>Months</option>
                                            <option value="6-months">6</option>
                                            <option value="12-months">12</option>
                                            <option value="24-months">24</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="w-[50%] px-2">
                                    <h1 class="font-Montserrat font-normal text-[14px] text-[#2879FD]">N6,000/month
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="relative my-8 border-[1px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[170px] py-[4px] bg-[#ECF3FF]">
                                Loan interest rate</p>
                            <div class="flex px-4 h-full py-2 justify-between items-center">
                                <div
                                    class="flex h-full px-2 border-r-[1px] border-[#2879FD] w-[50%] justify-start items-center">
                                    <div>
                                        <select v-model="loanInterestRate" name="interest" id="interest"
                                            class="outline-none text-[20px] font-semibold font-Montserrat">
                                            <option value="" disabled selected>4%</option>
                                            <option value="1">5%</option>
                                            <option value="2">6%</option>
                                            <option value="3">7%</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="w-[50%] px-2">
                                    <h1 class="font-Montserrat font-normal text-[14px] text-[#2879FD]">Total:
                                        N126,000
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="relative my-8 border-[1px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[170px] py-[4px] bg-[#ECF3FF]">
                                Moratorium</p>
                            <div class="flex px-4 h-full py-2 justify-between items-center">
                                <div class="flex h-full px-2 w-[50%] justify-start items-center">
                                    <div>
                                        <select v-model="moratorium" name="moratorium" id="moratorium"
                                            class="outline-none text-[20px] font-normal font-Montserrat">
                                            <option value="" disabled selected>3 Days</option>
                                            <option value="1">4 Days</option>
                                            <option value="2">5 Days</option>
                                            <option value="3">6 Days</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative my-8 border-[1px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[180px] py-[4px] bg-[#ECF3FF]">
                                Borrower’s Details</p>
                            <input type="text" v-model="borrowerDetails" placeholder="Borrower’s Details"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                        </div>
                        <div class="border-[1px] my-1 border-[#2879FD] w-full py-4 rounded-[12px]">
                            <input type="text" v-model="additionalDetails1" placeholder="Additional Details"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                        </div>
                        <div class="border-[1px] my-1 border-[#2879FD] w-full py-4 rounded-[12px]">
                            <input type="text" v-model="additionalDetails2" placeholder="Additional Details"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                        </div>
                        <div class="border-[1px] my-1 border-[#2879FD] w-full py-4 rounded-[12px]">
                            <input type="text" v-model="additionalDetails3" placeholder="Additional Details"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                        </div>
                        <div class="w-full flex justify-center items-center">
                            <button v-if="formsubmitted === true" type="submit"
                                class="w-full h-[50px] bg-blue-500 my-4 rounded-[12px] text-white font-bold">ACCEPT
                                LOAN OFFER</button>
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

import { ref, watch } from 'vue';
import Sidebar from '../components/ui/sidebar/Sidebar.vue';
import createdModal from '../components/ui/modal/createdModal.vue';

const isSidebarOpen = ref(false);
const formsubmitted = ref(false);
const loanreviewisActive = ref(false);
const account = ref(false);
const newAccount = ref(false);
const isCreated = ref(false);
const formActive = ref(true);
const showOverlay = ref(true);

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;

}
function handleMarkcomplete() {
    isCreated.value = true;

}

// Define reactive data properties for form inputs
const loanTitle = ref('');
const loanDescription = ref('');
const loanAmount = ref('');
const loanDuration = ref('');
const loanDurationUnit = ref('');
const loanInterestRate = ref('');
const moratorium = ref('');
const borrowerDetails = ref('');
const additionalDetails1 = ref('');
const additionalDetails2 = ref('');
const additionalDetails3 = ref('');

const handleformSubmit = () => {
    formsubmitted.value = true
    loanreviewisActive.value = true
    formActive.value = false
}

const handlenewAccount = () => {
    account.value = false
    newAccount.value = true
}
const handleCloseNewAccount = () => {
    account.value = true
    newAccount.value = false
}
const handleremoveoverlay = () => {
    showOverlay.value = false
}
const handleSubmit = () => {
    const formData = {
        loanTitle: loanTitle.value,
        loanDescription: loanDescription.value,
        loanAmount: loanAmount.value,
        loanDuration: loanDuration.value,
        loanDurationUnit: loanDurationUnit.value,
        loanInterestRate: loanInterestRate.value,
        moratorium: moratorium.value,
        borrowerDetails: borrowerDetails.value,
        additionalDetails1: additionalDetails1.value,
        additionalDetails2: additionalDetails2.value,
        additionalDetails3: additionalDetails3.value,
    };

    console.log('Form Data:', formData);
    account.value = true
    formsubmitted.value = false
    formActive.value = false
};
</script>

<style scoped></style>