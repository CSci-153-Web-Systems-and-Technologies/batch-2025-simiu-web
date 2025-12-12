import ButtonWithIcon from "@/app/_components/ButtonWithIcon";
import { CirclePlus } from "lucide-react";

export default function MockInterview() {
  return (
    <div>
      <div className="border-b h-14 w-full flex items-center justify-between px-6">
        <h1 className="font-semibold">Mock Interview</h1>
        <ButtonWithIcon
          icon={<CirclePlus className="w-5 h-5" />}
          className="bg-[#8C45FF] text-white rounded-full"
        >
          Create Mock Interview
        </ButtonWithIcon>
      </div>
      <div></div>
    </div>
  );
}
