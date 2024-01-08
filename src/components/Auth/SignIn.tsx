import { useState, useEffect, FC } from "react";
import useFormControl from "../../hooks/use-form-control";
import User from "../../models/user-model";
import AuthForm from "./AuthForm";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";

const checkInput = (value: string) => {
  return value.trim().length !== 0;
};

const SignIn: FC = () => {
  const {
    value: usernameValue,
    isValid: usernameIsValid,
    inputChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    inputClearHandler: usernameClearHandler,
  } = useFormControl(checkInput);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    inputClearHandler: passwordClearHandler,
  } = useFormControl(checkInput);

  const [formIsValid, setFormIsValid] = useState<boolean | null>(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(usernameIsValid && passwordIsValid);
    }, 250);

    return () => {
      clearTimeout(identifier);
    };
  }, [usernameIsValid, passwordIsValid]);

  const clearInputs = () => {
    usernameClearHandler();
    passwordClearHandler();
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (formIsValid) {
      const userData: User = {
        username: usernameValue,
        password: passwordValue,
      };

      console.log(userData);

      clearInputs();
    } else if (!usernameIsValid) {
      usernameBlurHandler();
    } else {
      passwordBlurHandler();
    }
  };

  return (
    <AuthForm formType="login" onSubmit={submitHandler}>
      <FormControl
        label="Username"
        id="username"
        type="text"
        value={usernameValue}
        hasError={usernameIsValid !== null && !usernameIsValid}
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
      />
      <FormControl
        label="Password"
        id="password"
        type="password"
        value={passwordValue}
        hasError={passwordIsValid !== null && !passwordIsValid}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
      <Button className="mt-2 mx-auto" type="submit">
        Sign In
      </Button>
    </AuthForm>
  );
};

export default SignIn;
