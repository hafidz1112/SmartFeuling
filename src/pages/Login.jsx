import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LogoPertamina from "/public/Pertamina_Logo.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useToast } from "../helper/use-toast";

export function LoginPage({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleAccount = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      showToast("Email and Password is required", "warning", 3000);
      return;
    }

    if (email === "admin@gmail.com" && password === "123") {
      showToast(
        "Login successful! Redirecting to dashboard...",
        "success",
        3000
      );
      // Delay navigation untuk menampilkan toast
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      showToast("Login failed - Invalid email or password", "error", 4000);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center w-full justify-center">
              <img src={LogoPertamina} alt="" />
            </div>
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>Login with your Account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAccount}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Login
                  </Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account? <a href="#">Sign up</a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
        <FieldDescription className="px-6 text-center">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </FieldDescription>
      </div>
    </section>
  );
}
