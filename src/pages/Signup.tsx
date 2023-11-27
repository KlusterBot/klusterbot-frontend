import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../components/atoms";
import { AuthForm } from "../components/templates";
import { useState } from "react";
import { useFormik } from "formik";
import { signUpValidationSchema } from "../lib/utils/validationUtils";
import { signUp } from "../lib/services";
import { getError } from "../lib/utils";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const SignUp = () => {
    // const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const router = useRo
    const navigate = useNavigate();

    const {
        handleBlur,
        handleSubmit,
        resetForm,
        handleReset,
        handleChange,
        values,
        touched,
        errors,
    } = useFormik({
        initialValues,
        validationSchema: signUpValidationSchema,
        onSubmit: async () => {
            // setError('')
            setLoading(true);
            try {
                const { data, error } = await signUp(values);
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem("user", JSON.stringify(data.data));
                toast.success("Sign up successful. Set up bot to continue!");
                setLoading(false);
                resetForm();
                navigate("/setup");
            } catch (error) {
                setLoading(false);
                toast.error(getError(error));
                // setError(getError(error));
            }
        },
    });

    return (
        <AuthForm onSubmit={handleSubmit} onReset={handleReset}>
            <Input
                name="name"
                id="name"
                label="Enter Name"
                placeholder="eg. James Edison"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name ? errors.name : ""}
            />
            <Input
                name="email"
                id="email"
                label="Enter Email Address"
                placeholder="Enter Email Address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email ? errors.email : ""}
            />
            <Input
                name="password"
                id="password"
                label="Enter password"
                placeholder="Enter password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={
                    touched.password && errors.password ? errors.password : ""
                }
            />
            <Input
                name="confirmPassword"
                id="confirmPassword"
                label="Confirm password"
                placeholder="Confirm password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={
                    touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : ""
                }
            />

            {/* {error && (
        <p className="my-1 font-light text-sm text-center text-red-500">
          {error}
        </p>
      )} */}

            <Button
                loading={loading}
                type="submit"
                className="mx-auto w-full mt-6"
            >
                Sign Up
            </Button>

            <div className="flex flex-wrap justify-center items-center w-full gap-1">
                <p className="text-center">Already have an account?</p>
                <Link to="/login" className="text-dark-blue-color font-bold">
                    Login
                </Link>
            </div>

            {/* <div className="w-full grid gap-4 py-4 p-2 ">
        <p className="w-full flex items-center">
          <span className="border-t w-full" />
          <span className="mx-2">or</span>
          <span className="border-t w-full" />
        </p>

        <Button className="!border-darker-color flex items-center !border mx-auto mt-8 min-w-fit w-full bg-white text-darker-color">
          <span
            className={`bg-contain bg-[url("/icons/google_icon.png")] block bg-center aspect-square w-[18px] h-[18px]`}
          />
          <p className="mx-auto">Sign up with Google</p>
        </Button>
      </div> */}
        </AuthForm>
    );
};
