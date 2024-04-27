import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;

  padding: 3.2rem 0;

  aside {
    display: flex;
    align-items: center;

    gap: 1.2rem;
  }
`

const Wrapper = styled.div`
  border-radius: 6px;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const Location = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors['purple-light']};

  svg {
    fill: ${(props) => props.theme.colors.purple};
  }

  span {
    color: ${(props) => props.theme.colors['purple-dark']};
    ${mixins.fonts['text-s']};
  }
`

export const Cart = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors['yellow-light']};

  svg {
    fill: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const Total = styled.div`
  position: absolute;
  top: 2.25rem;
  right: -0.75rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors['yellow-dark']};

  span {
    ${mixins.fonts['text-xs']};
    color: ${(props) => props.theme.colors.white};
    line-height: 0;
  }
`
