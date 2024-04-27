import { Plus, Minus } from '@phosphor-icons/react'

import { QuantityInputContainer, Button } from './styles'

interface QuantityInputProps {
  increaseItem: () => void
  decreaseItem: () => void
  quantity: number
}

export function QuantityInput({
  increaseItem,
  decreaseItem,
  quantity,
}: QuantityInputProps) {
  const quantityIsEmpty = quantity === 0

  return (
    <QuantityInputContainer>
      <Button onClick={decreaseItem} disabled={quantityIsEmpty}>
        <Minus size={14} />
      </Button>
      <span>{quantity}</span>
      <Button onClick={increaseItem}>
        <Plus size={14} />
      </Button>
    </QuantityInputContainer>
  )
}
