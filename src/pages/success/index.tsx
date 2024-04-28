import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'

import { useTheme } from 'styled-components'

import successImage from '../../assets/success-image.png'

import { SuccessContainer, Wrapper, BoxInfo, WrapperIcon } from './styles'
import { useCart } from '../../hooks/use-Cart.hook'

export function Success() {
  const theme = useTheme()

  const { bill } = useCart()

  const getPaymentTypeLabel = (type: string) => {
    if (type === 'credit') return 'Cartão de Crédito'

    if (type === 'debit') return 'Cartão de Dédito'

    if (type === 'cash') return 'Dinheiro'

    return ''
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>

      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Wrapper>
        <BoxInfo>
          <div>
            <WrapperIcon $backgroundColor={theme.colors.purple}>
              <MapPin size={16} weight="fill" />
            </WrapperIcon>
            <div>
              <span>
                Entrega em{' '}
                <address>
                  <strong>{`${bill.personalInfo?.street}, ${bill.personalInfo?.number}`}</strong>
                </address>
              </span>
              <span>{`${bill.personalInfo?.district} - ${bill.personalInfo?.city}, ${bill.personalInfo?.uf}`}</span>
            </div>
          </div>

          <div>
            <WrapperIcon $backgroundColor={theme.colors.yellow}>
              <Timer size={16} weight="fill" />
            </WrapperIcon>
            <div>
              <span>Previsao de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>

          <div>
            <WrapperIcon $backgroundColor={theme.colors['yellow-dark']}>
              <CurrencyDollar size={16} />
            </WrapperIcon>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>
                  {getPaymentTypeLabel(bill.personalInfo?.payment_type ?? '')}
                </strong>
              </span>
            </div>
          </div>
        </BoxInfo>

        <img
          src={successImage}
          alt="Homem pilotando uma scooter com uma sacola acima do bau"
        />
      </Wrapper>
    </SuccessContainer>
  )
}
