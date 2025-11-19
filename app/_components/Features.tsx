import Image from "next/image";
import graphIcon from "@/public/graph.png";
import likeIcon from "@/public/like.png";
import brainIcon from "@/public/brain.png";
import ringerIcon from "@/public/ringer.png";

export const Features = () => {
  return (
    <section className="bg-linear-to-br from-[#190D2E] to-[#020103] border-t border-b border-white/15 py-16">
      <div className="container flex flex-col gap-10 justify-center items-center">
        <h2 className="text-6xl text-center">Get the job of your dream</h2>
        <div className="flex flex-col md:flex-row w-full max-w-[700px] items-center md:items-start justify-between gap-7">
          <div className="flex flex-col w-full max-w-xs h-80 justify-between">
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <Image src={graphIcon} alt="Feature 1" />
              <h3 className="font-bold">Get Better</h3>
              <p className="text-white/60 text-center md:text-left">
                Work your way up from easy to hard mode mastering your interview
                technique.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <Image src={likeIcon} alt="Feature 2" />
              <h3 className="font-bold">Constructed feedback</h3>
              <p className="text-white/60 text-center md:text-left">
                Get honest constructive feedback from our intelligent interview
                model.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-xs h-80 justify-between">
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <Image src={brainIcon} alt="Feature 3" />
              <h3 className="font-bold">Powerful interviewer</h3>
              <p className="text-white/60 text-center md:text-left">
                Our AI interviewer will question you on everything from
                job-specific technicalities to items on your résumé.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <Image src={ringerIcon} alt="Feature 4" />
              <h3 className="font-bold">Voice chat</h3>
              <p className="text-white/60 text-center md:text-left">
                Our realistic voice chat feels just like a real interview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
