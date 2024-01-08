import { FC, FormEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/constants";
import Card from "../UI/Card";

type AuthFormProps = {
  children: ReactNode;
  formType: "login" | "register";
  onSubmit: (event: FormEvent) => void;
};

const AuthForm: FC<AuthFormProps> = ({ children, formType, onSubmit }) => {
  let additionalContent;

  if (formType === "login") {
    additionalContent = (
      <p className="mt-5 mb-1 text-center text-primary">
        Don't have an account yet?{" "}
        <Link className="ml-1 text-accent" to={`${baseUrl}register`}>
          Sign Up
        </Link>
      </p>
    );
  } else {
    additionalContent = (
      <p className="mt-5 mb-1 text-center text-primary">
        Already have an account?{" "}
        <Link className="ml-1 text-accent" to={`${baseUrl}login`}>
          Sign In
        </Link>
      </p>
    );
  }

  return (
    <Card className="p-6 mx-auto max-w-[25rem] bg-background">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {children}
      </form>
      {additionalContent}
    </Card>
  );
};

export default AuthForm;
