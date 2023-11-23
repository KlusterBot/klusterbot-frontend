import { Outlet, useLocation } from "react-router";
import { Logo } from "../atoms";

const AuthLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="flex w-full sticky top-0 left-0">
        <div className="w-full flex p-[5%] py-[MAX(32px,3%)] relative  z-10">
          <Logo />

          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full mx-auto text-center grid gap-3">
            <h1 className="text-4xl font-bold text-dark-blue-color">
              {pathname.includes("login")
                ? "Sign in"
                : pathname.includes("signup")
                ? "Sign Up"
                : ""}
            </h1>
            <p className="whitespace-nowrap">Welcome!👋 Let's get started </p>
          </div>
        </div>
      </nav>
      <main className="p-[5%] py-[4%] grid relative h-full min-h-[calc(100vh-121px)] bbg-red-500">
        <section className="w-full my-[10%] md:my-0 h-auto relative z-10">
          <Outlet />
        </section>

        <span className="hidden lg:block fixed z-0 bottom-0 h-auto bg-no-repeat left-0 p-4 w-full bg-bottom bg-[url('/model.svg')] max-w-[358.944px] aspect-[358.944/540.24]" />
      </main>
    </>
  );
};

export default AuthLayout;
