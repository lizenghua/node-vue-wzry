/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 14:48:40
 * @lastTime: 2019-11-15 19:44:26
 * @LastAuthor: lzh
 */
import axios from "axios";
import Vue from "vue";
import router from "../router/index";
const BASE_URL = process.env.VUE_APP_API_URL || "/admin/api"; // 使用环境变量

const http = axios.create({
  baseURL: BASE_URL
});

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.data.message) {
      Vue.prototype.$message({
        type: "error",
        message: error.response.data.message
      });
    }
    if (error.response.status === 401) {
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

http.interceptors.request.use(
  config => {
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
