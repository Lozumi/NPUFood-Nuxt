<template>
    <v-app>

        <v-app-bar color="#3A8FB7" app absolute elevate-on-scroll>
            <v-btn to="/" icon class="mx-2">

                    <img
                        src="../static/MdiFood.svg"
                        alt="NPU Food"
                        style="width: 25px; height: 25px"
                    >

            </v-btn>

            <v-toolbar-title class="white--text text-center"><strong>工大美食</strong></v-toolbar-title>
            <v-spacer/>

            <v-badge color="pink" :content="cartItemsCount" :value="cartItemsCount" overlap>
                <v-btn to="/cart" icon>
                    <v-icon>shopping_cart</v-icon>
                </v-btn>
            </v-badge>
            <v-btn v-if="!$vuetify.theme.isDark" @click="changeTheme()" icon class="mx-2">
                <v-icon>brightness_2</v-icon>
            </v-btn>

            <v-btn v-if="$vuetify.theme.isDark" @click="changeTheme()" icon class="mx-2">
                <v-icon>wb_sunny</v-icon>
            </v-btn>

        </v-app-bar>

        <v-main class="bg-fixed" style="background-image: url('/chef.svg')">
            <v-container>
                <nuxt/>
            </v-container>
        </v-main>
        <v-footer dark padless>
            <v-card color="#3A8FB7" flat class="w-full white--text text-center">
<!--                <v-card-text>-->
<!--                    <v-btn v-for="platform in socialIcons" :key="platform.icon"-->
<!--                           class="mx-4 white&#45;&#45;text" icon-->
<!--                           :href="platform.url" rel="noopener"-->
<!--                    >-->
<!--                        <v-icon size="24px">{{ platform.icon }}</v-icon>-->
<!--                    </v-btn>-->
<!--                </v-card-text>-->

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>工大美食</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    data() {
        return {
            socialIcons: [
                {icon: 'mdi-twitter', url: '#'},
                {icon: 'mdi-linkedin', url: '#'},
                {icon: 'mdi-instagram', url: '#'},
                {icon: 'mdi-email', url: '#'},
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
        }
    }
}
</script>
