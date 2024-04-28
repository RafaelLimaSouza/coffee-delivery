import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { InputContainer, InputField, ErrorMessage } from './styles'
import { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  fullWidth?: boolean
  error?: FieldError
}

export const Input = forwardRef(function Input(
  { name, fullWidth = false, error, placeholder, size, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputContainer>
      <InputField
        ref={ref}
        type="text"
        name={name}
        placeholder={placeholder}
        $fullWidth={fullWidth}
        size={size}
        {...props}
      />
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : undefined}
    </InputContainer>
  )
})
