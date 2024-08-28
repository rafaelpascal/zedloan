<template>
    <div class="relative flex w-full h-[100vh]">
        <!-- <div class="absolute h-full sm:z-10 lg:w-[20%] w-full">
            <Sidebar class="bg-black h-full" />
        </div> -->
        <div :class="[
            'absolute z-20 h-[100%] bg-black transition-all duration-300',
            isSidebarOpen ? 'w-[70%] lg:w-[0px] flex' : 'lg:w-[304px] lg:flex hidden'
        ]">
            <Sidebar />
        </div>
        <div class="flex-1 h-[100%] pt-[2%] w-full lg:w-[80%] px-2 lg:ml-[314px] z-0">
            <button class="lg:hidden sticky bg-white w-full top-0 left-0 p-4 text-black z-20" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button>
            <div v-if="formActive === true" class="flex justify-center items-center">
                <div
                    class="w-full lg:w-[541px] flex flex-col px-2 justify-center items-center rounded-[12px] border-[1px] border-[#8F8F8F] h-[751px]">
                    <div class="h-[731px] px-6 w-full overflow-y-auto">
                        <div class="relative mb-8 mt-[20px] border-[1px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <p
                                class="absolute top-[-18px] flex justify-center font-Montserrat text-[18px] items-center left-6 rounded-[12px] w-[140px] py-[4px] bg-[#ECF3FF]">
                                Loan title</p>
                            <input type="text" v-model="loanTitle" placeholder="Loan Title"
                                class="h-full rounded-[12px] px-4 outline-none w-full">
                        </div>
                        <div class="relative my-4 border-[1px] border-[#2879FD] w-full h-[100px] rounded-[12px]">
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
                                    <h1 class="font-Montserrat font-normal text-[14px] text-[#2879FD]">N6,000/month</h1>
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
                                    <h1 class="font-Montserrat font-normal text-[14px] text-[#2879FD]">Total: N126,000
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
                        <div class="w-full flex justify-center">
                            <button @click="handleformSubmit"
                                class="w-full  h-[50px] bg-blue-500 my-4 rounded-[12px] text-white font-bold">CREATE
                                LOAN OFFER</button>

                        </div>
                    </div>
                </div>
            </div>,

            <!-- Laon Review -->
            <div v-if="formsubmitted === true" class="flex justify-center items-center flex-col">
                <form @submit.prevent="handleSubmit"
                    class="w-full lg:w-[541px] rounded-[12px] border-[1px] border-[#8F8F8F] h-[751px]">
                    <div class="h-[731px] px-6 w-full overflow-y-auto">
                        <!-- Progress bar -->
                        <div class="mt-2 flex px-0 justify-between items-center relative mb-10">
                            <div :class="[
                                'flex-1 relative flex flex-col justify-center items-center transition-all duration-300',
                                loanreviewisActive ? 'border-t-4 border-[#2879FD]' : 'border-t-4 border-dotted border-[#ddd]'
                            ]">
                                <div class="absolute top-[-10px] w-[16px] h-[16px] rounded-full bg-[#2879FD]"></div>
                                <h2 class="mt-2 text-[10px] font-bold font-Montserrat w-full text-[#2879FD] text-left">
                                    Loan
                                    Review</h2>
                            </div>
                            <div
                                class="flex-1 flex flex-col justify-center items-center relative  border-t-4 border-dotted border-[#ddd] ">
                                <div class="w-[16px] absolute top-[-10px] h-[16px] rounded-full bg-[#2879FD]"></div>
                                <h2
                                    class="mt-2 text-[10px] font-bold font-Montserrat w-full text-[#2879FD] text-center">
                                    Add BVN/accounts</h2>
                            </div>
                            <div
                                class="flex-1 flex flex-col justify-center items-center relative border-t-4 border-dotted border-[#ddd]">
                                <div class="w-[16px] absolute top-[-10px] h-[16px] rounded-full bg-[#2879FD]"></div>
                                <h2 class="mt-2 text-[10px] font-bold font-Montserrat w-full text-[#2879FD] text-right">
                                    Mark complete</h2>
                            </div>
                        </div>

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

            <!-- Accounts -->
            <div v-if="account === true" class="flex justify-center items-center flex-col">
                <form @submit.prevent="handleSubmit"
                    class="w-full lg:w-[541px] rounded-[12px] border-[1px] border-[#8F8F8F] h-[751px]">
                    <div class="h-[731px] px-6 w-full overflow-y-auto">
                        <!-- Progress bar -->
                        <div class="mt-2 flex px-0 justify-between items-center relative mb-10">
                            <div
                                class="flex-1 relative flex flex-col justify-center items-center transition-all duration-300 border-t-4 border-[#2879FD]">
                                <div class="absolute top-[-10px] w-[16px] h-[16px] rounded-full bg-[#2879FD]"></div>
                                <h2 class="mt-2 text-[10px] font-bold font-Montserrat w-full text-[#2879FD] text-left">
                                    Loan
                                    Review</h2>
                            </div>
                            <div :class="[
                                'flex-1 relative flex flex-col justify-center items-center transition-all duration-300',
                                account ? 'border-t-4 border-[#2879FD]' : 'border-t-4 border-dotted border-[#ddd]'
                            ]">
                                <div class="w-[16px] absolute top-[-10px] h-[16px] rounded-full bg-[#2879FD]"></div>
                                <h2
                                    class="mt-2 text-[10px] font-bold font-Montserrat w-full text-[#2879FD] text-center">
                                    Add BVN/accounts</h2>
                            </div>
                            <div
                                class="flex-1 flex flex-col justify-center items-center relative border-t-4 border-dotted border-[#ddd]">
                                <div class="w-[16px] absolute top-[-10px] h-[16px] rounded-full bg-[#2879FD]"></div>
                                <h2 class="mt-2 text-[10px] font-bold font-Montserrat w-full text-[#2879FD] text-right">
                                    Mark complete</h2>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-[#000] font-normal text-[18px] font-Montserrat">
                                ACCOUNTS (3/3)</h2>
                        </div>
                        <div class="my-8 w-full mt-[20px] py-4 rounded-[12px]">
                            <div class="flex justify-between items-center">
                                <div class="flex justify-start items-center">
                                    <span class="font-bold">STEP 1:</span>
                                    <p class="font-Montserrat ml-3 text-[18px] uppercase">
                                        VERIFY YOUR BVN</p>
                                </div>
                                <button class="text-[#2879FD] font-normal text-[18px] font-Montserrat">WHY BVN
                                    ?</button>
                            </div>
                            <input type="text" v-model="loanTitle" placeholder="ADD BVN"
                                class="rounded-[5px] h-[66.11px] border-[1px] border-[#2879FD]  px-4 outline-none w-full">
                            <div class="flex justify-between items-center mt-2">
                                <p class="font-Montserrat text-[18px] uppercase">STEPHEN MICHAEL</p>
                                <button
                                    class="w-full lg:w-[166px] bg-[#0961E3] font-bold text-[16px] font-Montserrat h-[51px] text-[#fff] rounded-[4px]"
                                    @click="handleremoveoverlay">
                                    VERIFY NOW
                                </button>
                            </div>
                        </div>
                        <div class="relative">
                            <!-- Overlay -->
                            <div v-if="showOverlay"
                                class="absolute inset-0 rounded-lg  bg-black bg-opacity-50 z-10 flex justify-center items-center p-4">
                            </div>
                            <div class="relative p-4 z-0">
                                <div class="mt-5">
                                    <div class="flex justify-start w-full items-start">
                                        <span class="font-bold">STEP 2:</span>
                                        <p class="font-Montserrat w-[80%] ml-3 text-[18px] uppercase">
                                            CONNECT YOUR ACCOUNTS
                                            FOR REPAYMENT</p>
                                    </div>
                                    <p class="font-Montserrat text-[12px] font-normal">This account will be
                                        automatically
                                        debited to repay your loan as per schedule. <span class="font-bold">Only use
                                            account that has consistent inflow.</span> </p>
                                    <div
                                        class="w-full my-3 flex justify-between items-center h-[66.11px] px-6 bg-[#2879FD] rounded-[12px]">
                                        <div class="flex justify-start items-start gap-2">
                                            <p class="font-Montserrat text-[#fff] text-[18px] font-bold uppercase">
                                                Zenith Bank</p>
                                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h2 class="font-Montserrat text-[#fff] text-[18px] font-normal uppercase">1/3
                                        </h2>
                                    </div>
                                    <button
                                        class="w-full my-3 flex justify-between items-center h-[66.11px] px-6 bg-[#ECF3FF] rounded-[12px]"
                                        @click="handlenewAccount">
                                        <div class="flex justify-start items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="2" stroke="currentColor" class="w-6 h-6 text-[#000]">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            <p class="font-Montserrat text-[#000] text-[18px] font-bold uppercase">
                                                Add bank</p>
                                        </div>
                                        <h2 class="font-Montserrat text-[#8F8F8F] text-[18px] font-normal uppercase">2/3
                                        </h2>
                                    </button>
                                    <button
                                        class="w-full my-3 flex justify-between items-center h-[66.11px] px-6 bg-[#ECF3FF] rounded-[12px]"
                                        @click="handlenewAccount">
                                        <div class="flex justify-start items-start gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="2" stroke="currentColor" class="w-6 h-6 text-[#000]">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            <p class="font-Montserrat text-[#000] text-[18px] font-bold uppercase">
                                                Add bank</p>
                                        </div>
                                        <h2 class="font-Montserrat text-[#8F8F8F] text-[18px] font-normal uppercase">3/3
                                        </h2>
                                    </button>
                                </div>
                                <p class="text-[#EA1515] italic font-normal text-[12px] font-Montserrat">Fin-Tech bank
                                    accounts
                                    such as Opay, MoniePoint, Kuda etc are not
                                    accepted unless they are
                                    business accounts with proof of consistent monthly inflow in the bank statement.</p>

                                <div class="w-full mt-4 rounded-[12px]">
                                    <div class="flex justify-start items-center">
                                        <span class="font-bold">STEP 3:</span>
                                    </div>
                                    <button @click="handleMarkcomplete"
                                        class="w-full my-3  h-[66.11px] px-6 bg-[#2879FD] rounded-[12px]">
                                        <p class="font-Montserrat text-[#DADADA] text-[18px] font-normal uppercase">
                                            MARK COMPLETE</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <!-- New Account -->
            <div v-if="newAccount === true" class="flex justify-center items-center flex-col">
                <form @submit.prevent="handleSubmit"
                    class="w-full lg:w-[541px] rounded-[12px] border-[1px] border-[#8F8F8F] h-[751px]">
                    <div class="h-[731px] px-6 w-full overflow-y-auto">
                        <button class="mb-8 mt-4 flex justify-start items-center gap-3" @click="handleCloseNewAccount">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <p class="text-[#000] font-normal text-[22px] uppercase
                            font-Montserrat">Back</p>
                        </button>
                        <div>
                            <h2 class="text-[#000] font-normal text-[18px] font-Montserrat">
                                REPAYMENT BANK ACCOUNT (3/3)</h2>
                        </div>
                        <div
                            class="mb-2 text-[14px] h-[66.11px] border-[1px] bg-[#ECF5FF] border-[#2879FD] px-4  w-full mt-[20px] py-4 rounded-[12px]">
                            <label for="file-upload"
                                class="flex justify-between items-center text-[14px] mb-2 font-semibold">
                                <input id="file-upload" type="file" accept="application/pdf" placeholder=""
                                    class="outline-none w-full hidden" />
                                <h2 class="pt-1 font-Montserrat text-[#000] text-[14px] font-normal">UPLOAD BANK
                                    STATEMENT
                                    (3-6 months)</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="w-6 h-6 text-[#575A65]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 15a4 4 0 004 4h10a4 4 0 100-8h-1a5 5 0 00-9-3 3 3 0 00-4 7zm7 1V8m0 0l-3 3m3-3l3 3" />
                                </svg>
                            </label>
                        </div>
                        <div class="mb-2 border-[1px] border-[#2879FD] w-full h-[66.11px] rounded-[12px]">
                            <input type="text" v-model="loanTitle" placeholder="ENTER ACCOUNT NUMBER"
                                class="h-full font-Montserrat text-[14px] font-normal rounded-[12px] text-[#000] px-4 outline-none w-full">
                        </div>
                        <div class="relative mb-2 border-[1px] border-[#2879FD] w-full py-4 rounded-[12px]">
                            <div class="flex px-4 h-full py-2 justify-between items-center">
                                <div class="flex h-full px-2 w-full justify-start items-center">
                                    <div class="w-full">
                                        <select v-model="moratorium" name="moratorium" id="moratorium"
                                            class="outline-none w-full text-[20px] font-normal font-Montserrat">
                                            <option value="" class="font-Montserrat text-[#000] text-[14px] font-normal"
                                                disabled selected>SELECT BANK</option>
                                            <option value="1">Opay</option>
                                            <option value="2">Zenith Bank</option>
                                            <option value="3">GtBank</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="mb-2 border-[1px] border-[#2879FD] px-4 flex justify-start items-center w-full h-[66.11px] rounded-[12px]">
                            <h2 class="font-Montserrat text-[#000] text-[18px] font-normal">STEPHEN MICHAEL</h2>
                        </div>
                        <div class="flex mt-6 justify-start items-start gap-4">
                            <input type="checkbox" id="myCheckbox" name="myCheckbox" class="w-4 h-4">
                            <p>I hereby consent to a monthly repayment schedule and authorize Zedla to initiate
                                automatic debits from my account to fulfill my loan obligations, effective upon loan
                                disbursement.</p>
                        </div>
                        <button
                            class="w-full mt-6 lg:w-[238px] bg-[#0961E3] font-semibold text-[15px] font-Montserrat h-[41px] text-[#fff] rounded-[4px]"
                            @click="handleremoveoverlay">
                            ADD REPAYMENT ACCOUNT
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" v-if="isSidebarOpen" @click="toggleSidebar">
        </div>

        <!-- Modal -->
        <createdModal :show="isCreated" @update:show="isCreated = $event">
            <div class="flex flex-col justify-between gap-10 items-center">
                <h2 class="font-bold text-[50px] font-Montserrat text-[#0961E3]">Congratulations!</h2>
                <p class="font-normal text-[20px] font-Montserrat text-[#000] w-full lg:w-[70%] text-center">Your loan
                    application
                    has
                    been sent.
                    Our team will review your details
                    and get back to you in 72 hours or less.</p>

                <button>
                    <p class="underline font-normal text-[20px] font-Montserrat text-[#000] w-full text-center">
                        RETURN TO DASHBOARD</p>
                </button>
            </div>
        </createdModal>
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