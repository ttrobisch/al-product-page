import React from "react";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Example = () => {
  const ref = useRef();
  return (
    <Parallax pages={2} ref={ref}>
      <ParallaxLayer offset={0} speed={1}>
        <div className="h-full bg-black">
          <p className="text-white">Layers can contain anything</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1}>
        <div className="bg-blue-500 ">
          <p className="text-black">Hey</p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Example;
