import { ChangeEvent, FC } from 'react'
import { classnames } from '../../utils/misc'

type FormControlProps = {
  label: string
  id: string
  className?: string
  type: string
  min?: string
  max?: string
  step?: string
  value?: string
  hasError?: boolean | null
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

const FormControl: FC<FormControlProps> = ({
  label,
  id,
  className,
  type,
  min,
  max,
  step,
  value,
  hasError,
  onChange,
  onBlur,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm sm:text-base font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={classnames(
          'p-2 w-full h-10 rounded-md',
          className,
          hasError && 'outline outline-2 outline-danger'
        )}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default FormControl
