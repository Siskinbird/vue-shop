<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Shop Page</h1>
        <div class="item__wrapper">
        <ShopItem v-for="product in shopList" :key="product.id" :product="product"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ShopItem from '../components/ShopItem'
export default {

  components: {
    ShopItem
  },
  data() {
    return {
      shopList: null
    }
  },

  created() {
    this.shopList = this.$store.getters.getShopList
    console.log(this.shopList);
  }
}
</script>
