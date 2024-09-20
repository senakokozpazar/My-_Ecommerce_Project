import useAxios, { REQ_TYPES } from "@/hooks/useAxios";
import { fetchRoles } from "@/redux/clientSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();
  const [selectedRole, setSelectedRole] = useState(3);
  const [storeFields, setStoreFields] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  //const { doRequest: fetchRoles, data: roles } = useAxios([]);

  const { doRequest: onSubmit, loading: submitting, error } = useAxios([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: 3,
      store: {
        name: "",
        phone: "",
        tax_no: "",
        bank_account: "",
      },
    },
  });

  /*useEffect(() => {
    fetchRoles({
      reqType: REQ_TYPES.GET,
      endpoint: "/roles",
    });
  }, []); */

  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles || []);
  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const handlePostSubmit = async (data) => {
    if (selectedRole !== 2) {
      delete data.store;
    }

    onSubmit({
      reqType: REQ_TYPES.POST,
      endpoint: "/signup",
      payload: {
        role_id: selectedRole,
        password: data.password,
        name: data.name,
        email: data.email,
      },
    })
      .then(() => {
        console.log("Success");
        reset();
        history.goBack();
        alert(
          "You need to click the link in the email to activate your account!",
        );
      })
      .catch((err) => {
        alert(err);
        history.goBack();
      });
  };

  const handleRoleChange = (event) => {
    const roleId = event.target.value;
    setSelectedRole(roleId);
    console.log(roleId);
    if (roleId == 2) {
      setStoreFields(true);
      console.log(storeFields);
    } else {
      setStoreFields(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="mx-auto mt-10 flex max-w-md flex-col items-center justify-center rounded bg-white p-4 pb-8 pt-6 font-montserrat shadow-md">
      <h1 className="p-4 text-center text-2xl font-bold text-[#23A6F0]">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(handlePostSubmit)}>
        <div className="mb-4">
          <label
            className="my-5 block text-sm font-bold text-[#23A6F0]"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min length is 3" },
            })}
            placeholder="Your Name"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="my-5 block text-sm font-bold text-[#23A6F0]"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="my-5 block text-sm font-bold text-[#23A6F0]"
            htmlFor="password"
          >
            Password:
          </label>
          <div className="flex gap-3">
            {" "}
            <input
              type={passwordVisible ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d@$!%*#?&.]{8,}$/,

                  message:
                    "Password must be at least 8 characters, including numbers, lower case, upper case and special characters",
                },
              })}
              placeholder="Password"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <i class="fa-solid fa-eye-slash"></i>
              ) : (
                <i class="fa-regular fa-eye"></i>
              )}
            </button>
          </div>

          {errors.password && (
            <p className="text-xs text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="my-5 block text-sm font-bold text-[#23A6F0]"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <div className="flex gap-3">
            {" "}
            <input
              type={passwordVisible ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password"),
              })}
              placeholder="Confirm Password"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-sm"
            >
              {passwordVisible ? (
                <i class="fa-solid fa-eye-slash"></i>
              ) : (
                <i class="fa-regular fa-eye"></i>
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-xs text-red-600">Passwords do not match</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="my-5 block text-sm font-bold text-[#23A6F0]"
            htmlFor="role"
          >
            Role:
          </label>
          <select
            {...register("role_id")}
            value={selectedRole}
            onChange={handleRoleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
          >
            {roles.length === 0 ? (
              <option value="">Loading roles...</option>
            ) : (
              roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))
            )}
          </select>
        </div>

        {storeFields && (
          <div>
            <div className="mb-4">
              <label
                className="my-5 block text-sm font-bold text-[#23A6F0]"
                htmlFor="storeName"
              >
                Store Name:
              </label>
              <input
                type="text"
                {...register("store.name", {
                  required: storeFields ? "Store Name is required" : false,
                  minLength: { value: 3, message: "Min length is 3" },
                })}
                placeholder="Store Name"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
              />
              {errors.store?.name && (
                <p className="text-xs text-red-600">
                  {errors.store.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="my-5 block text-sm font-bold text-[#23A6F0]"
                htmlFor="storePhone"
              >
                Store Phone:
              </label>
              <input
                type="text"
                {...register("store.phone", {
                  required: storeFields ? "Store Phone is required" : false,
                  pattern: {
                    value: /^(\+90\s?)?(5\d{2}|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    message: "Invalid phone number",
                  },
                })}
                placeholder="Store Phone"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
              />
              {errors.store?.phone && (
                <p className="text-xs text-red-600">
                  {errors.store.phone.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="my-5 block text-sm font-bold text-[#23A6F0]"
                htmlFor="storeTaxID"
              >
                Store Tax ID:
              </label>
              <input
                type="text"
                {...register("store.tax_no", {
                  required: storeFields ? "Store Tax ID is required" : false,
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Invalid tax ID",
                  },
                })}
                placeholder="Store Tax ID"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
              />
              {errors.store?.tax_no && (
                <p className="text-xs text-red-600">
                  {errors.store.tax_no.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="my-5 block text-sm font-bold text-[#23A6F0]"
                htmlFor="storeBankAccount"
              >
                Store Bank Account:
              </label>
              <input
                type="text"
                {...register("store.bank_account", {
                  required: storeFields
                    ? "Store Bank Account is required"
                    : false,
                  pattern: {
                    value: /^[A-Z]{2}\d{2}[A-Z0-9]{4}\d{7}([A-Z0-9]?){0,16}$/,
                    message: "Invalid bank account",
                  },
                })}
                placeholder="Store Bank Account"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
              />
              {errors.store?.bank_account && (
                <p className="text-xs text-red-600">
                  {errors.store.bank_account.message}
                </p>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="focus:shadow-outline w-full rounded bg-[#23A6F0] px-4 py-2 font-bold text-white hover:bg-[#1a73e8] focus:outline-none"
        >
          {submitting ? (
            <span>
              Submitting... <i className="fas fa-spinner fa-spin"></i>
            </span>
          ) : (
            "Sign Up"
          )}
        </button>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </form>
      <p className="mt-5 text-center text-sm text-gray-600">
        Already have an account?
        <span>
          <Link
            to="/login"
            className="ml-2 text-[#23A6F0] hover:text-[#1a73e8]"
          >
            Log in now!
          </Link>
        </span>
      </p>
    </div>
  );
};

export default SignUp;
