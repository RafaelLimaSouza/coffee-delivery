import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
        ${mixins.fonts['text-m']}
    }

    button {
        cursor: pointer;
        border: none;

        &:disabled {
            cursor: not-allowed;
        }
    }

    :focus {
        outline: none;
    }
`
