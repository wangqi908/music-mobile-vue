import axios from 'axios'
const instance = axios.create({
  // baseURL: 'https://music-wangqi908.vercel.app',
  // baseURL: 'http://localhost:3000',
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

instance.interceptors.request.use(
  function (config) {
    const sendData = config
    sendData.params.timestamp = +new Date()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

type method = 'GET' | 'POST' | 'DELETE' | 'PUT'
export default function (url: string, params = {}, method: method = 'GET') {
  switch (method) {
    case 'POST':
      return instance.post(url, params)
    case 'GET':
      return instance.get(url, {
        params
      })
    case 'DELETE':
      return instance.delete(url, params)
    case 'PUT':
      return instance.put(url, params)

    default:
      return Promise.reject(new Error('false'))
  }
}
