import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-top: 8rem;

  h1 {
    margin-bottom: 0.4rem;
    ${mixins.fonts['title-l']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  p {
    ${mixins.fonts['text-l']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: flex-start;

  grid-gap: 10.2rem;

  width: 100%;

  margin-top: 4rem;
`

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 3.2rem;
  padding: 4rem;

  border: 1px solid gray;
  border-radius: 6px 36px 6px 36px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    gap: 1.2rem;

    div:last-of-type {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  span {
    display: inline-flex;
    gap: 0.5rem;
    ${mixins.fonts['text-m']};
    color: ${({ theme }) => theme.colors['base-text']};

    address {
      font-style: normal;
    }
  }
`

interface WrapperIconProps {
  $backgroundColor: string
}
export const WrapperIcon = styled.div<WrapperIconProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;

  border-radius: 50%;
  background-color: ${(props) => props.$backgroundColor};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`
