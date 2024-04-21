import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { HeaderContainer, Location, Cart } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <aside>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Lisboa, PT</span>
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </aside>
    </HeaderContainer>
  )
}
