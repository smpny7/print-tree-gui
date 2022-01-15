<template>
    <div class="p-4">
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div class="flex-1 px-2 mx-2">
                <div class="text-lg font-bold">
                    <h1 class="inline">Print Tree GUI</h1>
                    <span class="badge ml-2">ver {{ version }}</span>
                </div>
            </div>

            <div class="flex-none hidden px-2 mx-2 md:flex">
                <div class="flex items-stretch">
                    <Nav/>
                </div>
            </div>

            <div class="flex-none md:hidden">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" class="btn btn-ghost rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                    <div class="p-2 shadow menu dropdown-content bg-neutral rounded-box w-52">
                        <Nav/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav';
const p = require('/package.json');

export default {
    name: 'Header',
    components: {
        Nav
    },
    data() {
        return {
            version: p.version
        }
    }
}
</script>

<style scoped>

</style>
