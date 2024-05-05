import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from 'styled-components'

import { Card } from './index'
import { defaultTheme } from '../../styles/themes/default'

const coffeeProp = {
  id: 'coffee-id',
  title: 'coffee title',
  description: 'coffee description',
  tags: ['tag-a'],
  price: 9.9,
  image: 'http://image.com',
}

describe('Card', () => {
  it('should be able to display a image', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const image = wrapper.getByTestId('card-image')

    expect(image).toBeVisible()
  })

  it('should be able to display the tags', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const tag = wrapper.getByText('tag-a')

    expect(tag).toBeVisible()
  })

  it('should be able to display the title', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const title = wrapper.getByText('coffee title')

    expect(title).toBeVisible()
  })

  it('should be able to display the description', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const description = wrapper.getByText('coffee description')

    expect(description).toBeVisible()
  })

  it('should be able to display the price', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const price = wrapper.getByText('9.90')

    expect(price).toBeVisible()
  })

  it('should be able to display the quantity', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const quantity = wrapper.getByText('0', { exact: true })

    expect(quantity).toBeVisible()
  })

  it('should disabled decrease button when quantity is zero', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const decreaseButton = wrapper.getByTestId('decrease-button')

    expect(decreaseButton).toBeDisabled()
  })

  it('should be able to increase quantity and enabled decrease button when quantity is more than zero', async () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={0} />
      </ThemeProvider>,
    )

    const increaseButton = wrapper.getByTestId('increase-button')
    userEvent.click(increaseButton)
    const quantity = await wrapper.findByText('1', { exact: true })

    expect(quantity).toBeVisible()

    const decreaseButton = wrapper.getByTestId('decrease-button')

    expect(decreaseButton).toBeEnabled()
  })

  it('should be able to decrease quantity', async () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Card coffee={coffeeProp} defaultQuantity={1} />
      </ThemeProvider>,
    )

    const decreaseButton = wrapper.getByTestId('decrease-button')
    userEvent.click(decreaseButton)

    const quantity = await wrapper.findByText('0', { exact: true })

    expect(quantity).toBeVisible()
  })
})
