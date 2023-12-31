<template>
    <div class="">
        <v-card raised>
            <v-card-title class="headline">
                您的购物车
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="clearAllItemsFromCart" v-bind="attrs" v-on="on" icon>
                            <v-icon>clear_all</v-icon>
                        </v-btn>
                    </template>
                    <span>清除所有商品</span>
                </v-tooltip>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div class="text-center" v-if="itemsInCart.length === 0">
                    <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-md font-semibold text-yellow-700">您的购物车当前是空的！您一定还不饿吧！</span>
                </div>
                <v-list v-else two-line subheader>
                    <v-list-item v-for="item in itemsInCart" :key="item.title">
                        <v-list-item-avatar>
                            <v-img :src="item.image"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }} - ￥{{ item.price }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.description }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-text-field
                                label="Prepend" solo
                                prepend-icon="remove"
                                @click:prepend="decrementItem(item)"
                                :value="item.quantity"
                                append-outer-icon="add"
                                @click:append-outer="incrementItem(item)"
                            ></v-text-field>
                        </v-list-item-action>

                        <v-list-item-action>
                            <v-btn @click="removeItemFromCart(item)" icon>
                                <v-icon color="red lighten-1">delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                <v-list two-line subheader>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                总计：
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            ￥ {{ cartTotal }}
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-if="itemsInCart.length > 0" color="green" text>支付</v-btn>
            </v-card-actions>
        </v-card>
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
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            snackbar: false,
            snacktext: '',
        }
    },
    computed: {
        itemsInCart() {
            return this.$store.state.cart.cartProducts;
        },
        cartTotal() {
            return this.itemsInCart.reduce((total, product) =>
                total + (product.price * product.quantity), 0
            );
        }
    },
    methods: {
        clearAllItemsFromCart() {
            setTimeout(() => {
                this.$store.commit('cart/removeAllProductsFromCart');
            }, 200);
            this.snackbar = true;
            this.snacktext = '购物车已清空！!';
        },
        removeItemFromCart(product) {
            setTimeout(() => {
                this.$store.commit('cart/removeProductFromCart', product);
            }, 200);
            this.snackbar = true;
            this.snacktext = '菜品已移除！';
        },
        decrementItem(product) {
            if (product.quantity === 1) {
                this.snackbar = true;
                this.snacktext = '菜品数量无法再减少！';
            } else {
                setTimeout(() => {
                    this.$store.commit('cart/decrementItemQuantity', product);
                }, 200);
                this.snackbar = true;
                this.snacktext = '菜品数量已减少！';
            }
        },
        incrementItem(product) {
            setTimeout(() => {
                this.$store.commit('cart/incrementItemQuantity', product);
            }, 200);
            this.snackbar = true;
            this.snacktext = '菜品数量已增加！';
        }
    }
}
</script>

<style>

</style>
