<template>
  <div class="q-pa-lg">
    <div class="row">
      <div class="col-lg-3" v-for="(product, index) in this.products" :key="index">
        <q-card class="wrapper-card" :class="{ inBag: isInBag(product) }" style="width: 335px; margin: 20px auto" >
          <q-img :src="product.image" :ratio="1" style="display: initial;width: 335px;" />
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6">
                {{ product.title }}
              </div>
            </div>
            <q-rating v-model="product.rating.rate" :max="5" size="20px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              R$ {{ product.price.toFixed(2) }}
            </div>
            <div class="text-caption text-grey">
              {{ product.description }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="primary" v-if="!isInBag(product)" @click="addToBag(product)">
              adicionar ao carrinho
            </q-btn>
            <q-btn flat color="remove" v-else @click="this.$store.dispatch('removeFromBag', product.id)">
              remover do carrinho
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },
  computed: mapState([
    'products',
    'productsInBag'
  ]),

  methods: {
    addToBag (product) {
      product.quantity = 1
      this.$store.dispatch('addToBag', product)
    },
    isInBag (product) {
      return this.productsInBag.find(item => item.id === product.id)
    }
  }
}
</script>

<style lang="scss">
.wrapper-card {
  &.inBag {
    border: 1px solid #007bff;
  }

}
.q-page-container {
  padding-top: 20px ;
  padding-left: 145px !important;
}
</style>
