import { useState } from "react";
import { Button, Input } from "../components/atoms";
import { AuthForm } from "../components/templates";
import { useFormik } from "formik";
import { signInValidationSchema } from "../lib/utils/validationUtils";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../lib/services";
import toast from "react-hot-toast";
import { getError } from "../lib/utils";

const initialValues = {
  email: "",
  password: "",
};

export const Login = () => {
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: signInValidationSchema,
      onSubmit: async () => {
        setLoading(true);
        try {
          const { data, error } = await login(values);
          if (error) {
            throw new Error(error);
          }
          if (data) {
            console.log({ data });
            toast.success("Login successful.");
            setLoading(false);
            !data.verified ? navigate("/setup") : navigate("/dashboard");
          }
        } catch (error) {
          setLoading(false);
          toast.error(getError(error));
          // setError(getError(error));
        }
      },
    });

  return (
    <AuthForm onSubmit={handleSubmit}>
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
        error={touched.password && errors.password ? errors.password : ""}
      />

      {/* {error && <p className="my-1 text-center text-red-500">{error}</p>} */}

      <Button loading={loading} type="submit" className="mx-auto w-full mt-6">
        Log in
      </Button>

      <div className="flex flex-wrap justify-center items-center w-full gap-1">
        <p className="text-center">Don't have account? Create one</p>
        <Link to="/signup" className="text-dark-blue-color font-bold">
          Here
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
          <p className="mx-auto">Sign in with Google</p>
        </Button>
      </div> */}
    </AuthForm>
  );
};
