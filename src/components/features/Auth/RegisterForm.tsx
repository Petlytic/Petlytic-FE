"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, User } from "lucide-react";
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

const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    username: z.string().min(1, "Username is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsPending(true);
      // TODO: Implement registration logic
      console.log("Register data:", data);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-foreground">Sign Up</h1>
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

          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type="text"
                      placeholder="Username"
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

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="h-11 bg-input-background px-4 pr-10 focus-visible:border-brand-green-500"
                      disabled={isPending}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? (
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

          <Button
            type="submit"
            className="cursor-pointer w-full h-11 bg-brand-blue-500 hover:bg-brand-blue-500/80 text-white font-semibold rounded-lg"
            disabled={isPending}
          >
            {isPending ? "Creating account..." : "Create Account"}
          </Button>
        </form>
      </Form>

      {/* Divider */}
      <div className="relative flex items-center py-2">
        <div className="flex-grow border-t border-border"></div>
        <span className="mx-4 text-xs text-muted-foreground bg-card px-2">
          Or sign up with
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

      {/* Login Link */}
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-brand-yellow-darker hover:text-yellow-500 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}