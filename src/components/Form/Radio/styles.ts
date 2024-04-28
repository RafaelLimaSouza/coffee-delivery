import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

interface RadioContainerProps {
  $isSelected: boolean
}

export const RadioContainer = styled.label<RadioContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1.6rem;
  gap: 1.2rem;
  border-radius: 6px;

  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.colors['purple-light']
      : props.theme.colors['base-button']};

  border: ${(props) =>
    props.$isSelected
      ? `1px solid ${props.theme.colors.purple}`
      : `1px solid ${props.theme.colors['base-button']}`};

  color: ${({ theme }) => theme.colors['base-text']};

  ${mixins.fonts['button-m']};
  line-height: 0;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`

export const RadioInput = styled.input`
  display: none;
`
