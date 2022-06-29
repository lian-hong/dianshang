import UserApi from '../../api/user'

export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      console.log(response)
    }
  }
}

/**
 *
 * 将token存储到vuex
 * 将token存储到本地
 * 浏览器刷新vuex数据丢失问题
 *
 * 本地存储方法进行封装
 *
 * 全局响应处理
 *
 * 登录鉴权(页面鉴权)
 *
 * 创建主页路由以及主页组件
 *
 * 实现主页布局
 */
