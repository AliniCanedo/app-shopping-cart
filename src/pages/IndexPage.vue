<template>
  <div class="q-pa-lg">
    <div class="row justify-center">
      <div class="col-lg-3">
        <q-card class="wrapper-card">
          <q-img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Fjallraven - Foldsack No.
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              R$ 109.95
            </div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="primary">
              Adicionar ao carrinho
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-lg-3">
        <q-card class="wrapper-card">
          <q-img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Fjallraven - Foldsack No.
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              R$ 109.95
            </div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="primary">
              Adicionar ao carrinho
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-lg-3">
        <q-card class="wrapper-card">
          <q-img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Fjallraven - Foldsack No.
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              R$ 109.95
            </div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="primary">
              Adicionar ao carrinho
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

  methods: {

  }
}
</script>

<style lang="scss">
  .wrapper-card {
    margin: 10px;
  }
</style>
