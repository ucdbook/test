import { getNavs } from './api'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    menuList: [],
  },
  mutations: {
    getMenuList (state, data) {
      state.getMenuList = data
    }
  },
  actions: {
    // 登录
    getMenuList ({ commit }) {
      return new Promise((resolve, reject) => {
        getNavs().then(res => {
          console.log(222222, res)
          const data = res.data
          commit('getMenuList', data);
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
  }
}
