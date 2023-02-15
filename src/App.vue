<template>
    <div class="index">
        <header class="header">
            <navbar></navbar>
        </header>

        <main class="main">
            <router-view />
        </main>

        <footer class="footer">
            <tabbar></tabbar>
        </footer>
    </div>
</template>

<script setup lang="ts">
import navbar from '@/components/Nav-Bar/index.vue';
import tabbar from '@/components/Tab-Bar/index.vue';
</script>

<style scoped lang="less">
.index {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.header {
    height: 46px;
}
.main {
    flex-grow: 1;
}
.footer {
    height: 50px;
}
</style>
