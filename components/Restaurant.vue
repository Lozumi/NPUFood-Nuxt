<template>
    <div class="px-2">
        <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-md font-semibold text-green-700 mr-2">{{ restaurantTag }}</span>
        <div class="flex flex-wrap justify-start items-center -mx-4">
            <div v-for="food in foods" :key="food.id" class="w-full md:w-1/3 px-2">
                <v-card :loading="loading" class="mx-auto my-3">
                    <v-img height="100" :src="food.image"></v-img>

                    <v-card-title>
                        {{ food.text }}
                        <v-spacer></v-spacer>
                        <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">$ {{ food.price }}</span>
                    </v-card-title>

                    <v-card-text>
                        <div>{{ food.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="green lighten-2" text @click="addItemToCart(food)">
                            加入购物车
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <v-snackbar v-model="snackbar" :timeout="2000">
            {{ snacktext }}
            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    关闭
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        foods: {
            type: Array,
            required: true,
        },
        restaurantTag: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
            snackbar: false,
            snacktext: '',
        };
    },
    computed: {
        tagClass() {
            return `inline-block bg-${this.restaurantTag.toLowerCase()}-200 rounded-full px-3 py-1 text-md font-semibold text-${this.restaurantTag.toLowerCase()}-700 mr-2`;
        },
    },
    methods: {
        addItemToCart(food) {
            setTimeout(() => {
                this.$store.dispatch('cart/addProductToCart', food);
            }, 200);
            this.snackbar = true;
            this.snacktext = '已添加到购物车!';
        },
    },
};
</script>

<style>
/* 可以添加一些通用的样式 */
</style>
