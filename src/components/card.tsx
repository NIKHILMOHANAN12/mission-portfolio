import Image from "next/image";

type CardProps = {
  image: string;
  alt: string;
  text: string;
  author?: string;
  subtitle?: string;
};

export default function Card({
  image,
  alt,
  text,
  author,
  subtitle,
}: CardProps) {
  return (
    <div
      className={`bg-white p-4 h-[664] border border-neutral-200 rounded-xl`}
    >
      <Image
        src={image}
        alt={alt}
        width={323}
        height={368}
        className="rounded-lg mx-auto"
      />
      <p className="mt-6 text-bodysmall font-medium text-black">{text}</p>

      {author && (
        <div className="mt-4">
          <p className="text-bodysmall font-bold">{author}</p>
          {subtitle && (
            <p className="text-bodysmall text-black italic">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}
