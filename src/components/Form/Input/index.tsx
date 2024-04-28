import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { InputField } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
}

export const Input = forwardRef(function Input(
  { name, placeholder, fullWidth = false, size, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputField
      ref={ref}
      type="text"
      name={name}
      placeholder={placeholder}
      $fullWidth={fullWidth}
      size={size}
      {...props}
    />
  )
})
