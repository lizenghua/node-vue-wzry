<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 14:34:28
 * @lastTime: 2019-11-07 17:23:14
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="create">
    <h2 class="title">{{ id ? "编辑" : "新建" }}分类</h2>
    <el-form
      :model="model"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      @submit.native.prevent="save('ruleForm')"
    >
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "create",
  props: {
    id: {}
  },
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
        parent: "",
        name: ""
      },
      parents: [],
      rules: {
        name: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  },
  methods: {
    save(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/categories/${this.id}`, this.model);
          } else {
            await this.$http.post("rest/categories", this.model);
          }
          // 跳转到分类列表页
          this.$router.push("/categories/list");
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
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    async fetchParents() {
      const res = await this.$http.get("rest/categories");
      this.parents = res.data;
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
