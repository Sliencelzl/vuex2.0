<template>
  <div id="app">
    <div id="nav">
      直接获取store中state的数据：{{$store.state.count}}<br/>
      通过计算属性获取state状态：{{count}}<br/>
      通过mapState的值：{{count}},{{age}},{{name}}<br/>
      <button @click="countFn()">mutation原始修改count</button><br/>
      <button @click="countFn1()">nutatiom传参式修改count</button><br/>
      <button @click="addCount(100)">nutatiom mapMutations修改count</button><br/>
      <button @click="addCounts()">action异步修改count</button><br/>
      <button @click="addCountss()">action带参异步修改count</button><br/>
      <button @click="getAsncycount1(666)">action的mapactions带参异步修改count</button><br/>
      使用原始的getters获取数据<div>{{$store.getters.fliterList}}</div>
      使用mapGetters获取数据<div>{{ fliterList }}</div><br/>
      {{token}}-----{{name}}<br/>
      <button @click="updateToken()">带命名空间的情况下修改user中的token</button><br/>
      <button @click="updateToken1()">带命名空间的情况下修改user中的token</button>
    </div>
    <child/>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapState,mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import child from './views/child.vue';
export default {
  components: { child },
  //计算属性获取state
    computed:{
      cmp(){
         return this.$store.state.count
      },
    //通过内置的方法获取state 可以是数组
      ...mapState(['count','age','name']),
      //通过getters的内置方法获取list
      ...mapGetters(['fliterList']),
      ...mapGetters(['token','name'])
  },
  methods:{
    //直接通过mutations来修改state获取值
    countFn(){
      this.$store.commit("addcounts")
    },
    //通过mutation传参来修改state里面的值
    countFn1(){
      this.$store.commit("addCount",10)  
    },
    //通过内置方法获取mutation中的所有方法也就是数组
    ...mapMutations(['addcounts','addCount']),
    //通过actions异步修改state中的count
    addCounts(){
      this.$store.dispatch('getAsncycount')
    },
    //通过带参改变state中的值
    addCountss(){
      this.$store.dispatch('getAsncycount1',456)
    },
    //通过action的mapactions修改state的数据
    ...mapActions(['getAsncycount1']),

    //带有命名空间的模块去修改user中的token(原始方式)
    updateToken(){
      this.$store.commit('user/updateToken')
    },
    //使用辅助函数的方式修改user中的token
    ...mapMutations(['user/updateToken']),
    updateToken1(){
      this['user/updateToken']()
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
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
