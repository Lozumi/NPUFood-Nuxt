<template>
    <v-dialog v-model="loginDialog" persistent max-width="600px">
        <v-card>
            <v-app-bar color="blue darken-2" dark>
                <v-toolbar-title>登录</v-toolbar-title>
            </v-app-bar>
            <v-card-text>
                <v-form @submit.prevent="login">
                    <v-text-field
                        v-model="loginForm.email"
                        label="邮箱"
                        required
                        :rules="emailRules"
                    ></v-text-field>
                    <v-text-field
                        v-model="loginForm.password"
                        label="密码"
                        type="password"
                        required
                        :rules="passwordRules"
                    ></v-text-field>
                    <v-card-actions>
                        <v-btn color="primary" @click="closeLoginDialog">取消</v-btn>
                        <v-spacer></v-spacer>
<!--                        <v-btn type="submit" color="primary" @click="showNotImplemented">-->
<!--                            登录-->
<!--                        </v-btn>-->
                        <v-btn color="primary" @click="showNotImplemented">
                            登录
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions style="font-size: 12px">
                <v-btn text color="blue darken-2" @click="showNotImplemented">
                    忘记密码
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text color="blue darken-2" @click="showNotImplemented">
                    注册账号
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: '',
            },
            emailRules: [
                (v) => !!v || '请输入邮箱',
                (v) => /.+@.+\..+/.test(v) || '请输入有效的邮箱地址',
            ],
            passwordRules: [
                (v) => !!v || '请输入密码',
                (v) => (v && v.length >= 8) || '密码长度至少为8位',
            ],
        };
    },
    computed: {
        loginDialog: {
            get() {
                return this.$store.state.loginDialog;
            },
            set(value) {
                this.$store.commit('setLoginDialog', value);
            },
        },
    },
    methods: {
        closeLoginDialog() {
            this.loginDialog = false;
        },
        login() {
            if (this.$refs.form.validate()) {
                console.log('Email:', this.loginForm.email);
                console.log('Password:', this.loginForm.password);
                this.closeLoginDialog();
            }
        },
        showNotImplemented() {
            alert('功能未实现');
        },
    },
};
</script>

<style scoped>
/* 可以在这里添加样式，根据需要进行自定义 */
</style>
