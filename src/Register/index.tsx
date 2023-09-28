import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Textfield } from "@/shared/components";
import { registerMutation, TRegisterPayload } from "./api";

const initialForm: TRegisterPayload = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
  password1: "",
};
const schema = yup.object({
  first_name: yup.string().required().min(3),
  last_name: yup.string().required().min(3),
  email: yup.string().required().email(),
  username: yup.string().required().min(3),
  password: yup.string().required().min(8),
  password1: yup.string().required().min(8),
});

const Register = () => {
  const { handleSubmit, control, formState } = useForm({
    defaultValues: initialForm,
    resolver: yupResolver(schema),
  });
  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation({
    mutationFn: registerMutation,
  });

  const { errors } = formState;

  const onSubmit = (data: TRegisterPayload) => {
    register(data);
  };

  return (
    <form
      className="flex flex-col gap-6 p-6 pt-48 max-w-lg mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {typeof error === "string" ? <span>{error}</span> : null}
      <h1 className="text-4xl font-medium text-center uppercase mb-12">
        Ro'yhatdan o'tish
      </h1>
      <Controller
        name="first_name"
        control={control}
        render={({ field }) => (
          <div>
            <Textfield placeholder="First name" {...field} />
            <span className="block text-red-400 text-sm mt-2">
              {errors.first_name ? errors.first_name.message : null}
            </span>
          </div>
        )}
      />
      <Controller
        name="last_name"
        control={control}
        render={({ field }) => (
          <div>
            <Textfield placeholder="Last name" {...field} />
            <span className="block text-red-400 text-sm mt-2">
              {errors.last_name ? errors.last_name.message : null}
            </span>
          </div>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div>
            <Textfield placeholder="Email" {...field} />
            <span className="block text-red-400 text-sm mt-2">
              {errors.email ? errors.email.message : null}
            </span>
          </div>
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <div>
            <Textfield placeholder="Username" {...field} />
            <span className="block text-red-400 text-sm mt-2">
              {errors.username ? errors.username.message : null}
            </span>
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div>
            <Textfield type="password" placeholder="Password" {...field} />
            <span className="block text-red-400 text-sm mt-2">
              {errors.password ? errors.password.message : null}
            </span>
          </div>
        )}
      />
      <Controller
        name="password1"
        control={control}
        render={({ field }) => (
          <div>
            <Textfield
              type="password"
              placeholder="Confirm password"
              {...field}
            />
            <span className="block text-red-400 text-sm mt-2">
              {errors.password1 ? errors.password1.message : null}
            </span>
          </div>
        )}
      />
      <Button type="submit" disabled={isLoading}>
        Davom etish
      </Button>
    </form>
  );
};

export default Register;
