<template>
  <div id="register">
    <div class="me-login-box me-login-box-radius">
      <h1>注 册</h1>
      <el-form ref="userForm" :model="userForm" :rules="regRules">
        <el-form-item prop="username">
          <el-input v-model="userForm.username" placeholder="邮箱" />
        </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="userForm.name" placeholder="昵称" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userForm.password" placeholder="密码" />
        </el-form-item>
        <el-form-item size="small" class="me-login-button">
          <el-button type="primary" @click.native.prevent="handleregister('userForm')">注册</el-button>
        </el-form-item>
        <el-form-item size="small" class="me-toregorhome-link">
          <el-row>
            <span style="font-size: 1rem; color: dark;">已有账号?   </span>
            <router-link to="/login"><span style="font-size: 1rem; color: #87CEFA;">登录</span></router-link>
          </el-row>
          <el-row>
            <router-link to="/"><span style="font-size: 1rem; color: #87CEFA;">返回首页</span></router-link>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="me-login-design">
        <p>Designed by
          <strong>
            <router-link to="/" class="me-login-design-color">Bohemia</router-link>
          </strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { validEmail } from '@/utils/validate'
import { register } from '@/api/user'
export default {
  name: 'Register',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter the correct user Email'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      userForm: {
        username: '',
        name: '',
        password: ''
      },
      regRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  methods: {
    handleregister(formName) {
      const that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(that.userForm).then(() => {
            that.$message({ message: '提交注册成功，请等待管理员审核', type: 'success', showClose: true })
            that.$router.push({ path: '/' })
          }).catch((error) => {
            if (error !== 'error') {
              that.$message({ message: error, type: 'error', showClose: true })
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  #login {
    min-width: 100%;
    min-height: 100%;
  }

  .me-video-player {
    background-color: transparent;
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
    position: absolute;
    left: 0;
    z-index: 0;
    top: 0;
  }

  .me-login-box {
    position: absolute;
    width: 300px;
    height: 330px;
    background-color: white;
    margin-top: 150px;
    margin-left: -180px;
    left: 50%;
    padding: 30px;
  }

  .me-login-box-radius {
    border-radius: 20px;
    box-shadow: 0px 30px 30px 10px rgba(0, 0, 0, 0.1);
  }

  .me-login-box h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    vertical-align: middle;
  }

  .me-login-design {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }

  .me-login-design-color {
    color: #5FB878 !important;
  }

  .me-login-button {
    text-align: center;
  }

  .me-toregorhome-link {
    text-align: center;
  }

  .me-login-button button {
    width: 100%;
  }

</style>
