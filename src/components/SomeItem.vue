<template>
    <div class="block">
        <span> {{element.data}} </span>
    </div>
</template>

<script>
    export default {
        props: ['element']
    }
</script>

<style lang="scss">
    .block {
        display: flex;
        width: 200px;
        height: 100%;
        background-color: royalblue;
        margin-left: 1%;
    }
</style>