import logo from '../../assets/logo.svg'

import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { HeaderContainer, Location, Cart, Total } from './styles'

import { useCart } from '../../hooks/use-Cart.hook'

export function Header() {
  const { order } = useCart()

  const quantityOfItems = order.length

  const cartIsNotEmpty = quantityOfItems > 0

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <aside>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Lisboa, PT</span>
        </Location>
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </aside>

      {cartIsNotEmpty && (
        <Total>
          <span>{quantityOfItems}</span>
        </Total>
      )}
    </HeaderContainer>
  )
}
