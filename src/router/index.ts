import { createRouter, createWebHistory } from 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        title: string;
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/views/Search.vue'),
        },
        {
            path: '/friends',
            name: 'friends',
            component: () => import('@/views/Friends.vue'),
        },
        {
            path: '/setting',
            name: 'setting',
            component: () => import('@/views/Setting.vue'),
        }
    ],
});

export default router;
