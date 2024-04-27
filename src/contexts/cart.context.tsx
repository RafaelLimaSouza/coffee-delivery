import { createContext, useState } from 'react'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface Order {
  productId: string
  quantity: number
}

interface CartContextProps {
  order: Order[]
  addItem: (productId: string, quantity: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProvider {
  children: React.ReactNode
}

export const CartContextProvider = ({ children }: CartContextProvider) => {
  const [order, setOrder] = useState<Order[]>([])

  const addItem = (productId: string, quantity: number) => {
    setOrder((state) => {
      const productIndex = state.findIndex(
        (product) => product.productId === productId,
      )

      if (productIndex >= 0) {
        state[productIndex] = {
          productId,
          quantity,
        }

        return state
      }

      return [
        ...state,
        {
          productId,
          quantity,
        },
      ]
    })
  }

  return (
    <CartContext.Provider value={{ order, addItem }}>
      {children}
    </CartContext.Provider>
  )
}
