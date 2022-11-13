import { describe, expect, it, test } from '@jest/globals'
import IndexPage from 'src/pages/IndexPage.vue'
import { mount } from '@vue/test-utils'

describe('IndexPage', () => {
  // The component to test
  it('has data', () => {
    expect(typeof IndexPage.data).toBe('function')
  })

  const ProductsComponent = {
    template: `<div class="wrapper-card">
      {{ title }}
      {{ price }}
      {{ description }}
    </div>`,
    props: ['title', 'description', 'price']
  }

  test('displays Product', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(ProductsComponent, {
      propsData: {
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        price: '109.95',
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
      }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Mens Casual Premium Slim Fit T-Shirts')
    expect(wrapper.text()).toContain('109.95')
    expect(wrapper.text()).toContain('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday')
  })
})
