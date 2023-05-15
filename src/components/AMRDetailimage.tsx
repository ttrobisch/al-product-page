import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";

type amrProps = {
  image: string;
  internal_name: string;
  external_name: string;
  fabricator: string;
};

type FloatingTextProps = {
  pathX: number;
  pathY: number;
  pathOffset: number;
  textX: number;
  textY: number;
  textSize: number;
  text: string[];
};

function FloatingText(props: FloatingTextProps) {
  const isLeft = props.pathOffset < 0;
  let pathD = "",
    radius = 0.5;
  if (isLeft) {
    pathD = `M${props.pathX - radius} ${props.pathY} l${props.pathOffset} 0`;
  } else {
    pathD = `M${props.pathX + radius} ${props.pathY} l${props.pathOffset} 0`;
  }
  const [path, setPath] = React.useState<SVGPathElement | null>(null);
  const [circle, setCircle] = React.useState<SVGCircleElement | null>(null);
  const [text, setText] = React.useState<SVGGElement | null>(null);

  React.useEffect(() => {
    if (!path) return;
    const duration = 300;
    const length = path.getTotalLength();
    const textElements = Array.from(text.children);
    const animations = [
      circle.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration,
          fill: "forwards",
        }
      ),
      path.animate(
        [
          {
            strokeDashoffset: length,
            strokeDasharray: length,
            opacity: 1,
          },
          {
            strokeDashoffset: 0,
            strokeDasharray: length,
            opacity: 1,
          },
        ],
        {
          duration,
          delay: duration * 1.5,
          fill: "forwards",
        }
      ),
      ...textElements.map((el, i) =>
        el.animate(
          [
            {
              opacity: 0,
            },
            {
              opacity: 1,
            },
          ],
          {
            duration,
            delay: duration * 2.2 + duration * i * 0.5,
            fill: "forwards",
          }
        )
      ),
    ];

    return () => {
      animations.forEach((a) => a.cancel());
    };
  }, [path, circle, text]);

  return (
    <>
      <path
        ref={setPath}
        className={"opacity-0"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={0.1}
        fill={"none"}
        d={pathD}
      />
      <circle
        ref={setCircle}
        className={"opacity-0"}
        cx={props.pathX}
        cy={props.pathY}
        r={0.5}
        stroke={"currentColor"}
        strokeWidth={0.1}
        fill={"none"}
      />
      <g ref={setText}>
        {props.text.map((text, index) => (
          <text
            key={index}
            className={"opacity-0"}
            x={props.textX}
            y={props.textY + index * props.textSize}
            fontSize={props.textSize}
            fill={"currentColor"}
          >
            {text}
          </text>
        ))}
      </g>
    </>
  );
}

function AMRDetailimage(props: {
  image: string;
  internal_name: string;
  external_name: string;
  fabricator: string;
  details?: FloatingTextProps[];
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  return (
    <div className="grid items-center">
      <div className="grid [&>*]:col-start-1 [&>*]:col-end-2 [&>*]:row-start-1 [&>*]:row-end-2">
        <Image
          id={"amrImage"}
          onLoad={() => setImageLoaded(true)}
          src={props.image}
          alt="Ein Bild vom Spot"
          width={1000}
          height={500}
          quality={100}
          placeholder="empty"
          priority
          ref={imageRef}
        />
        {imageLoaded && (
          <svg
            className={"text-neutral-400"}
            width={"100%"}
            height={imageRef.current ? imageRef.current.clientHeight : 500}
            viewBox={"0 0 100 100"}
          >
            {props.details?.map((detail, index) => (
              <FloatingText key={index} {...detail} />
            ))}
          </svg>
        )}
      </div>
      <div className="mb-4 mt-8 md:mb-8 md:mt-16">
        <h1 className="text-center text-2xl font-bold uppercase text-black md:text-4xl">
          {props.internal_name}
        </h1>
        <h2 className="mt-1 text-center text-xl text-black md:mt-2 md:text-2xl ">
          {props.external_name} - {props.fabricator}
        </h2>
      </div>
    </div>
  );
}

export { AMRDetailimage };
