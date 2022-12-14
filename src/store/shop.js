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
                img: require('../assets/shop-img/1.png')
            }
        ]
    },
    getters: {
        getShopList(state) {
            return state.shopList
        }
    },
    mutations: {},
    actions: {}
}