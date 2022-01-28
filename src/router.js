import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/how_to_use',
            name: 'how_to_use',
            component: () => import('./views/HowToUse.vue'),
            meta: {title: 'How To Use'}
        },
        {
            path: '/generator',
            name: 'generator',
            component: () => import('./views/Generator.vue'),
            meta: {title: 'Generator'}
        }
    ]
})
