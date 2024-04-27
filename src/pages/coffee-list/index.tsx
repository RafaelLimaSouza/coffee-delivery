import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { useTheme } from 'styled-components'

import products from '../../assets/products.svg'

import { Card } from '../../components/Card'

import { coffees } from '../../data/products.json'

import {
  CoffeeListContainer,
  Intro,
  Description,
  Attributes,
  IconWrapper,
  Products,
} from './styles'
import { CoffeeProps } from '../../contexts/cart.context'

export function CoffeeList() {
  const theme = useTheme()

  return (
    <CoffeeListContainer>
      <Intro>
        <div>
          <Description>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Description>

          <Attributes>
            <li>
              <IconWrapper $background={theme.colors['yellow-dark']}>
                <ShoppingCart size={16} weight="fill" />
              </IconWrapper>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <IconWrapper $background={theme.colors['base-text']}>
                <Package size={16} weight="fill" />
              </IconWrapper>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <IconWrapper $background={theme.colors.yellow}>
                <Timer size={16} weight="fill" />
              </IconWrapper>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <IconWrapper $background={theme.colors.purple}>
                <Coffee size={16} weight="fill" />
              </IconWrapper>
              <span>O café chega fresquinho até você</span>
            </li>
          </Attributes>
        </div>
        <img
          src={products}
          alt="Copo de café com alguns complementos ao lado em potes menores"
        />
      </Intro>
      <Products>
        <h2>Nossos cafés</h2>

        <ul>
          {coffees.map((coffee: CoffeeProps) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </Products>
    </CoffeeListContainer>
  )
}
