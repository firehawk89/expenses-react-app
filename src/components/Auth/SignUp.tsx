import AuthForm from "./AuthForm";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import styles from "./AuthForm.module.scss";

const SignUp: React.FC = () => {
  return (
    <AuthForm formType="register">
      <FormControl label="Email" id="email" type="email" />
      <FormControl label="Username" id="username" type="text" />
      <FormControl label="Password" id="password" type="password" />
      <Button className={styles["auth-form-btn"]} type="submit">
        Sign Up
      </Button>
    </AuthForm>
  );
};

export default SignUp;
