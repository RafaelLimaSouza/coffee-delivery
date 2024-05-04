import { ShoppingCart } from '@phosphor-icons/react'

import { CardContainer, IconWrapper, Tags, Footer } from './styles'

import { QuantityInput } from '../Form/QuantityInput'

import { CoffeeProps } from '../../contexts/cart.context'
import { useCart } from '../../hooks/use-Cart.hook'
import { useState } from 'react'

interface CardProps {
  coffee: CoffeeProps
  defaultQuantity: number
}

export function Card({ coffee, defaultQuantity }: CardProps) {
  const [quantity, setQuantity] = useState(defaultQuantity)

  const { addItem } = useCart()

  function handleAddItem() {
    addItem(coffee.id, quantity)
  }

  function handleIncreaseQuantity() {
    setQuantity((state) => ++state)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => --state)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <h3>{coffee.title}</h3>

      <p>{coffee.description}</p>

      <Footer>
        <div>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </div>
        <div>
          <QuantityInput
            increaseItem={handleIncreaseQuantity}
            decreaseItem={handleDecreaseQuantity}
            quantity={quantity}
          />
          <IconWrapper onClick={handleAddItem}>
            <ShoppingCart size={22} weight="fill" />
          </IconWrapper>
        </div>
      </Footer>
    </CardContainer>
  )
}
