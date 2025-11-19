import Donut3d from "@/public/donnut.png";
import Trapeziod3d from "@/public/trapezoid.png";
import DashboardImg from "@/public/Dashboard.png";
import FeedbackImg from "@/public/feedback.png";
import Image from "next/image";

function BentoGrid() {
  return (
    <section className="flex items-center overflow-hidden relative">
      <div className="container flex flex-col gap-5 justify-center items-center py-14">
        <div className="max-w-xl">
          <h2 className="text-4xl text-center">
            Harness the power of AI, making interview preparations easier and
            effective for all skill levels.
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-1 md:flex-row">
          <div className="max-w-[326px] h-96 rounded-xl flex flex-col gap-3 p-6 border border-white/20">
            <Image src={Donut3d} className="w-2xs h-2xs" alt="3D Donut" />
            <div className="max-w-2xs">
              <h3 className="font-bold mb-1">
                Instant personalized interviews
              </h3>
              <p className="text-white/60">
                Import your job from any job site. Upload your CV. Our AI
                interviewer will personalise your questions
              </p>
            </div>
          </div>
          <div className="min-w-60 max-w-[326px] md:max-w-4xl w-full rounded-xl h-96 relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl bg-linear-to-b from-[#030106]/0 to-[#361764] z-2"></div>
            <Image
              src={DashboardImg}
              width={1024}
              height={780}
              className="absolute rounded-md border border-white/20 top-4 left-4 lg:left-14 max-w-3xl h-auto z-1"
              alt="User-friendly dashboard"
            />
            <div className="max-w-3xs z-3 absolute bottom-14 left-6">
              <h3 className="font-bold mb-1">User-friendly dashboard</h3>
              <p className="text-white/60">
                Create an interview preparation with just one click!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-1 md:flex-row">
          <div className="min-w-60 max-w-[326px] md:max-w-4xl w-full rounded-xl h-96 relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl bg-linear-to-b from-[#030106]/0 to-[#361764] z-2"></div>
            <Image
              src={FeedbackImg}
              width={1024}
              height={780}
              className="absolute rounded-md border border-white/20 top-4 left-4 lg:left-14 max-w-3xl h-auto z-1"
              alt="User-friendly dashboard"
            />
            <div className="max-w-3xs z-3 absolute bottom-7 left-6">
              <h3 className="font-bold mb-1">Feedback reports</h3>
              <p className="text-white/60">
                Get actionable, constructive feedback, and perfect your
                strengths
              </p>
            </div>
          </div>
          <div className="max-w-[326px] h-96 rounded-xl flex flex-col justify-center items-center gap-3 p-6 border border-white/20">
            <Image
              src={Trapeziod3d}
              className="h-[215px] w-auto"
              alt="3D Trapezoid"
            />
            <div className="max-w-2xs">
              <h3 className="font-bold mb-1">
                Instant personalized interviews
              </h3>
              <p className="text-white/60">
                Import your job from any job site. Upload your CV. Our AI
                interviewer will personalise your questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
