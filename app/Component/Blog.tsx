import Image from "next/image";
import React from "react";

export const Blog = ({
  title,
  text,
  image,
  topic,
  subimage,
  date,
  name,
}: {
  title: string;
  text: string;
  image: string;
  topic: string;
  subimage: string;
  date: string;
  name: string;
}) => {
  return (
    <section className="">
      <div className="rounded-md flex flex-col items-stretch relative overflow-hidden shadow-md]">
        <Image
          src={image}
          alt={`pics-${title}`}
          width={500}
          height={250}
          className="absolute h-[11.8em] top-0 object-cover inline-block w-[100%]"
        />
        <div className="relative flex flex-col justify-between pt-[14em] pr-[1.5em] pl-[1em] pb-4">
          <span className="text-[.875em] font-[600] text-[#00a99d] font-nunito mb-[.25em]">
            {topic}
          </span>
          <h1 className="text-[#003634] mb-[1em] text-[1.25em] font-[600] leading-[120%] font-nunito">
            {title}
          </h1>
          <p className="text-[#6e6e6e] font-nunito mt-[.5em] text-[1em] font-[400] leading-[130%]">
            {text}
          </p>

          <div className="flex mt-[2em] pr-[1.5em] items-center">
            <Image
              src={subimage}
              alt={`pics-${name}`}
              width={40}
              height={40}
              className="rounded-full w-[2.5em] h-[2.5em] overflow-hidden object-cover object-center"
            />
            <div className="pl-2">
              <p className="text-[#003634] text-[.875em] leading-[120%]">
                {name}
              </p>
              <span className="text-[6e6e6e] text-[.875em] leading-[120%]">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
