<template>
  <div class="q-pa-lg">
    <div class="row justify-center">
      <div class="col-lg-3" v-for="(product, index) in this.products" :key="index">
        <q-card class="wrapper-card" :class="{ inBag : isInBag(product) }">
          <q-img :src="product.image" :ratio="1"/>
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{product.title}}
              </div>
            </div>
            <q-rating v-model="product.rating.rate" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              R$ {{product.price.toFixed(2)}}
            </div>
            <div class="text-caption text-grey">
              {{product.description}}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="primary" v-if="!isInBag(product)" @click="this.$store.dispatch('addToBag', product)">
              Add to bag
            </q-btn>
            <q-btn flat color="remove" v-else @click="this.$store.dispatch('removeFromBag', product.id)">
              Remove to bag
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },

  computed: {
    products () {
      return this.$store.state.products
    },

    productsInBag () {
      return this.$store.state.productsInBag
    }
  },

  methods: {
    // addToBag (product) {
    //   product.quantity = 1
    //   this.$store.dispatch('addToBag', product)
    // },
    isInBag (product) {
      return this.productsInBag.find(element => element.id === product.id)
    }
  }
}
</script>

<style lang="scss">
  .wrapper-card {
    margin: 10px;

    &.inBag {
      border: 1px solid #007bff;
    }

  }
</style>
