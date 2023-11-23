import * as Yup from "yup";


export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, "*Name is too short")
    .required("*Name is required"),
  email: Yup.string()
    .email("*Please enter a valid email address")
    .required("*Email is required"),
  password: Yup.string().required("*Password is required"),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("*Please enter a valid email address")
    .required("*Email is required"),
  password: Yup.string().required("*Password is required"),
});