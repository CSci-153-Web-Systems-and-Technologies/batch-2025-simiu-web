import LogoIcon from "@/public/Logo2.png";
import MenuIcon from "@/public/icon-menu.svg";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <div className="h-10 rounded-lg inline-flex justify-center items-center">
              <Image src={LogoIcon} alt="Logo" className="h-8 w-auto" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm ">
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Contact Us
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                About Us
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Services
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
            <Image src={MenuIcon} alt="Menu" className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
