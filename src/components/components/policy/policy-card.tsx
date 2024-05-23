"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function PolicyCard({
  id,
  name,
  title,
  category,
  interestCount,
  notInterestCount,
}: Record<string, string>) {
  const router = useRouter();
  return (
    <div
      className="mb-[10px] max-w-sm cursor-pointer rounded-lg bg-[#F9F9F9] px-6 py-[17px]"
      onClick={() => router.push(`/policy/details/${id}`)}
    >
      <div className="flex">
        <div className="mb-6 flex-grow">
          <h2 className="mb-2 text-xl font-semibold">{title}</h2>
          <p className="text-[#222222]">{name}</p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className="items-center rounded-[16px] bg-[#FE4C40] object-center px-[15px] py-[20px] shadow-[0_4px_6px_1px_rgba(0,0,0,0.2)]">
            <div className="flex justify-center">
              <div className="relative flex h-[42px] w-[44px]">
                <Image
                  className="object-cover"
                  src="/images/interestSmallImage1.svg"
                  alt="관심사 이미지"
                  fill
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="mt-[4px] text-center text-xs font-normal text-[#FFBEBA]">
              활동지원
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-200 px-6 pt-[16px]">
        <div className="text-sm font-medium text-[#555555]">
          관심 없어요{" "}
          <span className="text-[15px] font-semibold">{interestCount}</span>
        </div>
        <div className="text-sm font-medium text-[#555555]">
          관심 있어요{" "}
          <span className="text-[15px] font-semibold">{notInterestCount}</span>
        </div>
      </div>
    </div>
  );
}
