<template>
    <div id="app">
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'App',
    components: {
        Header
    },
    methods: {
        createTitleDesc: routeInstance => {
            if (routeInstance.meta.title)
                document.title = routeInstance.meta.title + ' | Print Tree GUI'
            else
                document.title = 'Print Tree GUI'

            document.querySelector("meta[name='description']").setAttribute('content', '木構造をGUIで表示させるツールです')
        }
    },
    mounted() {
        this.createTitleDesc(this.$route)
    },
    watch: {
        '$route'(routeInstance) {
            this.createTitleDesc(routeInstance)
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
