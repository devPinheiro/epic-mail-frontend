import * as Yup from "yup";

export const SignUpValidator = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  password: Yup.string().min(8, "Password must be greater than 8 characters"),
  recoveryEmail: Yup.string()
    .email()
    .required("Recovery Email is required")
});
