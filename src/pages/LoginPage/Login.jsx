import { login, setUser } from "@/redux/clientSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors?.email && <p>Email is required</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
          />
          {errors?.password && <p>Password is required</p>}
        </div>
        <div>
          <label>
            <input type="checkbox" {...register("rememberMe")} />
            Remember me
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
