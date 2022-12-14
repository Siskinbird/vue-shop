export default {
    state: {
        shopList: [
            {
                id: 0,
                title: 'Nike red',
                description: 'Давно выяснено, ' +
                    'что при оценке дизайна и композиции читаемый ' +
                    'текст мешает сосредоточиться. Lorem Ipsum используют ' +
                    'потому, что тот обеспечивает более или менее стандартное ' +
                    'заполнение шаблона, а также реальное распределение букв и пробелов в ' +
                    'абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
                img: require('../assets/shop-img/1.png'),
                gallery: [
                    {name: 'Nike bootes first', img: require('../assets/shop-img/1.png')},
                    {name: 'Nike bootes second', img: require('../assets/shop-img/2.png')},
                    {name: 'Nike bootes third', img: require('../assets/shop-img/3.png')}
                ]
            }, {
                id: 1,
                title: 'Nike default',
                description: 'Давно выяснено, ' +
                    'что при оценке дизайна и композиции читаемый ' +
                    'текст мешает сосредоточиться. Lorem Ipsum используют ' +
                    'потому, что тот обеспечивает более или менее стандартное ' +
                    'заполнение шаблона, а также реальное распределение букв и пробелов в ' +
                    'абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
                img: require('../assets/shop-img/4.png'),
                gallery: [
                    {name: 'Nike bootes first', img: require('../assets/shop-img/4.png')},
                    {name: 'Nike bootes second', img: require('../assets/shop-img/5.png')},
                    {name: 'Nike bootes third', img: require('../assets/shop-img/6.png')}
                ]
            },
            {
                id: 2,
                title: 'Nike Wind',
                description: 'Давно выяснено, ' +
                    'что при оценке дизайна и композиции читаемый ' +
                    'текст мешает сосредоточиться. Lorem Ipsum используют ' +
                    'потому, что тот обеспечивает более или менее стандартное ' +
                    'заполнение шаблона, а также реальное распределение букв и пробелов в ' +
                    'абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
                img: require('../assets/shop-img/7.png'),
                gallery: [
                    {name: 'Nike bootes first', img: require('../assets/shop-img/7.png')},
                    {name: 'Nike bootes second', img: require('../assets/shop-img/8.png')},
                    {name: 'Nike bootes third', img: require('../assets/shop-img/9.png')}
                ]
            },
            {
                id: 3,
                title: 'Nike Street',
                description: 'Давно выяснено, ' +
                    'что при оценке дизайна и композиции читаемый ' +
                    'текст мешает сосредоточиться. Lorem Ipsum используют ' +
                    'потому, что тот обеспечивает более или менее стандартное ' +
                    'заполнение шаблона, а также реальное распределение букв и пробелов в ' +
                    'абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
                img: require('../assets/shop-img/10.png'),
                gallery: [
                    {name: 'Nike bootes first', img: require('../assets/shop-img/10.png')},
                    {name: 'Nike bootes second', img: require('../assets/shop-img/11.png')},
                    {name: 'Nike bootes third', img: require('../assets/shop-img/12.png')}
                ]
            }
        ]
    },
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct : (state) => (id) => {
            return state.shopList.find(product => product.id === +id)
        }
    },
    mutations: {},
    actions: {}
}