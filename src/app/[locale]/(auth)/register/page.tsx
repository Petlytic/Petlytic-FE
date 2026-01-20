"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RegisterForm,
  RegisterFormData,
} from "@/components/features/Auth/RegisterForm";
import { AuthCard } from "@/components/features/Auth/AuthCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logoImage.png";

export default function RegisterPage() {
  const handleRegister = async (data: RegisterFormData) => {
    try {
      // TODO: Implement API call using data from auth.types.ts
      console.log("Register data:", data);

      // Example API call structure:
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     email: data.email,
      //     username: data.username,
      //     password: data.password,
      //   }),
      // });

      // Temporary redirect for demo
      // router.push('/login');
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE9DC] to-[#F8D5C1] p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src={logoImage}
            alt="Petlytic Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="font-bold text-3xl">
            <span className="text-brand-blue-500">Pet</span>
            <span className="text-brand-green-500">lytic</span>
          </span>
        </Link>

        {/* Register Card */}
        <AuthCard
          title="Create Account"
          description="Sign up to get started with Petlytic"
        >
          <div className="space-y-6">
            <RegisterForm onSubmit={handleRegister} />

            {/* Divider */}
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-500">
                OR
              </span>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => console.log("Google register")}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-brand-green-500 hover:text-brand-green-600 hover:underline"
              >
                Sign in
              </Link>
            </p>

            {/* Terms and Privacy */}
            <p className="text-center text-xs text-gray-500">
              By signing up, you agree to our{" "}
              <Link
                href="/terms"
                className="text-brand-green-500 hover:text-brand-green-600 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-brand-green-500 hover:text-brand-green-600 hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </div>
  );
}
