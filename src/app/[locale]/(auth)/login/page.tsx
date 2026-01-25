import Image from "next/image";
import logo from "@/assets/petlytic.png";
import { LoginForm } from "@/components/features/Auth/LoginForm";
import { BackgroundCircles } from "./background-circle";
import { BrandingPanel } from "./branding-pannel";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-yellow-light p-4 sm:p-6 lg:p-8">
      <BackgroundCircles />

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl bg-card shadow-2xl md:grid-cols-2">
        {/* Desktop language switch */}
        <div className="absolute right-4 top-4 z-20 hidden md:block">
          <div className="flex items-center gap-2 rounded-full bg-muted/80 px-3 py-1 text-xs cursor-pointer hover:bg-muted">
            <span>🇻🇳</span>
            <span className="font-bold text-muted-foreground">VN</span>
          </div>
        </div>

        {/* Left */}
        <BrandingPanel />

        {/* Right */}
        <div className="relative flex flex-col items-center justify-center bg-card px-6 py-8 md:px-12">
          {/* Logo */}
          <div className="hidden md:block absolute top-6 left-6 z-20">
            <Image
              src={logo}
              alt="Petlytic Logo"
              width={100}
              height={100}
              className="w-8 h-8 md:w-auto object-contain"
            />
          </div>

          <LoginForm />

          {/* Mobile language switch */}
          <div className="mt-6 md:hidden">
            <div className="flex items-center gap-2 rounded-full bg-muted/80 px-4 py-2 text-xs cursor-pointer hover:bg-muted">
              <span>🇻🇳</span>
              <span className="font-bold text-muted-foreground">VN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
