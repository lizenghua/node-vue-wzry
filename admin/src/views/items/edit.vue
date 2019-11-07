<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 20:35:52
 * @lastTime: 2019-11-07 17:39:33
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="create">
    <h2 class="title">{{ id ? "编辑" : "新建" }}物品</h2>
    <el-form
      :model="model"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      @submit.native.prevent="save('ruleForm')"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :headers="getAuthHeaders()"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import myMixins from "@/mixins/mixins.js";
export default {
  name: "create",
  props: {
    id: {}
  },
  mixins: [myMixins],
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入名称"));
      } else {
        callback();
      }
    };
    return {
      model: {
        name: "",
        icon: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  created() {
    this.id && this.fetch();
  },
  methods: {
    async save(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/items/${this.id}`, this.model);
          } else {
            await this.$http.post("rest/items", this.model);
          }
          // 跳转到列表页
          this.$router.push("/items/list");
          this.$message({
            type: "success",
            message: "保存成功"
          });
        } else {
          return false;
        }
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`);
      this.model = res.data;
    },
    handleAvatarSuccess(res) {
      // this.$set(this.model, "icon", res.url);
      this.model.icon = res.url;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
  color: #666;
  margin-bottom: 20px;
  padding: 10px 0;
}
::v-deep .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
