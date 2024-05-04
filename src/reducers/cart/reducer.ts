import { CartActionType, CartActions } from './action'
import { Order } from '../../contexts/cart.context'

export function cartReducer(state: Order[], action: CartActions) {
  switch (action.type) {
    case CartActionType.ADD_ITEM: {
      const productIndex = state.findIndex(
        (product) => product.productId === action.payload.productId,
      )

      if (productIndex >= 0) {
        state[productIndex] = {
          productId: action.payload.productId,
          quantity: action.payload.quantity,
        }

        return state
      }

      return [
        ...state,
        {
          productId: action.payload.productId,
          quantity: action.payload.quantity,
        },
      ]
    }
    case CartActionType.REMOVE_ITEM: {
      return state.filter(
        (product) => product.productId !== action.payload.productId,
      )
    }
    case CartActionType.ADD_UNIT: {
      return state.map((product) => {
        if (product.productId === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity++,
          }
        }

        return product
      })
    }
    case CartActionType.REMOVE_UNIT: {
      return state.map((product) => {
        if (product.productId === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity--,
          }
        }

        return product
      })
    }
    default:
      throw new Error("action don't exists")
  }
}
