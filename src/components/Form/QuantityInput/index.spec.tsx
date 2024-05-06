import { render } from '@testing-library/react'
import { QuantityInput } from '.'
import userEvent from '@testing-library/user-event'
import { defaultTheme } from '../../../styles/themes/default'
import { ThemeProvider } from 'styled-components'

const increaseItemMock = vi.fn().mockImplementation(() => {})
const decreaseItemMock = vi.fn().mockImplementation(() => {})
const quantity: number = 1

describe('QuantityInput', () => {
  it('should be able to increase quantity', async () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <QuantityInput
          increaseItem={increaseItemMock}
          decreaseItem={decreaseItemMock}
          quantity={quantity}
        />
      </ThemeProvider>,
    )

    const increaseButton = wrapper.getByTestId('increase-button')
    await userEvent.click(increaseButton)

    expect(increaseItemMock).toHaveBeenCalled()
  })

  it('should be able to decrease quantity', async () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <QuantityInput
          increaseItem={increaseItemMock}
          decreaseItem={decreaseItemMock}
          quantity={quantity}
        />
      </ThemeProvider>,
    )

    const decreaseButton = wrapper.getByTestId('decrease-button')
    await userEvent.click(decreaseButton)

    expect(decreaseItemMock).toHaveBeenCalled()
  })

  it('should disabled decrease button when quantit is zero', async () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <QuantityInput
          increaseItem={increaseItemMock}
          decreaseItem={decreaseItemMock}
          quantity={0}
        />
      </ThemeProvider>,
    )

    const decreaseButton = wrapper.getByTestId('decrease-button')

    expect(decreaseButton).toBeDisabled()
  })

  it('should be able to display the quantity', async () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <QuantityInput
          increaseItem={increaseItemMock}
          decreaseItem={decreaseItemMock}
          quantity={quantity}
        />
      </ThemeProvider>,
    )

    const quantityElement = wrapper.getByText('1', { exact: true })

    expect(quantityElement).toBeVisible()
  })
})
