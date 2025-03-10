import { STACKS } from "@/utils/Stack";
import CoolMarqueeBox from "./CoolMarqueeBox"; // Path diperbaiki
import Image from "next/image";
import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden my-24">
      <CoolMarqueeBox>
        {STACKS.map((stack, index) => (
          <Image
            key={index}
            src={`/assets/stacks/${stack}.svg`}
            alt={stack}
            width={100}
            height={100}
            className="h-[100px] filter mx-8"
          />
        ))}
      </CoolMarqueeBox>
    </div>
  );
};

export default Marquee;
