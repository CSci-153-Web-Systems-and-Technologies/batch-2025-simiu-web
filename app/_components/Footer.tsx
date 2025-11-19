import Image from "next/image";
import xIcon from "@/public/icons8-x-24.png";
import igIcon from "@/public/icons8-instagram-50.png";
import pIcon from "@/public/icons8-pinterest-50.png";
import liIcon from "@/public/icons8-linkedin-50.png";
import ttIcon from "@/public/icons8-tiktok-50.png";
import ytIcon from "@/public/icons8-youtube-50.png";

export default function Footer() {
  return (
    <footer className="md:border-t md:border-white/20 bg-[#020103]">
      <div className="container flex flex-col items-center gap-4 justify-center py-12 px-12 md:justify-between md:flex-row">
        <p className="text-white/50">@ 2025 Simiu Inc. All rights reserved</p>
        <div className="h-6 flex gap-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <Image src={xIcon} height={24} width={24} alt="X app" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={igIcon} height={24} width={24} alt="Instagram app" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={pIcon} height={24} width={24} alt="Pinterest app" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={liIcon} height={24} width={24} alt="LinkedIn app" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={ttIcon} height={24} width={24} alt="TikTok app" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={ytIcon} height={24} width={24} alt="YouTube app" />
          </a>
        </div>
      </div>
    </footer>
  );
}
