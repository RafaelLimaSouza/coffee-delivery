import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { useTheme } from 'styled-components'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from '@phosphor-icons/react'

import { Input } from '../../components/Form/Input'
import { Radio } from '../../components/Form/Radio'
import { QuantityInput } from '../../components/Form/QuantityInput'

import { IPersonalDataValues } from '../../contexts/cart.context'
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
  ErrorMessage,
} from './styles'

const formSchema = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number({ invalid_type_error: 'Informe o cep' }),
  complement: z.string().nullable(),
  district: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe a UF'),
  payment_type: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof formSchema>

export function Checkout() {
  const theme = useTheme()

  const navigate = useNavigate()

  const { order, addUnit, removeUnit, confirmOrder, removeItem, getTax } =
    useCart()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IPersonalDataValues>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data: IPersonalDataValues) {
    if (order.length === 0) {
      throw Error('Pelo menos um item é obrigatório')
      return
    }

    confirmOrder(data, () => navigate('/success'))
  }

  const getProduct = (productId: string) =>
    coffees.find((item) => item.id === productId)

  const totalAmount = order.reduce(
    (acc, cur) =>
      (acc += cur.quantity * (getProduct(cur.productId)?.price ?? 1)),
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
              {...register('cep', {
                valueAsNumber: true,
              })}
              error={errors.cep}
            />

            <Input
              placeholder="Rua"
              fullWidth
              {...register('street')}
              error={errors.street}
            />

            <div>
              <Input
                placeholder="Numero"
                {...register('number', { valueAsNumber: true })}
                error={errors.number}
              />

              <Input
                placeholder="Complemento"
                fullWidth
                {...register('complement')}
                error={errors.complement}
              />
            </div>

            <div>
              <Input
                placeholder="Bairro"
                {...register('district')}
                error={errors.district}
              />

              <Input
                placeholder="Cidade"
                fullWidth
                {...register('city')}
                error={errors.city}
              />

              <Input
                placeholder="UF"
                size={5}
                {...register('uf')}
                error={errors.uf}
              />
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

          {errors.payment_type && (
            <ErrorMessage>{errors.payment_type?.message}</ErrorMessage>
          )}
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
                <span>R$ {getProduct(item.productId)?.price?.toFixed(2)}</span>
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
