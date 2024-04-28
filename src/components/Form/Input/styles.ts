import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

interface InputFieldProps {
  $fullWidth: boolean
}

export const InputField = styled.input<InputFieldProps>`
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;

  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content !important')};

  padding: 1.2rem;

  ${mixins.fonts['text-s']};
  color: ${(props) => props.theme.colors['base-label']};

  transition: all 0.2s;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }

  &:not(:placeholder-shown) {
    color: ${(props) => props.theme.colors['base-text']};
    background-color: ${(props) => props.theme.colors['base-input']};
  }
`
