import { InputHTMLAttributes, LegacyRef, ReactNode, forwardRef } from 'react'
import { RadioContainer, RadioInput } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  icon: ReactNode
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { id, isSelected, text, icon, ...props }: RadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioContainer htmlFor={id} $isSelected={isSelected}>
      {icon}
      {text}
      <RadioInput type="radio" id={id} ref={ref} {...props} />
    </RadioContainer>
  )
})
