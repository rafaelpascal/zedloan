<template>
    <div class="relative flex w-full h-[100vh]">
        <!-- <div class="absolute h-full sm:z-10 lg:w-[20%] w-full">
            <Sidebar class="bg-black h-full" />
        </div> -->
        <div :class="[
            'absolute z-20 h-[100%] bg-black transition-all duration-300',
            isSidebarOpen ? 'w-[70%] lg:w-[0px] flex' : 'lg:w-[304px] lg:flex hidden'
        ]">
            <AdminSidebar />
        </div>


        <div class="flex-1 h-[100%] pt-[2%] w-full lg:w-[80%] px-2 lg:ml-[314px] z-0">
            <button class="lg:hidden sticky bg-white w-full top-0 left-0 p-4 text-black z-20" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button>

            <div v-if="!ishomecards" class="flex w-full m-auto lg:w-[90%]  justify-between items-center">
                <button class="mb-8 mt-4 flex justify-start items-center gap-3" @click="handleBack">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <p class="text-[#000] font-normal text-[22px] uppercase
                            font-Montserrat">Back</p>
                </button>
                <button
                    class="w-full my-[6%] lg:w-[238px] flex justify-center items-center gap-4 border-[1px] border-[#0961E3] bg-[#fff] font-semibold text-[15px] font-Montserrat h-[61px] text-[#0961E3] rounded-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <p> CREATE LOAN OFFER</p>
                </button>
            </div>
            <div v-if="ishomecards" class="flex justify-end flex-col lg:w-[70%] m-auto items-end w-full">
                <button
                    class="w-full my-[6%] lg:w-[238px] flex justify-center items-center gap-4 border-[1px] border-[#0961E3] bg-[#fff] font-semibold text-[15px] font-Montserrat h-[61px] text-[#0961E3] rounded-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <p> CREATE LOAN OFFER</p>
                </button>
                <div class="flex justify-between items-center w-full m-auto">
                    <button
                        class="w-full p-4 lg:w-[286px] h-[148px] flex justify-center items-center flex-col border-l-[3px] border-t-[1px] border-b-[1px] border-r-[1px]  border-[#2879FD] rounded-[4px]"
                        @click="handleLoanOut">
                        <h2 class="font-Montserrat text-[18px] font-normal text-[#6E717C] text-left">TOTAL LOANS OUT
                        </h2>
                        <h2 class="font-Montserrat text-[35px] font-normal text-[#000000] text-left">13,580,000</h2>

                    </button>
                    <button
                        class="w-full p-4 lg:w-[286px] h-[148px] flex justify-center items-center flex-col border-l-[3px] border-t-[1px] border-b-[1px] border-r-[1px]  border-[#2879FD] rounded-[4px]"
                        @click="handleRepaymentHis">
                        <h2 class="font-Montserrat text-[18px] font-normal text-[#6E717C] text-left">TOTAL REPAYMENTS
                        </h2>
                        <h2 class="font-Montserrat text-[35px] font-normal text-[#000000] text-left">9,280,000</h2>

                    </button>
                    <button
                        class="w-full p-4 lg:w-[286px] h-[148px] flex justify-center items-center flex-col border-l-[3px] border-t-[1px] border-b-[1px] border-r-[1px]  border-[#2879FD] rounded-[4px]">
                        <h2 class="font-Montserrat text-[18px] font-normal text-[#6E717C] text-left">TOTAL OUTSTANDING
                        </h2>
                        <h2 class="font-Montserrat text-[35px] font-normal text-[#000000] text-left">4,280,000</h2>

                    </button>
                </div>

                <!--  -->
                <div class="flex mt-4 justify-between items-center w-full m-auto">
                    <button
                        class="w-full p-4 lg:w-[286px] h-[148px] flex justify-center items-center flex-col border-l-[3px] border-t-[1px] border-b-[1px] border-r-[1px]  border-[#2879FD] rounded-[4px]"
                        @click="handleisnewApplication">
                        <h2 class="font-Montserrat text-[18px] font-normal text-[#6E717C] text-left">NEW APPLICATIONS
                        </h2>
                        <h2 class="font-Montserrat text-[35px] font-normal text-[#000000] text-left">8</h2>

                    </button>
                    <button
                        class="w-full p-4 lg:w-[286px] h-[148px] flex justify-center items-center flex-col border-l-[3px] border-t-[1px] border-b-[1px] border-r-[1px]  border-[#2879FD] rounded-[4px]">
                        <h2 class="font-Montserrat text-[18px] font-normal text-[#6E717C] text-left">ONGOING LOANS</h2>
                        <h2 class="font-Montserrat text-[35px] font-normal text-[#000000] text-left">16</h2>

                    </button>
                    <button
                        class="w-full p-4 lg:w-[286px] h-[148px] flex justify-center items-center flex-col border-l-[3px] border-t-[1px] border-b-[1px] border-r-[1px]  border-[#2879FD] rounded-[4px]">
                        <h2 class="font-Montserrat text-[18px] font-normal text-[#6E717C] text-left">COMPLETED LOANS
                        </h2>
                        <h2 class="font-Montserrat text-[35px] font-normal text-[#000000] text-left">4</h2>

                    </button>
                </div>
                <div class="flex mt-4 justify-between items-center w-full m-auto">
                    <button
                        class="w-full p-4 lg:w-[286px] h-[148px] flex justify-center items-center flex-col border-l-[3px] border-t-[1px] border-b-[1px] border-r-[1px]  border-[#2879FD] rounded-[4px]"
                        @click="handleisdeliquencies">
                        <h2 class="font-Montserrat text-[18px] font-normal text-[#6E717C] text-left">DELINQUENCIES </h2>
                        <h2 class="font-Montserrat text-[35px] font-normal text-[#000000] text-left">0</h2>

                    </button>
                </div>
            </div>

            <div v-if="isloanout" class="flex justify-end flex-col lg:w-[90%] m-auto items-end w-full">
                <div class="w-full border-[2px] border-[#ddd] rounded-lg p-4">
                    <h2>TOTAL LOANS OUT</h2>
                    <div class="w-full mt-4">
                        <table class="min-w-full bg-white">
                            <thead class="bg-[#2879FD] rounded-lg">
                                <tr class="rounded-lg">
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        FULL NAME</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DATE</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        LOAN AMOUNT </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        INTEREST RATE</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DURATION </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        REPAYMENTS </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        TOTAL </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DELINQUENT? </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index" class="bg-white">
                                    <td
                                        class="px-6 flex justify-start items-center gap-3 py-4 text-sm leading-5 text-gray-900">
                                        <img :src="avatar" alt="">
                                        <p>{{
                                            user.name }}</p>
                                    </td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.date }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.amount }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.interest }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.duration }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.rapayment }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.total }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.deliquent }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div v-if="repaymentHistory" class="flex justify-end flex-col lg:w-[90%] m-auto items-end w-full">
                <div class="w-full border-[2px] border-[#ddd] rounded-lg p-4">
                    <h2>REPAYMENT HISTORY</h2>
                    <div class="w-full mt-4">
                        <table class="min-w-full bg-white">
                            <thead class="bg-[#2879FD] rounded-lg">
                                <tr class="rounded-lg">
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        FULL NAME</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        AMOUNT </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        BANK</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        NUMBER </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DATE</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        BALANCE </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DELINQUENT? </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in repayments" :key="index" class="bg-white">
                                    <td
                                        class="px-6 flex justify-start items-center gap-3 py-4 text-sm leading-5 text-gray-900">
                                        <img :src="avatar" alt="">
                                        <p>{{
                                            item.name }}</p>
                                    </td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        item.amount }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        item.bank }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        item.number }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        item.date }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        item.balance }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        item.deliquent }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div v-if="isnewApplication" class="flex justify-end flex-col lg:w-[90%] m-auto items-end w-full">
                <div class="w-full border-[2px] border-[#ddd] rounded-lg p-4">
                    <h2>NEW APPLICATIONS</h2>
                    <div class="w-full mt-4">
                        <table class="min-w-full bg-white">
                            <thead class="bg-[#2879FD] rounded-lg">
                                <tr class="rounded-lg">
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        FULL NAME</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DATE</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        LOAN AMOUNT </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        INTEREST RATE</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DURATION </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        REPAYMENTS </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        TOTAL </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        ACTION </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in application" :key="index" class="bg-white">
                                    <td
                                        class="px-6 flex justify-start items-center gap-3 py-4 text-sm leading-5 text-gray-900">
                                        <img :src="avatar" alt="">
                                        <p>{{
                                            user.name }}</p>
                                    </td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.date }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.amount }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.interest }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.duration }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.rapayment }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">
                                        <div>
                                            <select name="interest" id="interest"
                                                class="outline-none bg-white p-[6px] text-[16px] font-semibold font-Montserrat">
                                                <option value="" disabled selected>{{
                                                    user.bank }}</option>
                                                <option value="1">Zenith</option>
                                                <option value="2">Opay</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">
                                        <div>
                                            <select name="interest" id="interest"
                                                class="outline-none bg-white border-[2px] rounded-lg border-[#ddd] p-[6px] text-[16px] font-semibold font-Montserrat">
                                                <option value="" disabled selected>Approve</option>
                                                <option value="1">Approve</option>
                                                <option value="2">Cancel</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div v-if="isdeliquencies" class="flex justify-end flex-col lg:w-[90%] m-auto items-end w-full">
                <div class="w-full border-[2px] border-[#ddd] rounded-lg p-4">
                    <h2>DELINQUENCIES </h2>
                    <div class="w-full mt-4">
                        <table class="min-w-full bg-white">
                            <thead class="bg-[#2879FD] rounded-lg">
                                <tr class="rounded-lg">
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        FULL NAME</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DATE</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        LOAN AMOUNT </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        INTEREST RATE</th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        DURATION </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        REPAYMENTS </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        TOTAL </th>
                                    <th
                                        class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-[#fff] tracking-wider">
                                        ACTION </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in application" :key="index" class="bg-white">
                                    <td
                                        class="px-6 flex justify-start items-center gap-3 py-4 text-sm leading-5 text-gray-900">
                                        <img :src="avatar" alt="">
                                        <p>{{
                                            user.name }}</p>
                                    </td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.date }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.amount }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.interest }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.duration }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">{{
                                        user.rapayment }}</td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">
                                        <div>
                                            <select name="interest" id="interest"
                                                class="outline-none bg-white p-[6px] text-[16px] font-semibold font-Montserrat">
                                                <option value="" disabled selected>{{
                                                    user.bank }}</option>
                                                <option value="1">Zenith</option>
                                                <option value="2">Opay</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4  text-sm leading-5 text-gray-900">
                                        <div>
                                            <select name="interest" id="interest"
                                                class="outline-none bg-white border-[2px] rounded-lg border-[#ddd] p-[6px] text-[16px] font-semibold font-Montserrat">
                                                <option value="" disabled selected>Approve</option>
                                                <option value="1">Approve</option>
                                                <option value="2">Cancel</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" v-if="isSidebarOpen" @click="toggleSidebar">
        </div>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue';
