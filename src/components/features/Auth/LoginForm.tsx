"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import google from "@/assets/icons/google.svg";
import facebook from "@/assets/icons/facebook.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending } = useLogin();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Header: Logo & Title */}
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-foreground">Sign In</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    {/* <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /> */}
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email Address"
                      className="h-11 bg-input-background px-4 focus-visible:border-brand-green-500"
                      disabled={isPending}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    {/* <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /> */}
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="h-11 bg-input-background px-4 pr-10 focus-visible:border-brand-green-500"
                      disabled={isPending}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-brand-blue-500 hover:text-brand-blue-dark hover:underline"
            >
              Forgot Password ?
            </Link>
          </div>

          <Button
            type="submit"
            className="cursor-pointer w-full h-11 bg-brand-blue-500 hover:bg-brand-blue-500/80 lue- text-white font-semibold rounded-lg"
            disabled={isPending}
          >
            {isPending ? "Starting..." : "Let's get started !"}
          </Button>
        </form>
      </Form>

      {/* Divider */}
      <div className="relative flex items-center py-2">
        <div className="flex-grow border-t border-border"></div>
        <span className="mx-4 text-xs text-muted-foreground bg-card px-2">
          If feeling lazy ?
        </span>
        <div className="flex-grow border-t border-border"></div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {/* Facebook */}
        <Button
          variant="outline"
          className="cursor-pointer h-10 border-none bg-[#3F51B5] text-white
               hover:bg-[#3F51B5]/90 hover:text-white focus:text-white
               flex items-center justify-center gap-2
               text-xs"
        >
          <Image src={facebook} alt="Facebook Logo" width={16} height={16} />

          <span className="hidden lg:inline">Continue with Facebook</span>

          <span className="lg:hidden">Facebook</span>
        </Button>

        {/* Google */}
        <Button
          variant="outline"
          className="cursor-pointer h-10 border-none bg-[#db4437] text-white
               hover:bg-[#db4437]/90 hover:text-white focus:text-white
               flex items-center justify-center gap-2
               text-xs"
        >
          <Image src={google} alt="Google Logo" width={16} height={16} />

          <span className="hidden lg:inline">Continue with Google</span>

          <span className="lg:hidden">Google</span>
        </Button>
      </div>

      {/* Register Link */}
      <p className="text-center text-sm text-muted-foreground">
        Not a member ?{" "}
        <Link
          href="/register"
          className="font-bold text-brand-yellow-darker hover:text-yellow-500 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
