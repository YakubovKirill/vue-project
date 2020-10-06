<template>
    <div id="block-list">
        <ul>
            <SomeItem 
                v-for="element in dataArr"
                v-bind:key="element.id"
                v-bind:element="element"
            />
            <!--<li class="block"><SomeItem /></li>
            <li class="block"><SomeItem /></li>
            <li class="block"><SomeItem /></li>
            <li class="block"><SomeItem /></li>
            <li class="block"><SomeItem /></li>-->
        </ul>
    </div>
</template>

<script>
import SomeItem from '@/components/SomeItem'
export default {
    props:['dataArr'],
    components: {
        SomeItem
    }
}
</script>

<style lang="scss">
#block-list {
    position: relative;
    display: flex;
    width: 100%;
    height: 300px;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
        display: flex;
        width: min-content;
        height: 100%;
    }
}
</style>