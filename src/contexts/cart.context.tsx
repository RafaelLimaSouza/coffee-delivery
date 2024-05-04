import { createContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducers/cart/reducer'

import {
  addItemAction,
  removeItemAction,
  addUnitAction,
  removeUnitAction,
} from '../reducers/cart/action'

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

export interface Order {
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
  const [order, dispatch] = useReducer(cartReducer, [])

  const [bill, setBill] = useState<Bill>({ products: [], personalInfo: null })

  const addItem = (productId: string, quantity: number) =>
    dispatch(addItemAction(productId, quantity))

  const removeItem = (productId: string) =>
    dispatch(removeItemAction(productId))

  const addUnit = (productId: string) => dispatch(addUnitAction(productId))

  const removeUnit = (productId: string) =>
    dispatch(removeUnitAction(productId))

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
