import styles from "./FormControl.module.scss";

type FormControlProps = {
  label: string;
  id: string;
  className?: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};

const FormControl: React.FC<FormControlProps> = ({
  label,
  id,
  className,
  type,
  min,
  max,
  step,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className={styles["form-control"]}>
      <label className={styles["form-control-label"]} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={
          className
            ? `${styles["form-control-input"]} ${className}`
            : styles["form-control-input"]
        }
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
