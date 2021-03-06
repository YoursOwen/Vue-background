import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem("token")
  if(token) {
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export const fetch_Login = params => {
  return axios.post("login",params)
         .then(response => response.data)
         .catch(error => error.response)
}
//在catch方法中通过error.response拿到服务器处理错误的响应
export const fetch_Menus = () => {
  return axios.get("menus")
        .then(response => response.data)
        .catch(error => error.response)
}
