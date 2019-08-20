import * as Yup from "yup";

export const SignUpValidator = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  password: Yup.string().min(8, "Password must be greater than 8 characters")
});

export const LoginValidator = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  password: Yup.string().min(8, "Password must be greater than 8 characters")
});

export const mailValidator = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  mail_body: Yup.string().min(8, "Message must be at least 8 characters"),
  subject: Yup.string().min(3, "Subject must be at least 8 characters")
});

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
