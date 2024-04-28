import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 3.2rem;

  padding-top: 4rem;

  h3 {
    ${mixins.fonts['title-xs']}
    color: ${(props) => props.theme.colors['base-subtitle']}
  }
`

export const DataContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  gap: 1.5rem;
`

const FormController = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 4rem;
  gap: 3.2rem;

  width: 100%;

  span {
    ${mixins.fonts['text-m']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    ${mixins.fonts['text-s']};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const FormControllerAddress = styled(FormController)`
  > div {
    display: flex;
    flex-direction: column;

    gap: 1.6rem;
  }

  > div div {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
  }
`

export const FormControllerPayment = styled(FormController)`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    width: 100%;

    grid-gap: 1.2rem;
  }
`

export const FormHeader = styled.header`
  display: flex;
  align-items: flex-start;

  gap: 0.8rem;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`

export const ProductsController = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 4rem;
  gap: 2.4rem;

  width: 100%;

  > div {
    display: grid;
    flex-direction: column;

    gap: 1.2rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      span {
        ${mixins.fonts['text-s']};
        color: ${({ theme }) => theme.colors['base-text']};
      }

      &:last-of-type {
        span {
          ${mixins.fonts['text-l']};
          color: ${({ theme }) => theme.colors['base-subtitle']};
          font-weight: 700;
        }
      }
    }
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 6px;
  padding: 0.8rem 1.2rem;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.white};
  ${mixins.fonts['button-g']}

  transition: all 0.2s;
  cursor: pointer;
  height: 4.6rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const CartItems = styled.ul`
  li + li {
    padding-top: 2.4rem;
  }
`

export const CartItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding: 0.8rem 0.4rem 2.4rem;

  width: 100%;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  span {
    ${mixins.fonts['text-m']}
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: 700;
  }

  > div {
    display: flex;
    gap: 2rem;

    span {
      ${mixins.fonts['text-m']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    > div {
      display: flex;
      flex-direction: column;

      flex: 1;

      gap: 0.8rem;

      .button-group {
        display: flex;
        align-items: center;

        gap: 0.8rem;
      }
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  padding: 0 0.8rem;
  gap: 0.4rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  ${mixins.fonts['button-m']};

  svg {
    color: ${({ theme }) => theme.colors.purple};
    line-height: 0;
  }
`
