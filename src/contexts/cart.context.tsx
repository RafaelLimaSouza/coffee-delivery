import { createContext, useState } from 'react'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export interface IPersonalDataValues {
  cep: string
  street: string
  number: number
  complement?: string
  district: string
  city: string
  uf: string
  payment_type: 'credit' | 'debit' | 'cash'
}

interface Order {
  productId: string
  quantity: number
}

interface Bill {
  products: Order[]
  personalInfo: IPersonalDataValues | null
}

interface CartContextProps {
  order: Order[]
  bill: Bill
  addItem: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  addUnit: (productId: string) => void
  removeUnit: (productId: string) => void
  confirmOrder: (
    personalInfo: IPersonalDataValues,
    afterSubmit: () => void,
  ) => void
  getTax: () => number
}

const TAX = 3.5

export const CartContext = createContext({} as CartContextProps)

interface CartContextProvider {
  children: React.ReactNode
}

export const CartContextProvider = ({ children }: CartContextProvider) => {
  const [order, setOrder] = useState<Order[]>([])
  const [bill, setBill] = useState<Bill>({ products: [], personalInfo: null })

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

  const removeItem = (productId: string) => {
    setOrder((state) => {
      return state.filter((product) => product.productId !== productId)
    })
  }

  const addUnit = (productId: string) => {
    setOrder((state) => {
      return state.map((product) => {
        if (product.productId === productId) {
          return {
            ...product,
            quantity: product.quantity++,
          }
        }

        return product
      })
    })
  }

  const removeUnit = (productId: string) => {
    setOrder((state) => {
      return state.map((product) => {
        if (product.productId === productId) {
          return {
            ...product,
            quantity: product.quantity--,
          }
        }

        return product
      })
    })
  }

  const confirmOrder = (
    personalInfo: IPersonalDataValues,
    afterSubmit: () => void,
  ) => {
    setBill({
      products: order,
      personalInfo,
    })

    afterSubmit()
  }

  const getTax = () => TAX

  return (
    <CartContext.Provider
      value={{
        order,
        bill,
        addItem,
        removeItem,
        addUnit,
        removeUnit,
        confirmOrder,
        getTax,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
