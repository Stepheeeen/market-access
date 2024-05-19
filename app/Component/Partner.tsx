import React from "react";
import Image from "next/image";

export const Partner = ({ image, title }: { image: string; title: string }) => {
  return (
    <Image
      src={image}
      alt={`pics-${title}`}
      width={150}
      height={150}
      className="md:mr-3"
    />
  );
};
