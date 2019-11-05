/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 14:48:40
 * @lastTime: 2019-11-05 14:50:17
 * @LastAuthor: Do not edit
 */
import axios from "axios";
const BASE_URL = "http://localhost:3000/admin/api";

const http = axios.create({
  baseURL: BASE_URL
});

export default http;
