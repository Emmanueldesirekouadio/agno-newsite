import Image from "next/image";

export default function LogoSlider() {
  return (
    <div className="relative overflow-hidden">
      {/* Ombre à gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#d98200] via-[#d98200]/80 to-transparent z-10 shadow-[inset_8px_0_8px_rgba(0,0,0,0.1)]"></div>

      {/* Ombre à droite */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#d98200] via-[#d98200]/80 to-transparent z-10 shadow-[inset_-8px_0_8px_rgba(0,0,0,0.1)]"></div>

      {/* Bannière avec fond opaque */}
      <div className="bg-[#d98200] py-12 relative shadow-[0_4px_8px_-1px_rgba(0,0,0,0.2),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center gap-8">
          <Image
            src="/logos/logo1.png"
            alt="Logo 1"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/logo2.png"
            alt="Logo 2"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/logo3.png"
            alt="Logo 3"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/logo4.png"
            alt="Logo 4"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/logo5.png"
            alt="Logo 5"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
