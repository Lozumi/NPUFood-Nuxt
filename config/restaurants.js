// restaurants.js

export const restaurants = [
    {
        tag: 'StarFood',
        restaurantTag: '星天苑餐厅',
        foods: [
            { id: 1, text: '鸡蛋灌饼', description: '学府餐厅出品，晚归学子的最爱！', price: 6.50, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
            { id: 2, text: '泡泡鸡', description: '南餐厅三楼出品，永远怀念。', price: 13.00, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        ],
    },
    {
        tag: 'CloudFood',
        restaurantTag: '云天苑餐厅',
        foods: [
            { id: 1, text: '柠檬鱼', description: '云餐一楼出品，爱鱼~', price: 12.00, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
            { id: 2, text: '西洋套餐', description: '云餐咖啡馆出品，太高级了没吃过。', price: 998.00, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
            { id: 3, text: '铁锅炖大鹅', description: '云餐没有，鹅鹅鹅，曲项向天歌~', price: 30.00, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        ],
    },
    {
        tag: 'seaFood',
        restaurantTag: '海天苑餐厅',
        foods: [
            { id: 1, text: '小鸡炖蘑菇', description: '海餐应该有吧（？）。', price: 15.00, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
            { id: 1, text: '航小天营养套餐', description: '海餐没有，但海餐二楼真的有航小天！XD', price: 9998.00, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' }
        ]
    }
    // 可添加其他餐厅
];
