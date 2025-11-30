import Image from "next/image";
import LogoIcon from "@/public/Logo2.png";
import { LoginForm } from "@/app/_components/login-form";

export default function page() {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center overflow-hidden relative"
      style={{
        background: "linear-gradient(136deg, #020103 30%, #462369 70%)",
      }}
    >
      <div className="container flex flex-col items-center lg:items-start lg:flex-row lg:py-0 py-30 gap-8 overflow-hidden">
        <div className="max-w-[600px] w-full flex flex-col gap-6">
          <div>
            <Image src={LogoIcon} alt="Logo" className="h-10 w-auto" />
          </div>
          <h1 className="text-5xl md:text-[70px] w-full leading-tight font-semibold tracking-tighter bg-white bg-[linear-gradient(to_bottom,white,#B372CF)] text-transparent bg-clip-text">
            Do you want to be the only candidate that didn&apos;t prepare?
          </h1>
          <p className="text-3xl font-thin text-white">
            Sign in and start your interview now!
          </p>
        </div>
        <div className="max-w-[600px] w-full flex flex-col gap-6 items-center">
          <LoginForm variant="signin" />
        </div>
      </div>
      <p className="absolute bottom-15 md:left-30 text-white font-thin text-sm">
        By cliking “Sign in”, you accept Simiu&apos;s{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
