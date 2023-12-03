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
            { id: 4, text:'盐水鸭', description:'不知道写什么了，放一点家乡美食吧', price:8.00 , image:'https://p.sda1.dev/14/526016ca66dc9a3de2f89a41f54e2350/盐水鸭.jpg'},
            { id: 5, text:'蛋炒饭', description:'酱油炒饭，很香', price: 10.00 , image:'https://p.sda1.dev/14/dec63ab0f02847301d1f61df97bedaa0/蛋炒饭.jpg'},
        ],
    },
    // Add more restaurants as needed
    {
        tag: 'StarNorthFood',
        restaurantTag: '星天苑北餐厅'，
        foods:[
            { id: 1, text: '地三鲜', description: '北餐厅民族餐厅出品，正宗东北地三鲜'， price: 3.00, image:'https://p.sda1.dev/14/ac2d731112d84b2e0e5dfa3b13bd2d39/地三鲜.jpg'},
            { id: 2, text: '腊肉茄子煲', description: '北餐厅出品，茄子腊肉煲，只要有腊肉就有家的味道', price: 6.00 image:  'https://p.sda1.dev/14/23dc83dd7236a900e3b5662ac740e702/腊肉茄子煲.jpg'},
            { id: 3, text: '蜜汁叉烧肉', description: '北餐厅出品，南京叉烧味', price: 6.00 image:'https://p.sda1.dev/14/769228260ba7be85019005ef1cc1720c/蜜汁叉烧肉.png'},
        ],
    },
    {
        tag: 'SeaFood'
        restaurantTag: '海天苑餐厅'
        foods:[
            { id: 1, text:'茄盒千层面', description:'海餐特色，还没吃过，先不评价', price: 16.00 , image:'https://p.sda1.dev/14/8d66b3d321c5ea4eb6f920aefc801144/茄盒千层面.jpg'},
            { id: 2, text:'小炒肉', description:'海餐自选，肉肥而不腻，很下饭', price:5.00 , image:'https://p.sda1.dev/14/4f3d39f753a146bbd052044d8fa31b19/小炒肉.jpg'},
        ],
    },

];
