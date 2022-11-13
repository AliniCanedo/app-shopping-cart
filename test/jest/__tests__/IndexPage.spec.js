import { describe, expect, it, test } from '@jest/globals'
import IndexPage from 'src/pages/IndexPage.vue'
import { mapState } from 'vuex'
import { mount } from '@vue/test-utils'

describe('IndexPage', () => {
  // The component to test
  const MessageComponent = {
    template: '<div class="col text-h6 ellipsis">{{ title }}</div>',
    props: ['title']
  }

  test('displays message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(MessageComponent, {
      propsData: {
        title: 'Mens Casual Premium Slim Fit T-Shirts'
      }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Mens Casual Premium Slim Fit T-Shirts')
  })

  it('has data', () => {
    expect(typeof IndexPage.data).toBe('function')
  })

  describe('mapState', () => {
    it('has products and productsInBag', () => {
      expect(typeof mapState.products)
      expect(typeof mapState.productsInBag)
    })
  })
})
