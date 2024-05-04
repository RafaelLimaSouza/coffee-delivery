export enum CartActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  ADD_UNIT = 'ADD_UNIT',
  REMOVE_UNIT = 'REMOVE_UNIT',
}

type AddItem = {
  type: CartActionType.ADD_ITEM
  payload: {
    productId: string
    quantity: number
  }
}

type RemoveItem = {
  type: CartActionType.REMOVE_ITEM
  payload: {
    productId: string
  }
}

type AddUnit = {
  type: CartActionType.ADD_UNIT
  payload: {
    productId: string
  }
}

type RemoveUnit = {
  type: CartActionType.REMOVE_UNIT
  payload: {
    productId: string
  }
}

export type CartActions = AddItem | RemoveItem | AddUnit | RemoveUnit

export const addItemAction = (productId: string, quantity: number) => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: {
      productId,
      quantity,
    },
  } satisfies CartActions
}

export const removeItemAction = (productId: string) => {
  return {
    type: CartActionType.REMOVE_ITEM,
    payload: {
      productId,
    },
  } satisfies CartActions
}

export const addUnitAction = (productId: string) => {
  return {
    type: CartActionType.ADD_UNIT,
    payload: {
      productId,
    },
  } satisfies CartActions
}

export const removeUnitAction = (productId: string) => {
  return {
    type: CartActionType.REMOVE_UNIT,
    payload: {
      productId,
    },
  } satisfies CartActions
}
