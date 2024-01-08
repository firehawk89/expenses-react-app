import { ChangeEvent, useReducer } from "react";

enum INPUT_ACTION {
  INPUT = "USER_INPUT",
  BLUR = "INPUT_BLUR",
  CLEAR = "CLEAR_INPUT",
}

type InputAction = {
  type: INPUT_ACTION.INPUT;
  value: string;
  validate: (value: string) => boolean;
};

type BlurAction = {
  type: INPUT_ACTION.BLUR;
  validate: (value: string) => boolean;
};

type ClearAction = { type: INPUT_ACTION.CLEAR };

type Action = InputAction | BlurAction | ClearAction;

const initialState = {
  value: "",
  isValid: null,
};

const inputReducer = (
  state: {
    value: string;
  },
  action: Action
) => {
  switch (action.type) {
    case INPUT_ACTION.INPUT:
      return { value: action.value, isValid: action.validate(action.value) };
    case INPUT_ACTION.BLUR:
      return { value: state.value, isValid: action.validate(state.value) };
    case INPUT_ACTION.CLEAR:
      return initialState;
    default:
      return { value: "", isValid: false };
  }
};

const useFormControl = (validateFn: (value: string) => boolean) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchInput({
      type: INPUT_ACTION.INPUT,
      value: event.target.value,
      validate: validateFn,
    });
  };

  const handleBlur = () => {
    dispatchInput({ type: INPUT_ACTION.BLUR, validate: validateFn });
  };

  const handleClear = () => {
    dispatchInput({ type: INPUT_ACTION.CLEAR });
  };

  return {
    value: inputState.value,
    isValid: inputState.isValid,
    handleChange,
    handleBlur,
    handleClear,
  };
};

export default useFormControl;
