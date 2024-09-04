import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export const SignUp = () => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [storeFields, setStoreFields] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  const fetchRoles = async () => {
    try {
      const response = await axiosInstance.get("/roles");
      setRoles(response.data);
      setSelectedRole(response.data[2]?.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);

    if (selectedRole !== 2) {
      delete data.store;
    }

    try {
      await axiosInstance.post("/signup", {
        role_id: selectedRole,
        password: data.password,
        name: data.name,
        email: data.email,
      });
      reset();
      history.goBack();
      alert(
        "You need to click the link in the email to activate your account!",
      );
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-5"
    >
      <label>Name:</label>
      <input
        type="text"
        {...register("name", {
          required: "Name is required",
          minLength: { value: 3, message: "Min length is 3" },
        })}
        placeholder="Your Name"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Email:</label>
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
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password:</label>
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
      {errors.password && <p>{errors.password.message}</p>}

      <label>Confirm Password:</label>
      <input
        type={passwordVisible ? "text" : "password"}
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) => value === watch("password"),
        })}
        placeholder="Confirm Password"
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
      {errors.confirmPassword && <p>Passwords do not match</p>}

      <label>Role:</label>

      <select
        {...register("role_id")}
        value={selectedRole}
        onChange={handleRoleChange}
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

      {storeFields && (
        <div>
          <label>Store Name:</label>
          <input
            type="text"
            {...register("store.name", {
              required: storeFields ? "Store Name is required" : false,
              minLength: { value: 3, message: "Min length is 3" },
            })}
            placeholder="Store Name"
          />
          {errors.store?.name && <p>{errors.store.name.message}</p>}

          <label>Store Phone:</label>
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
          />
          {errors.store?.phone && <p>{errors.store.phone.message}</p>}

          <label>Store Tax ID:</label>
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
          />
          {errors.store?.tax_no && <p>{errors.store.tax_no.message}</p>}

          <label>Store Bank Account:</label>
          <input
            type="text"
            {...register("store.bank_account", {
              required: storeFields ? "Store Bank Account is required" : false,
              pattern: {
                value: /^[A-Z]{2}\d{2}[A-Z0-9]{4}\d{7}([A-Z0-9]?){0,16}$/,
                message: "Invalid bank account",
              },
            })}
            placeholder="Store Bank Account"
          />
          {errors.store?.bank_account && (
            <p>{errors.store.bank_account.message}</p>
          )}
        </div>
      )}

      <button type="submit" disabled={submitting}>
        {submitting ? (
          <span>
            Submitting... <i className="fas fa-spinner fa-spin"></i>
          </span>
        ) : (
          "Sign Up"
        )}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SignUp;
