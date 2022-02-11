import { useState } from "react";
import { Image, ImageProps } from "@chakra-ui/react";

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MyImage({ src, alt, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const fallback = `/image/camp${getRandomIntInclusive(1, 6)}.jpg`;

  const onError = () => setImgSrc(fallback);

  return (
    <Image
      src={imgSrc ? imgSrc : fallback}
      onError={onError}
      alt={alt}
      {...props}
      style={{ aspectRatio: "16 / 9" }}
    />
  );
}
