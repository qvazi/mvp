import { useMutation } from "@tanstack/react-query";
import { apingwebService, RegisterProps } from "../api-sevice/apingweb";

export const Register = () => {
  const registerMutation = useMutation({
    mutationFn: apingwebService.register,
  });
  const handleSubmit = (
    e: React.FormEvent<
      HTMLFormElement & Record<keyof RegisterProps, HTMLInputElement>
    >,
  ) => {
    e.preventDefault();
    registerMutation.mutate({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      name: e.currentTarget.name.value,
      phone: e.currentTarget.phone.value,
      password_confirmation: e.currentTarget.password_confirmation.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={registerMutation.isPending}>
        <label>
          Name:
          <input type="text" name="name" placeholder="name" required />
          <br />
        </label>
        <label>
          phone:
          <input type="tel" name="phone" placeholder="phone" required />
          <br />
        </label>
        <label>
          email:
          <input type="email" name="email" placeholder="email" required />
          <br />
        </label>
        <label>
          password:
          <input type="text" name="password" placeholder="password" required />
          <br />
        </label>
        <label>
          password_confirmation:
          <input
            type="text"
            name="password_confirmation"
            placeholder="password_confirmation"
            required
          />
          <br />
        </label>
        <button type="submit">Register</button>
      </fieldset>
    </form>
  );
};
