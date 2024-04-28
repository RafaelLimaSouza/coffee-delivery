import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const QuantityInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  min-width: 7.2rem;
  height: 100%;
  border-radius: 6px;

  gap: 0.4rem;

  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0.8rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    ${mixins.fonts['text-m']}
    color: ${(props) => props.theme.colors['base-title']}
  }
`

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;

  &:hover {
    svg {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
