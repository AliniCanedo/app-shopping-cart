import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import { api } from 'boot/axios'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      products: [],
      productsInBag: []
    },
    mutations: {
      loadProducts (state, products) {
        state.products = products
      },

      addToBag (state, product) {
        state.productsInBag.push(product)
      },

      removeFromBag (state, productId) {
        const updateBag = state.productsInBag.filter(element => productId !== element.id)
        state.productsInBag = updateBag
      }
    },
    actions: {
      loadProducts ({ commit }) {
        api.get('/products').then(response => {
          commit('loadProducts', response.data)
        })
      },

      addToBag ({ commit }, product) {
        commit('addToBag', product)
      },

      removeFromBag ({ commit }, productId) {
        if (confirm('Are you sure you want to remove the item from bag?')) {
          commit('removeFromBag', productId)
        }
      }

    },
    modules: {
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
