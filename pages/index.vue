<template>
    <div>
        <Restaurant v-for="restaurant in restaurants" :key="restaurant.tag" :foods="restaurant.foods" :restaurantTag="restaurant.restaurantTag" />
    </div>
</template>

<script>
import Restaurant from '~/components/Restaurant.vue';
import { restaurants } from '~/config/restaurants';

export default {
    components: { Restaurant },
    data() {
        return {
            restaurants,
        };
    },
};
</script>
