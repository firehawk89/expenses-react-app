import { useState, useEffect, FC } from 'react'
import useFormControl from '../../hooks/use-form-control'
import User from '../../types/models/user-model'
import AuthForm from './AuthForm'
import FormControl from '../UI/FormControl'
import Button from '../UI/Button'

const checkInput = (value: string) => {
  return value.trim().length !== 0
}

const SignUp: FC = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    handleClear: handleEmailClear,
  } = useFormControl(checkInput)

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    handleChange: handleUsernameChange,
    handleBlur: handleUsernameBlur,
    handleClear: handleUsernameClear,
  } = useFormControl(checkInput)

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    handleClear: handlePasswordClear,
  } = useFormControl(checkInput)

  const [formIsValid, setFormIsValid] = useState<boolean | null>(false)

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && usernameIsValid && passwordIsValid)
    }, 250)

    return () => {
      clearTimeout(identifier)
    }
  }, [emailIsValid, usernameIsValid, passwordIsValid])

  const clearInputs = () => {
    handleEmailClear()
    handleUsernameClear()
    handlePasswordClear()
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    if (formIsValid) {
      const userData: User = {
        email: emailValue,
        username: usernameValue,
        password: passwordValue,
      }

      console.log(userData)

      clearInputs()
    } else if (!emailIsValid) {
      handleEmailBlur()
    } else if (!usernameIsValid) {
      handleUsernameBlur()
    } else {
      handlePasswordBlur()
    }
  }

  return (
    <AuthForm formType="register" onSubmit={submitHandler}>
      <FormControl
        label="Email"
        id="email"
        type="email"
        value={emailValue}
        hasError={emailIsValid !== null && !emailIsValid}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      <FormControl
        label="Username"
        id="username"
        type="text"
        value={usernameValue}
        hasError={usernameIsValid !== null && !usernameIsValid}
        onChange={handleUsernameChange}
        onBlur={handleUsernameBlur}
      />
      <FormControl
        label="Password"
        id="password"
        type="password"
        value={passwordValue}
        hasError={passwordIsValid !== null && !passwordIsValid}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
      />
      <Button className="mt-2 mx-auto" type="submit">
        Sign Up
      </Button>
    </AuthForm>
  )
}

export default SignUp
