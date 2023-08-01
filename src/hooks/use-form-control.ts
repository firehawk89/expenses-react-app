import { useReducer } from "react";

enum InputActionType {
  INPUT = "USER_INPUT",
  BLUR = "INPUT_BLUR",
  CLEAR = "CLEAR_INPUT",
}

type InputAction = {
  type: InputActionType.INPUT;
  value: string;
  validate: (value: string) => boolean;
};
type BlurAction = {
  type: InputActionType.BLUR;
  validate: (value: string) => boolean;
};
type ClearAction = { type: InputActionType.CLEAR };
type FormInputActions = InputAction | BlurAction | ClearAction;

const initialState = {
  value: "",
  isValid: null,
};

const inputReducer = (
  state: {
    value: string;
  },
  action: FormInputActions
) => {
  switch (action.type) {
    case InputActionType.INPUT:
      return { value: action.value, isValid: action.validate(action.value) };
    case InputActionType.BLUR:
      return { value: state.value, isValid: action.validate(state.value) };
    case InputActionType.CLEAR:
      return initialState;
    default:
      return { value: "", isValid: false };
  }
};

const useFormControl = (validateFn: (value: string) => boolean) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initialState);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchInput({
      type: InputActionType.INPUT,
      value: event.target.value,
      validate: validateFn,
    });
  };

  const inputBlurHandler = () => {
    dispatchInput({ type: InputActionType.BLUR, validate: validateFn });
  };

  const inputClearHandler = () => {
    dispatchInput({ type: InputActionType.CLEAR });
  };

  return {
    value: inputState.value,
    isValid: inputState.isValid,
    inputChangeHandler,
    inputBlurHandler,
    inputClearHandler,
  };
};

export default useFormControl;
