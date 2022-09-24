import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.error(errors);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          id="email"
          type="email"
          {...register("email", { required: "Email is Required" })}
        />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField
            id="firstName"
            type="text"
            {...register("firstName", { required: "First name is Required" })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField
            id="lastName"
            type="text"
            {...register("lastName", { required: "Last name is Required" })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          id="password"
          type="password"
          {...register("password", { required: "Password is Required" })}
        />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
