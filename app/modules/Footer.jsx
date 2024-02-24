import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-6">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-4 justify-between sm:items-start text-white mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
          <Image
            src="/logo.webp"
            width="1600"
            height="302"
            alt="logo"
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col gap-2">
            <div>CVR: 35768521</div>
            <Link href="tlf:+4539561666">TLF: +45 39 56 16 66</Link>
            <address>Frederiksborgvej 202, 2400 København</address>
          </div>
        </div>
        <div className="font-bold flex flex-col items-center sm:items-end gap-2">
          <p className="text-2xl">Åbningstider</p>
          <div>Tirsdag til fredag / 09:30 - 17:30</div>
          <div>Lørdag / 09:00 - 14:00</div>
          <div className="flex gap-4 flex-col-reverse sm:flex-row items-center">
            <Button asChild variant="text">
              <Link href="/">Book tid</Link>
            </Button>
            <div className="flex gap-4">
            <svg height={24} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40 20.1251C39.9533 16.3139 38.8183 12.5954 36.7288 9.40752C34.6393 6.21967 31.6825 3.69525 28.2065 2.13157C24.7303 0.567899 20.8798 0.0300994 17.1083 0.581474C13.3368 1.13287 9.80143 2.75047 6.9185 5.24385C4.03555 7.7372 1.92513 11.0024 0.835755 14.655C-0.253595 18.3076 -0.276545 22.1954 0.769655 25.8607C1.81586 29.5259 3.88761 32.8157 6.74093 35.3429C9.59423 37.8702 13.1103 39.5294 16.875 40.1251V25.9502H11.875V20.1251H16.875V15.7001C16.7593 14.6713 16.8708 13.6295 17.2018 12.6484C17.5328 11.6673 18.075 10.7708 18.7903 10.0222C19.5055 9.27355 20.3763 8.69102 21.3413 8.31575C22.3063 7.94045 23.342 7.78152 24.375 7.85022C25.8745 7.87075 27.3705 8.00447 28.85 8.25022V13.2502H26.35C25.919 13.1958 25.481 13.239 25.069 13.3766C24.6568 13.5142 24.2808 13.7426 23.9688 14.045C23.6568 14.3474 23.4168 14.7161 23.2665 15.1236C23.116 15.5314 23.0593 15.9677 23.1 16.4002V20.1751H28.65L27.75 26.0001H23.125V40.0002C27.8498 39.2529 32.1503 36.8369 35.2463 33.1904C38.3423 29.5439 40.0288 24.9086 40 20.1251Z"
                fill="currentColor"
              />
            </svg>
            <svg width={24} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.2 2.2002H11.8C6.49806 2.2002 2.2 6.49826 2.2 11.8002V26.2002C2.2 31.502 6.49806 35.8002 11.8 35.8002H26.2C31.5018 35.8002 35.8 31.502 35.8 26.2002V11.8002C35.8 6.49826 31.5018 2.2002 26.2 2.2002Z"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 26.1998C15.0234 26.1998 11.8 22.9764 11.8 18.9998C11.8 15.0232 15.0234 11.7998 19 11.7998C22.9766 11.7998 26.2 15.0232 26.2 18.9998C26.2 20.9092 25.4414 22.7407 24.0911 24.0909C22.7409 25.4412 20.9094 26.1998 19 26.1998Z"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.6 6.9998C27.2745 6.9998 26.2 8.07432 26.2 9.3998C26.2 10.7253 27.2745 11.7998 28.6 11.7998C29.9255 11.7998 31 10.7253 31 9.3998C31 8.07432 29.9255 6.9998 28.6 6.9998Z"
                fill="currentColor"
              />
              <path
                d="M28.6 8.2001C27.9373 8.2001 27.4 8.73736 27.4 9.4001C27.4 10.0628 27.9373 10.6001 28.6 10.6001C29.2627 10.6001 29.8 10.0628 29.8 9.4001C29.8 8.73736 29.2627 8.2001 28.6 8.2001Z"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
