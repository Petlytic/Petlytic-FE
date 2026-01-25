import Image from "next/image";
import dogLogin from "@/assets/dogLogin.png";
import logo from "@/assets/petlytic.png";

export function RegisterBrandingPanel() {
  return (
    <div className="relative flex flex-col items-center justify-between overflow-hidden bg-brand-blue-500 md:pt-16 text-white md:items-start md:px-10">
      <div className="z-10 text-center md:text-left">
        {/* Logo */}
        <div className="md:hidden flex justify-center align-center mt-3">
          <Image
            src={logo}
            alt="Petlytic Logo"
            priority
            className="w-30 h-15 object-contain"
          />
        </div>
        <h2 className="mb-2 text-3xl font-bold lg:text-4xl">
          Welcome to Petlytic
        </h2>
        <p className="text-lg opacity-90">
          For better experience with your pets!
        </p>
      </div>

      {/* Decorators */}
      <div className="absolute right-8 top-8 h-8 w-8 rounded-full bg-brand-orange-300" />
      <div className="absolute left-6 top-1/3 h-12 w-12 rounded-full bg-brand-orange-300" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 h-16 w-16 rounded-full bg-brand-orange-300" />

      {/* Dog Login */}
      <div className="relative mt-auto hidden w-full justify-center md:flex">
        <Image
          src={dogLogin}
          alt="Petlytic Dog"
          priority
          className="w-[90%] max-w-[300px] object-contain object-bottom translate-y-1"
        />
      </div>
    </div>
  );
}
