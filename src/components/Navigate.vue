<template>
    <div class="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="lint">Linter</router-link>
        <router-link to="about">About</router-link>
    </div>
</template>

<script>
    export default {
    name: 'Navigate',
    }
</script>

<style lang="scss">
    .navigation {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            margin: 2%;
        }
    }
</style>