<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">
        <div>
          <img
            src="https://www.news-age.tw/images/logo.svg"
            class="img-fluid"
            width="200"
          />
        </div>
        <p style="color: #333">新一代媒體後台管理系統</p>
      </div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="帳號...">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密碼..."
            v-model="param.password"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登錄</el-button>
        </div>
        <!-- <p class="login-tips">Tips : 用戶名和密碼隨便填。</p> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const router = useRouter();
    const param = reactive({});

    const rules = {
      username: [
        {
          required: true,
          message: "請輸入用戶名",
          trigger: "blur",
        },
      ],
      password: [{ required: true, message: "請輸入密碼", trigger: "blur" }],
    };
    const login = ref(null);
    const submitForm = () => {
      login.value.validate((valid) => {
        if (param.username == "admin" && param.password === "newsage2022" ||  param.username == "newsage" && param.password == "newsage2022" ) {
          ElMessage.success("登錄成功");
          localStorage.setItem("ms_username", param.username);
          router.push("/");
        } else {
          ElMessage.error("登錄失敗");
          return false;
        }
      });
    };

    const store = useStore();
    store.commit("clearTags");

    return {
      param,
      rules,
      login,
      submitForm,
    };
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_960_720.jpg);
  background-size: cover;
  background-position: center right;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>