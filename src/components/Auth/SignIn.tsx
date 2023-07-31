import AuthForm from "./AuthForm";
import FormControl from "../UI/FormControl";
import Button from "../UI/Button";
import styles from "./AuthForm.module.scss";

const SignIn: React.FC = () => {
  return (
    <AuthForm formType="login">
      <FormControl label="Username" id="username" type="text" />
      <FormControl label="Password" id="password" type="password" />
      <Button className={styles["auth-form-btn"]} type="submit">
        Sign In
      </Button>
    </AuthForm>
  );
};

export default SignIn;
