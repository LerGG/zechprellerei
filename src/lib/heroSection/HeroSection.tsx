import {
  BACKGROUND_VIDEO_NAME,
  CLOUD_FRONT_CDN,
  VIDEO_FORMAT,
} from "@/constants";
import Image from "next/image";

export const HeroSection = () => {
  const videoUrl = `${CLOUD_FRONT_CDN}/${BACKGROUND_VIDEO_NAME}${VIDEO_FORMAT}`;

  return (
    <div className="flex w-full h-full flex-col">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex w-full h-[75vh] items-center justify-center z-1 items-center">
        <a href="/img/FLYER.png" target="_blank" rel="noopener noreferrer">
          <div className="shadow-[0_0_20px_#070000] transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:-rotate-y-3 hover:skew-y-1 perspective cursor-pointer">
            <Image
              src="/img/FLYER.png"
              alt="logo"
              width="400"
              height="300"
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </div>
        </a>
      </div>
    </div>
  );
};
