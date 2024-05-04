import { CartActionType, CartActions } from './action'
import { Order } from '../../contexts/cart.context'
import { produce } from 'immer'

export function cartReducer(state: Order[], action: CartActions) {
  switch (action.type) {
    case CartActionType.ADD_ITEM: {
      return produce(state, (draft) => {
        const foundProduct = draft.find(
          (product: Order) => product.productId === action.payload.productId,
        )

        if (foundProduct) {
          foundProduct.quantity = action.payload.quantity
        } else {
          draft.push({
            productId: action.payload.productId,
            quantity: action.payload.quantity,
          })
        }
      })
    }
    case CartActionType.REMOVE_ITEM: {
      return produce(state, (draft) =>
        draft.filter(
          (product) => product.productId !== action.payload.productId,
        ),
      )
    }
    case CartActionType.ADD_UNIT: {
      return produce(state, (draft) => {
        draft.map((product) => {
          if (product.productId === action.payload.productId) {
            product.quantity++
          }

          return product
        })
      })
    }
    case CartActionType.REMOVE_UNIT: {
      return produce(state, (draft) => {
        draft.map((product) => {
          if (product.productId === action.payload.productId) {
            product.quantity--
          }

          return product
        })
      })
    }
    default:
      throw new Error("action don't exists")
  }
}
