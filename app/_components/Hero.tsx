import starsBg from "@/public/stars.png";
import Image from "next/image";
import DashboardImg from "@/public/Dashboard.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      className="flex items-center overflow-hidden relative mask-[linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36)_78%,transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(20%_20%_at_center_center,rgb(140,69,255,.02)_100%,rgb(14,0,36)_78%,transparent)] z-2"></div>
      {/* Start Ring 1 */}
      <div className="absolute h-[444px] w-[444px] border opacity-10 rounded-full left-1/2 top-3/4 md:top-5/8 lg:top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <div className="absolute h-[614px] w-[614px] border border-white/10 rounded-full top-3/4 md:top-5/8 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <div className="absolute h-[784px] w-[784px] rounded-full border border-white opacity-10 top-3/4 md:top-5/8 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* End Ring 3 */}
      <div className="container relative mt-16">
        <div className="py-2 px-4 bg-black/50 max-w-max mx-auto rounded-full mb-6 border border-white/20">
          <p className="text-sm md:text-lg text-[#9855FF]">
            Voice-powered AI interview practice
          </p>
        </div>
        <h1 className="text-5xl md:text-[88px] w-full md:leading-none font-semibold tracking-tighter bg-white bg-[linear-gradient(to_bottom,white,#B372CF)] text-transparent bg-clip-text text-center">
          Ace your next interview!
        </h1>
        <p className="text-lg md:text-xl text-white/80 mt-5 text-center max-w-2xl mx-auto">
          Talk with our personalised AI powered interview coach. Practice in a
          real-time interview and get actionable feedback.
        </p>
        <div className="flex justify-center mt-5">
          <div className="p-2 border border-white/20 rounded-lg z-3">
            <Link href="/mock-interview">
              <button className="bg-white text-black rounded-lg px-4 py-2 md:px-5 md:py-3 hover:cursor-pointer">
                Start my interview
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12 w-full max-w-360 mx-auto flex justify-center mb-10">
          <div className="p-0.5 md:p-2 bg-linear-to-r from-[#0D0718] via-[rgb(15,8,27,0)] to-[#0D0718] rounded-md md:rounded-xl shadow-[0_0_50px_rgb(140,69,255,.5)] w-full">
            <Image
              src={DashboardImg}
              alt="Dashboard"
              className="w-full rounded-md md:rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
