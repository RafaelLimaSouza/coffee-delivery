import { render } from '@testing-library/react'
import { Radio } from '.'
import { defaultTheme } from '../../../styles/themes/default'
import { ThemeProvider } from 'styled-components'

describe('Radio', () => {
  it('should be able to display a icon', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Radio text="Cartao de Credito" icon={<svg />} isSelected />
      </ThemeProvider>,
    )

    const icon = wrapper.container.children[0].firstChild?.nodeName

    expect(icon).toEqual('svg')
  })

  it('should be able to display a text', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Radio text="Cartao de Credito" icon={<svg />} isSelected />
      </ThemeProvider>,
    )

    const text = wrapper.getByText('Cartao de Credito')

    expect(text).toBeVisible()
  })

  it('should be with purple color when selected', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Radio
          text="Cartao de Credito"
          icon={<svg />}
          isSelected
          data-testid="radio"
        />
      </ThemeProvider>,
    )

    const radio = wrapper.getByText('Cartao de Credito')

    const purpleColor = defaultTheme.colors.purple

    expect(radio).toHaveStyleRule('border', `1px solid ${purpleColor}`)
  })
})
