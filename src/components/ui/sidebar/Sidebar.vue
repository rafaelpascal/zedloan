<template>
    <div class="bg-black relative w-full flex justify-center items-center gap-2 flex-col">
        <router-link to="/"
            class="text-white font-Montserrat uppercase text-[22px] text-left pl-14 py-4 w-full font-semibold"
            active-class="active-link" exact-active-class="exact-active-link">Home</router-link>
        <router-link to="/profile"
            class="text-white font-Montserrat uppercase text-[22px] text-left pl-14 py-4 w-full  font-semibold"
            active-class="active-link" exact-active-class="exact-active-link">Profile</router-link>
        <router-link to="/offers"
            class="text-white font-Montserrat uppercase text-[22px] text-left pl-14 py-4 w-full  font-semibold"
            active-class="active-link" exact-active-class="exact-active-link">Loan Offers</router-link>
        <router-link to="/accounts"
            class="text-white font-Montserrat uppercase text-[22px] text-left pl-14 py-4 w-full  font-semibold"
            active-class="active-link" exact-active-class="exact-active-link">accounts</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
    color: blue;
}

.active-link {
    background-color: rgba(255, 255, 255, 0.2);
    color: #2879FD;
    width: 100%;
}

.exact-active-link {
    font-weight: bold;
}
</style>