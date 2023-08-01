import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/constants";
import Card from "../UI/Card";
import styles from "./AuthForm.module.scss";

type AuthFormProps = {
  children: React.ReactNode;
  formType: "login" | "register";
  onSubmit: (event: React.FormEvent) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({
  children,
  formType,
  onSubmit,
}) => {
  let additionalContent;

  if (formType === "login") {
    additionalContent = (
      <p>
        Don't have an account yet?{" "}
        <Link to={`${baseUrl}register`}>Sign Up</Link>
      </p>
    );
  } else {
    additionalContent = (
      <p>
        Already have an account? <Link to={`${baseUrl}login`}>Sign In</Link>
      </p>
    );
  }

  return (
    <Card className={styles.auth}>
      <form className={styles["auth-form"]} onSubmit={onSubmit}>
        {children}
      </form>
      {additionalContent}
    </Card>
  );
};

export default AuthForm;
