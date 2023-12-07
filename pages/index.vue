<template>
    <v-container>
        <!-- 选择餐厅区域 -->
        <v-row justify="center" align="start" class="mb-4">
            <v-col cols="12">
                <v-card>
                    <v-card-title class="text-h6">
                        选择餐厅
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="text-center">
                        <v-row>
                            <v-col v-for="restaurant in restaurants" :key="restaurant.tag" cols="auto">
                                <v-btn @click="selectRestaurant(restaurant.tag)" outlined dense color="primary">
                                    {{ restaurant.restaurantTag }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- 餐厅菜品展示区域 -->
        <v-row justify="center">
            <v-col cols="12">
                <Restaurant v-for="restaurant in restaurants" :key="restaurant.tag" :foods="restaurant.foods" :restaurantTag="restaurant.restaurantTag" v-if="selectedRestaurantTag === restaurant.tag" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Restaurant from '~/components/Restaurant.vue';
import { restaurants } from '~/config/restaurants';

export default {
    components: { Restaurant },
    data() {
        return {
            restaurants,
            selectedRestaurantTag: restaurants.length > 0 ? restaurants[0].tag : null,//默认展示第一个餐厅
        };
    },
    methods: {
        selectRestaurant(tag) {
            this.selectedRestaurantTag = tag;
        },
    },
};
</script>
