<template>
  <q-page padding>
    <div id="nav">
      <router-link to="/basket">Carrinho (0)</router-link>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
        <q-card-section>
          <div class="text-h6">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
          <p class="price">R$ 109.95</p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat>Adicionar ao carrinho</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
