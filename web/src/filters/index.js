/*
 * @message: 全局过滤器
 * @Author: lzh
 * @since: 2019-11-15 11:00:55
 * @lastTime: 2019-11-15 14:34:07
 * @LastAuthor: lzh
 */
import dayjs from "dayjs";
let dateFilter = val => {
  return dayjs(val).format("YYYY-MM-DD");
};
export { dateFilter };
