/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-14 17:28:09
 * @lastTime: 2019-11-14 17:28:46
 * @LastAuthor: lzh
 */
import axios from "axios";
const BASE_URL = "http://localhost:3000/web/api";

const http = axios.create({
  baseURL: BASE_URL
});

export default http;
