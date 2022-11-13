import { describe, expect, it } from '@jest/globals'
import { mapState } from 'vuex'
import { mount } from '@vue/test-utils'

describe('BasketPage', () => {
  // The component to test
  const MessageComponent = {
    template: '<div class="grand-total">{{ total }}</div>',
    props: ['total']
  }

  test('displays message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(MessageComponent, {
      propsData: {
        total: 'Total do pedido: R$ 109.95'
      }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Total do pedido: R$ 109.95')
  })
    
  describe('mapState', () => {
    it('has productsInBag', () => {
      expect(typeof mapState.productsInBag)
    })
  })
})
