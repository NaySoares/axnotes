import Image from "next/image";

interface IImageContainer {
  src: string;
  origin: string;
  alt: string;
}

export const ImageContainer = ({ src, origin, alt }: IImageContainer) => {
  return (
    <div>
      <strong>src: {origin}</strong>
      <Image src={src} alt={alt} width={200} height={200} />
    </div>
  );
};
