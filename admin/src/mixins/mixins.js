/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-07 16:06:17
 * @lastTime: 2019-11-07 16:13:50
 * @LastAuthor: Do not edit
 */
export default {
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + "/upload";
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ""}`
      };
    }
  }
};
