<template>
    <div>
        <starFoods :starFoods="starFoods"></starFoods>
        <cloudFoods :cloudFoods="cloudFoods"></cloudFoods>
    </div>
</template>

<script>
import starFoods from '../components/StarRestaurant.vue';
import cloudFoods from '../components/CloudRestaurant.vue';
import { mapMutations } from 'vuex';

export default {
    components: { starFoods, cloudFoods },
    data() {
        return {
        }
    },
    computed: {
        products() {
            return this.$store.state.products.products;
        },
        cloudFoods() {
            return this.products.filter(item => item.tag === 'cloudFood');
        },
        starFoods() {
            return this.products.filter(item => item.tag === 'starFood');
        },
    },

}
</script>
