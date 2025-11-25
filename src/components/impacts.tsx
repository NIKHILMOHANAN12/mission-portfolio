import Image from "next/image";

interface ImpactCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function ImpactCard({
  imageSrc,
  imageAlt,
  title,
  description,
}: ImpactCardProps) {
  return (
    <div className="flex gap-2 items-start">
      <div className="w-16 h-16 flex-shrink-0 relative">
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
      </div>
      <div>
        <p className="font-semibold text-bodymedium">{title}</p>
        <p className="text-neutral-600 text-bodysmall font-medium">{description}</p>
      </div>
    </div>
  );
}
