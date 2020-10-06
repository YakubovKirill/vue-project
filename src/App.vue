<template>
  <div class="wr">
    <div id="nav">
      <h1>This is a pan</h1>
      <h2>Hey</h2>
      <Navigate />
    </div>
    <SomeList v-bind:dataArr='dataArr'/>
    
    <router-view/>
  </div>
</template>

<script>
  import SomeList from '@/components/SomeList'
  import Navigate from '@/components/Navigate'

  export default {
    name: 'app',
    components: {
      SomeList,
      Navigate
    },
    data () {
      return {
        dataArr: [
          {id:1, data: "Field1"},
          {id:2, data: "Field2"},
          {id:3, data: "Field3"},
          {id:4, data: "Field4"}
        ]
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
