import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode | string | StaticImageData;
}

function ButtonWithIcon({
  className,
  icon,
  children,
  ...props
}: ButtonWithIconProps) {
  return (
    <button
      className={cn(
        "relative py-2 px-3 rounded-full font-medium text-sm hover:cursor-pointer flex items-center justify-center gap-2 text-white transition-colors",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="relative z-10 flex items-center">
          {React.isValidElement(icon) ? (
            icon
          ) : (
            <Image
              src={icon as string | StaticImageData}
              alt="icon"
              width={20}
              height={20}
            />
          )}
        </span>
      )}
      {children && <span className="relative z-10">{children}</span>}
    </button>
  );
}

export default ButtonWithIcon;
