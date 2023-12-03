<template>
    <v-app>
        <v-app-bar color="#3A8FB7" app absolute elevate-on-scroll>
            <img src="../static/npu-logo.png" alt="NPU"  class="ml-2" style="width: 24px; height: 24px">
            <v-toolbar-title class="white--text text-center mx-2"><strong>工大美食</strong></v-toolbar-title>
            <img class="mr-2" src="../static/MdiFood.svg" alt="NPU Food" style="width: 24px; height: 24px">
            <v-spacer/>
            <v-btn to="/" icon class="mx-2">
                <v-icon>home</v-icon>
            </v-btn>
            <v-badge color="pink" :content="cartItemsCount" :value="cartItemsCount" overlap>
                <v-btn to="/cart" icon class="">
                    <v-icon>shopping_cart</v-icon>
                </v-btn>
            </v-badge>
            <v-btn class="" icon @click="openLoginDialog">
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            <v-btn v-if="!$vuetify.theme.isDark" @click="changeTheme()" icon class="mr-2">
                <v-icon>brightness_2</v-icon>
            </v-btn>
            <v-btn v-if="$vuetify.theme.isDark" @click="changeTheme()" icon class="mr-2">
                <v-icon>wb_sunny</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main class="bg-fixed" style="background-image: url('/npu-motto.png'); background-size: 40%; background-position: left top;">
            <v-container>
                <nuxt/>
            </v-container>
        </v-main>


        <v-footer dark padless>
            <v-card color="#3A8FB7" flat class="w-full white--text text-center">
                <v-card-text>
                    <v-btn v-for="platform in socialIcons" :key="platform.icon"
                           class="mx-4 white--text" icon
                           :href="platform.url" rel="noopener"
                    >
                        <v-icon size="24px">{{ platform.icon }}</v-icon>
                    </v-btn>
                </v-card-text>
<!--                <v-card-text class="white&#45;&#45;text">-->
<!--                    {{ new Date().getFullYear() }} — <strong>工大美食</strong>-->
<!--                </v-card-text>-->
                <v-card-text class="white--text">
                    西北工业大学 软件工程导论课程（2023-2024秋）大作业
                    <br >
                    Dobug小组作品
                </v-card-text>

            </v-card>
        </v-footer>

        <!-- 登录弹窗 -->
        <LoginDialog />
    </v-app>
</template>

<script>
import LoginDialog from '~/components/LoginDialog.vue';
import { mapMutations } from 'vuex';

export default {
    components: {
        LoginDialog,
    },
    data() {
        return {
            socialIcons: [
                { icon: 'mdi-qqchat', url: '#' },
                { icon: 'mdi-wechat', url: '#' },
                { icon: 'mdi-sina-weibo', url: '#' },
                { icon: 'mdi-github', url: 'https://www.github.com/Lozumi/NPUFood-Nuxt' },
            ],
        }
    },
    computed: {
        cartItemsCount() {
            return this.$store.state.cart.cartProducts.length;
        }
    },
    methods: {
        changeTheme() {
            if (!this.$vuetify) return
            this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
        },
        openLoginDialog() {
            this.$store.commit('setLoginDialog', true);
        }
    }
}
</script>
