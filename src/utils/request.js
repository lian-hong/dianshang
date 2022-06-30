/**
 *
 * https://www.baidu.com
 * https://www.jd.com
 * https://www.taobao.com
 *
 *
 *
 * 引入axios
 * 创建axios实例对象
 * 创建请求和响应拦截
 * 处理git请求方式 依旧可以使用data方式传参 统一传参方式
 * 全局loading加载
 * 处理路由切换接口相同(重复)请求
 * 到处axios实例对象
 */

// 导入axios
import axios from 'axios'

import md5 from 'md5'

import loading from './loading'

import { ElMessage } from 'element-plus'

// 配置请求的基准URL地址,创建实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// axios设置请求拦截器,设置响应头token
service.interceptors.request.use(
  (config) => {
    // 每次发送请求之前自动将在session中的token提取出来当做响应头header
    // 打开loading加载
    loading.open()
    // 调用接口要传的参数
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    // TODO 将token通过请求头发送给后台
    return config
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)

// axios设置响应拦截器
service.interceptors.response.use(
  (response) => {
    // 关闭loading加载
    loading.close()
    const { success, data, message } = response.data
    // TODO 全局响应处理
    if (success) {
      return data
    } else {
      _showError(message)
      return Promise.reject(new Error(message))
    }
    // TODO token过期状态
    // return response // 拦截处理响应结果，直接返回需要的数据
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    // 响应失败进行信息提示
    _showError(error.message)
    return Promise.reject(error)
  }
)

// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}
// 统一传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

// 获取icode
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

// 导出axios实力对象

export default request
