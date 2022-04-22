import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    age:18,
    name:'state的值',
    list:[1,2,3,4,5,6,7,8,9,10]
  },
  mutations: {
    //直接修改count的值
    addcounts(state){
      state.count += 1
    },
    //通过传参的方式，playload为载荷，也就是所谓的形参
    addCount(state,playload) {
      state.count += playload
    }
  },
  actions: {
    //直接带参修改
    getAsncycount(context){
      setTimeout(() => {
          context.commit('addCount',123)
      }, 1000);
    },

    //传值修改
    getAsncycount1(context,param){
      setTimeout(() => {
        context.commit('addCount',param)
      }, 1000);
    }
  },
  getters:{
    fliterList:state => state.list.filter(item => item > 5),
    token:state => state.user.token,
    name:state => state.setting.name
  },
  modules: {
    user:{
      namespaced:true,
      state:{
        token:'123'
      },
      mutations:{
        updateToken(state){
          state.token = '123456789'
        }
      }
    },
    setting:{
      state:{
        name:'vue实列'
      }
    }
  }
})
