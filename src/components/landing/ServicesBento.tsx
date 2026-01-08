"use client";

import Link from "next/link";
import vetServiceIcon from "@/assets/vetServiceIcon.png";
import petSpaIcon from "@/assets/petSpaIcon.png";
import petHotelIcon from "@/assets/petHotelIcon.png";
import Image from "next/image";

export const ServicesBento = () => {
  const services = {
    vet: {
      href: "/booking",
      bgColor: "bg-orange-100 hover:bg-orange-200",
      title: "Vet Services",
      desc: "Health consulting",
    },
    spa: {
      href: "/booking",
      bgColor: "bg-blue-100 hover:bg-blue-200",
      title: "Pet Spa",
      desc: "Wellness relaxing",
    },
    hotel: {
      href: "/booking",
      bgColor: "bg-green-100 hover:bg-green-200",
      title: "Pet Hotel",
      desc: "Comfortable staying",
    },
  };

  const cardClass =
    "rounded-3xl p-12 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] flex items-center gap-6 h-full";

  return (
    <section className="py-16 ">
      {" "}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-stretch">
          <Link href={services.vet.href} className="block h-full">
            <div className={`${services.vet.bgColor} ${cardClass}`}>
              <div className="shrink-0 border border-black/10 rounded-full p-2">
                <Image
                  src={vetServiceIcon}
                  alt={services.vet.title}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 text-gray-900">
                  {services.vet.title}
                </h3>
                <p className="text-sm font-bold text-gray-800 opacity-70">
                  {services.vet.desc}
                </p>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-6 h-full">
            <Link href={services.spa.href} className="flex-1">
              <div className={`${services.spa.bgColor} ${cardClass}`}>
                <div className="shrink-0">
                  <Image
                    src={petSpaIcon}
                    alt={services.spa.title}
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">
                    {services.spa.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-800 opacity-70">
                    {services.spa.desc}
                  </p>
                </div>
              </div>
            </Link>

            <Link href={services.hotel.href} className="flex-1">
              <div
                className={`${services.hotel.bgColor} ${cardClass} justify-end`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">
                    {services.hotel.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-800 opacity-70">
                    {services.hotel.desc}
                  </p>
                </div>
                <div className="shrink-0">
                  <Image
                    src={petHotelIcon}
                    alt={services.hotel.title}
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
