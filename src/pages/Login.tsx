import { useMutation } from "@tanstack/react-query";
import { apingwebService } from "../api-sevice/apingweb";

export const Login = () => {
  const loginMutation = useMutation({
    mutationFn: apingwebService.login,
  });
  const handleSubmit = (
    e: React.FormEvent<
      HTMLFormElement & { email: HTMLInputElement; password: HTMLInputElement }
    >,
  ) => {
    e.preventDefault();
    loginMutation.mutate({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={loginMutation.isPending}>
        <input type="text" name="email" placeholder="email" required />
        <input type="text" name="password" placeholder="password" required />
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};
