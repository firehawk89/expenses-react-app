import { ChangeEvent, FC } from "react";

type FormControlProps = {
  label: string;
  id: string;
  className?: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  value?: string;
  hasError?: boolean | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};

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
  let inputClassName;

  if (hasError) {
    inputClassName = className
      ? `p-2 w-full h-10 text-dark rounded-md outline outline-2 outline-danger ${className}`
      : "p-2 w-full h-10 text-dark rounded-md outline outline-2 outline-danger";
  } else {
    inputClassName = className
      ? `p-2 w-full h-10 text-dark rounded-md ${className}`
      : "p-2 w-full h-10 text-dark rounded-md";
  }

  return (
    <div>
      <label
        className="mb-2 block text-sm sm:text-base font-bold text-dark"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className={inputClassName}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default FormControl;
