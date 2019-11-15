/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-14 17:28:09
 * @lastTime: 2019-11-15 20:17:17
 * @LastAuthor: lzh
 */
import axios from "axios";
const BASE_URL = process.env.VUE_APP_API_URL || "/web/api";

const http = axios.create({
  baseURL: BASE_URL
});

export default http;
