<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-06 15:22:44
 * @lastTime: 2019-11-07 17:32:57
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="create">
    <h2 class="title">{{ id ? "编辑" : "新建" }}文章</h2>
    <el-form
      :model="model"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      @submit.native.prevent="save('ruleForm')"
    >
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor
          v-model="model.body"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "create",
  components: {
    VueEditor
  },
  props: {
    id: {}
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入标题"));
      } else {
        callback();
      }
    };
    return {
      model: {
        title: ""
      },
      categories: [],
      rules: {
        title: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  },
  methods: {
    async save(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/articles/${this.id}`, this.model);
          } else {
            await this.$http.post("rest/articles", this.model);
          }
          // 跳转到分类列表页
          this.$router.push("/articles/list");
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
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCategories() {
      const res = await this.$http.get("rest/categories");
      this.categories = res.data;
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
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
</style>
