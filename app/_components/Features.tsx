import Image from "next/image";
import graphIcon from "@/public/graph.png";
import likeIcon from "@/public/like.png";
import brainIcon from "@/public/brain.png";
import ringerIcon from "@/public/ringer.png";

export const Features = () => {
  return (
    <section className="bg-linear-to-br from-[#190D2E] to-[#020103] border-t border-b border-white/15">
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-6xl">Get the job of your dream</h2>
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Image src={graphIcon} alt="Feature 1" />
              <h3>Get Better</h3>
              <p>
                Work your way up from easy to hard mode mastering your interview
                technique.
              </p>
            </div>
            <div className="flex flex-col">
              <Image src={likeIcon} alt="Feature 2" />
              <h3>Constructed feedback</h3>
              <p>
                Get honest constructive feedback from our intelligent interview
                model.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Image src={brainIcon} alt="Feature 3" />
              <h3>Powerful interviewer</h3>
              <p>
                Our AI interviewer will question you on everything from
                job-specific technicalities to items on your résumé.
              </p>
            </div>
            <div className="flex flex-col">
              <Image src={ringerIcon} alt="Feature 4" />
              <h3>Voice chat</h3>
              <p>Our realistic voice chat feels just like a real interview.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
