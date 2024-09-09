import { login, setUser } from "@/redux/clientSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      rememberMe: false,
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data));
      history.goBack() || history.push("/");
      toast.success("Login successful");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded bg-white p-4 pb-8 pt-6 font-montserrat shadow-md">
      <h1 className="p-4 text-center text-2xl font-bold text-[#23A6F0]">
        Welcome to Bandage
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="my-5 block text-sm font-bold text-[#23A6F0]"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          />
          {errors?.email && (
            <p className="text-xs text-red-600">Email is required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="my-5 block text-sm font-bold text-[#23A6F0]"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          />
          {errors?.password && (
            <p className="text-xs text-red-600">Password is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="mt-5 block text-sm font-bold text-[#23A6F0]">
            <input
              type="checkbox"
              className="mr-2"
              {...register("rememberMe")}
            />
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-#23A6F0 hover:bg-#1a73e8 focus:shadow-outline w-full rounded px-4 py-2 font-bold text-white focus:outline-none"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-gray-600">
        Don't have an account?
        <span>
          <Link
            to="/register"
            className="hover:text-#1a73e8 ml-2 text-[#23A6F0]"
          >
            Create one now!
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
