import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DefaultLayoutContainer, Wrapper } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </DefaultLayoutContainer>
  )
}
