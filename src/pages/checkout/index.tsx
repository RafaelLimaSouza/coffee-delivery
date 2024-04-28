import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from '@phosphor-icons/react'

import { useForm } from 'react-hook-form'

import { useTheme } from 'styled-components'

import { Input } from '../../components/Form/Input'
import { Radio } from '../../components/Form/Radio'

import { useCart } from '../../hooks/use-Cart.hook'

import { coffees } from '../../data/products.json'

import {
  DataContainer,
  FormContainer,
  FormHeader,
  ProductsController,
  Button,
  FormControllerPayment,
  FormControllerAddress,
  CartItems,
  CartItem,
  RemoveButton,
} from './styles'
import { QuantityInput } from '../../components/Form/QuantityInput'
import { IPersonalDataValues } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const theme = useTheme()

  const navigate = useNavigate()

  const { order, addUnit, removeUnit, confirmOrder, removeItem, getTax } =
    useCart()

  const { register, watch, handleSubmit } = useForm<IPersonalDataValues>()

  function onSubmit(data: IPersonalDataValues) {
    confirmOrder(data, () => navigate('/success'))
  }

  const getProduct = (productId: string) =>
    coffees.find((item) => item.id === productId)

  const totalAmount = order.reduce(
    (acc, cur) =>
      (acc = acc + cur.quantity * (getProduct(cur.productId)?.price ?? 1)),
    0,
  )

  const paymentMode = watch('payment_type')

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <DataContainer>
        <h3>Complete seu pedido</h3>
        <FormControllerAddress>
          <FormHeader>
            <MapPin size={22} color={theme.colors['yellow-dark']} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormHeader>

          <div>
            <Input
              placeholder="CEP"
              required
              {...register('cep', {
                valueAsNumber: true,
              })}
            />

            <Input
              placeholder="Rua"
              fullWidth
              required
              {...register('street')}
            />

            <div>
              <Input
                placeholder="Numero"
                required
                {...register('number', { valueAsNumber: true })}
              />

              <Input
                placeholder="Complemento"
                fullWidth
                {...register('complement')}
              />
            </div>

            <div>
              <Input placeholder="Bairro" required {...register('district')} />

              <Input
                placeholder="Cidade"
                fullWidth
                required
                {...register('city')}
              />

              <Input placeholder="UF" size={5} required {...register('uf')} />
            </div>
          </div>
        </FormControllerAddress>

        <FormControllerPayment>
          <FormHeader>
            <CurrencyDollar size={22} color={theme.colors.purple} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormHeader>

          <div>
            <Radio
              text="CARTÃO DE CREDITO"
              id="credit-card"
              icon={<CreditCard size={16} />}
              {...register('payment_type')}
              value="credit"
              isSelected={paymentMode === 'credit'}
            />

            <Radio
              text="CARTÃO DE DÉBITO"
              id="debit-card"
              icon={<Bank size={16} />}
              {...register('payment_type')}
              value="debit"
              isSelected={paymentMode === 'debit'}
            />

            <Radio
              text="DINHEIRO"
              id="cash"
              icon={<Money size={16} />}
              {...register('payment_type')}
              value="cash"
              isSelected={paymentMode === 'cash'}
            />
          </div>
        </FormControllerPayment>
      </DataContainer>

      <DataContainer>
        <h3>Cafés selecionados</h3>
        <ProductsController>
          <CartItems>
            {order.map((item, index) => (
              <CartItem key={new Date().getTime() + index}>
                <div>
                  <img src={getProduct(item.productId)?.image} alt="" />
                  <div>
                    <span>{getProduct(item.productId)?.title}</span>
                    <div className="button-group">
                      <QuantityInput
                        increaseItem={() => addUnit(item.productId)}
                        decreaseItem={() => removeUnit(item.productId)}
                        quantity={item.quantity}
                      />
                      <RemoveButton onClick={() => removeItem(item.productId)}>
                        <Trash size={16} />
                        REMOVER
                      </RemoveButton>
                    </div>
                  </div>
                </div>
                <span>R$ {item.quantity}</span>
              </CartItem>
            ))}
          </CartItems>
          <div>
            <div>
              <span>Total de items</span>
              <span>{`R$ ${totalAmount.toFixed(2)}`}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{`R$ ${getTax()}`}</span>
            </div>

            <div>
              <span>Total</span>
              <span>{`R$ ${(totalAmount + getTax()).toFixed(2)}`}</span>
            </div>
          </div>

          <Button type="submit">Confirmar pedido</Button>
        </ProductsController>
      </DataContainer>
    </FormContainer>
  )
}
