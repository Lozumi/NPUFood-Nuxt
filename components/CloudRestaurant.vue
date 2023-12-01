<template>
    <div class="px-2">
        <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-md font-semibold text-green-700 mr-2">云天苑餐厅</span>
        <div class="flex flex-wrap justify-start items-center -mx-4">
            <div v-for="cloudFood in cloudFoods" :key="cloudFood.id" class="w-full md:w-1/3 px-2">
                <v-card :loading="loading" class="mx-auto my-3">
                    <v-img height="100"
                    :src="cloudFood.image"
                    ></v-img>

                    <v-card-title>
                        {{ cloudFood.text }}
                        <v-spacer></v-spacer>
                        <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">$ {{ cloudFood.price }}</span>
                    </v-card-title>

                    <v-card-text>
                        <div>{{ cloudFood.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="green lighten-2" text @click="addItemToCart(cloudFood)">
                            Add to Cart
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <v-snackbar v-model="snackbar" :timeout="2000">
            {{ snacktext }}
            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            loading: false,
            selection: 1,
            snackbar: false,
            snacktext: '',
        }
    },
    props: {
        cloudFoods: {
            type: Array,
            required: true
        }
    },
    methods: {
        addItemToCart(cloudFood) {
            setTimeout(() => {
                this.$store.dispatch('cart/addProductToCart', cloudFood)
            }, 200);
            this.snackbar = true;
            this.snacktext = 'Item Added to cart successfully!';
        }
    },
}
</script>

<style>

</style>
