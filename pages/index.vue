<template>
    <v-container>
        <!-- 选择餐厅区域 -->
        <v-row justify="center" align="start" class="mb-4">
            <v-col cols="12">
                <v-card>
                    <!-- 可展开和收起的标题区域 -->
                    <v-card-title class="text-h6">
                        <v-row align="center">
                            <v-col cols="auto">
                                <!-- 控制展开和收起的按钮 -->
                                <v-btn @click="toggleRestaurantList" icon>
                                    <v-icon>{{ showRestaurantList ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <!-- 显示当前选中的餐厅 -->
                                <strong class="selected-restaurant-title">选择餐厅</strong>&nbsp;
                                <span v-if="selectedRestaurantTag" class="selected-restaurant-info rounded-border">
                  当前餐厅：{{ getSelectedRestaurant(selectedRestaurantTag).restaurantTag }}
                </span>
                            </v-col>
                        </v-row>
                    </v-card-title>

                    <!-- 实际的选择餐厅区域，根据 showRestaurantList 控制展开和收起 -->
                    <v-divider></v-divider>
                    <v-card-text v-if="showRestaurantList" class="text-center">
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
                <Restaurant
                    v-for="restaurant in restaurants"
                    :key="restaurant.tag"
                    :foods="restaurant.foods"
                    :restaurantTag="restaurant.restaurantTag"
                    v-if="selectedRestaurantTag === restaurant.tag"
                />
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
            selectedRestaurantTag: restaurants.length > 0 ? restaurants[0].tag : null,
            showRestaurantList: false, // 控制展开和收起的状态
        };
    },
    methods: {
        selectRestaurant(tag) {
            this.selectedRestaurantTag = tag;
        },
        toggleRestaurantList() {
            this.showRestaurantList = !this.showRestaurantList;
        },
        getSelectedRestaurant(tag) {
            return this.restaurants.find(restaurant => restaurant.tag === tag) || {};
        },
    },
};
</script>

<style scoped>
.selected-restaurant-title {
    font-size: 18px;
}

.selected-restaurant-info {
    font-size: 14px;
}

/* 添加圆角边框样式 */
.rounded-border {
    border: 1px solid #ccc; /* 设置边框样式，可以根据需要调整颜色和宽度 */
    border-radius: 5px; /* 设置圆角半径，可以根据需要调整 */
    padding: 2px 5px; /* 设置内边距，可以根据需要调整 */
    display: inline-block; /* 让边框只包裹内容 */
}
</style>
