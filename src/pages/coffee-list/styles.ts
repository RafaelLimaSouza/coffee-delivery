import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Intro = styled.div`
  height: 54.4rem;

  display: flex;
  align-items: center;

  gap: 5.6rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 6.6rem;
  }

  h1 {
    ${mixins.fonts['title-xl']}
  }

  p {
    ${mixins.fonts['text-l']}
    color: ${(props) => props.theme.colors['base-subtitle']}
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Attributes = styled.ul`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 2rem 4rem;

  width: 100%;

  > li {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1.2rem;

    ${mixins.fonts['text-m']};
    color: ${(props) => props.theme.colors['base-text']};

    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`

export const IconWrapper = styled.div<{ $background: string }>`
  background-color: ${(props) => props.$background};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Products = styled.div`
  h2 {
    ${mixins.fonts['title-l']}
  }

  ul {
    padding: 5.4rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem 3.2rem;
  }
`
