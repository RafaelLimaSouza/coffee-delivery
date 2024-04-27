import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CardContainer = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${(props) => props.theme.colors['base-card']};

  width: 25.6rem;
  height: 31rem;

  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
  padding: 0 2rem 2rem;

  img {
    margin-top: -2rem;
    margin-bottom: 1.2rem;
  }

  h3 {
    margin-bottom: 0.8rem;
    ${mixins.fonts['title-s']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme.colors['base-label']};
    text-align: center;
    ${mixins.fonts['text-s']}
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;

  gap: 0.4rem;

  span {
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    padding: 0.4rem 0.8rem;
    margin-bottom: 1.6rem;
    border-radius: 1rem;
    ${mixins.fonts.tag}
  }
`

export const Footer = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }

  span {
    ${mixins.fonts['text-s']}
    color: ${(props) => props.theme.colors['base-text']}
  }

  span + span {
    ${mixins.fonts['title-m']}
    color: ${(props) => props.theme.colors['base-text']}
  }
`

export const IconWrapper = styled.button`
  background-color: ${(props) => props.theme.colors['purple-dark']};

  width: 3.8rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  svg {
    fill: ${(props) => props.theme.colors.white};
  }

  transition: background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`