import AdminSidebar from '../components/ui/sidebar/AdminSidebar.vue';
import { avatar } from '../assets'

const ishomecards = ref(true);
const isloanout = ref(false);
const repaymentHistory = ref(false);
const isnewApplication = ref(false);
const isdeliquencies = ref(false);

const users = ref([
    { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", total: "55,000", deliquent: "No" },
    { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", total: "55,000", deliquent: "No" },
    { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", total: "55,000", deliquent: "No" },
]);
const application = ref([
    { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", bank: "GTbank" },
    { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", bank: "GTbank" },
    { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", bank: "GTbank" },
]);

const repayments = ref([
    { name: "John Doe", date: "1/2/2024", amount: "2000", bank: "GT Bank", number: "71371828168", balance: "20000", deliquent: "Nil" },
    { name: "John Doe", date: "1/2/2024", amount: "2000", bank: "GT Bank", number: "71371828168", balance: "20000", deliquent: "Nil" },
    { name: "John Doe", date: "1/2/2024", amount: "2000", bank: "GT Bank", number: "71371828168", balance: "20000", deliquent: "Nil" },
]);

function handleLoanOut() {
    ishomecards.value = false;
    isloanout.value = true;
}

function handleRepaymentHis() {
    ishomecards.value = false;
    isloanout.value = false;
    repaymentHistory.value = true;
}

function handleisnewApplication() {
    ishomecards.value = false;
    isloanout.value = false;
    repaymentHistory.value = false;
    isnewApplication.value = true;
}
function handleisdeliquencies() {
    ishomecards.value = false;
    isloanout.value = false;
    repaymentHistory.value = false;
    isnewApplication.value = false;
    isdeliquencies.value = true;
}
function handleBack() {
    ishomecards.value = true;
    isloanout.value = false;
    repaymentHistory.value = false;
    isnewApplication.value = false;
    isdeliquencies.value = false;
}

</script>

<style scoped></style>