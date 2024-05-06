import { render } from '@testing-library/react'
import { Header } from '.'
import {
  CartContext,
  CartContextProvider,
  CartContextProps,
} from '../../contexts/cart.context'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from '../../styles/themes/default'
import { ThemeProvider } from 'styled-components'

describe('Header', () => {
  it('should not be able to see the total when any product was added in cart', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartContextProvider>
            <Header />
          </CartContextProvider>
        </BrowserRouter>
      </ThemeProvider>,
    )

    const totalInCart = wrapper.queryByTestId('total')

    expect(totalInCart).not.toBeInTheDocument()
  })

  it('should not be able to see the total when any product was added in cart', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartContext.Provider
            value={
              { order: [{ productId: '1', quantity: 1 }] } as CartContextProps
            }
          >
            <Header />
          </CartContext.Provider>
        </BrowserRouter>
      </ThemeProvider>,
    )

    const totalInCart = wrapper.queryByTestId('total')

    expect(totalInCart).not.toBeInTheDocument()
  })
})
