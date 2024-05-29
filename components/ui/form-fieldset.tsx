interface FormFieldSetProps {
  children: React.ReactNode
  disabled: boolean
}

const FormFieldSet = ({ children, disabled }: FormFieldSetProps) => {
  return (
    <fieldset
      disabled={disabled}
      className="disabled:opacity-80 disabled:pointer-events-none"
    >
      {children}
    </fieldset>
  )
}

export default FormFieldSet
