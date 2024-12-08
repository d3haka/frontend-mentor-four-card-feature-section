import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Card({
   bandColor,
   title,
   desc,
   icon,
}: {
   bandColor: string;
   title: string;
   desc: string;
   icon: string;
}) {
   return (
      <div className="relative h-[220px] w-[312px] cursor-pointer overflow-clip rounded-lg px-8 pt-10 shadow-xl transition-all duration-300 hover:scale-105">
         <div className={twMerge("absolute left-0 top-0 h-1 w-full", bandColor)}></div>
         <div className="mb-4 text-lg font-semibold">{title}</div>
         <div className="text-sm text-gray-400">{desc}</div>
         <div className="mt-16">
            <Image src={icon} width={54} height={54} alt={title} className="absolute bottom-7 right-7 size-14" />
         </div>
      </div>
   );
}
