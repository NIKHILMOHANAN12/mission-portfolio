import Image from "next/image";
import Button from "./Button";

type ProjectProps = {
  title: string;
  img: string;
};

export default function ProjectCard({ title, img }: ProjectProps) {
  return (
    <div>
      <Image src={img} width={600} height={400} alt={title} className="rounded-2xl border-none"/>
      <div className="p-4">
        <h3 className="text-h6 font-bold mb-4">{title}</h3>
        <Button>View Case Study</Button>
      </div>
    </div>
  );
}
