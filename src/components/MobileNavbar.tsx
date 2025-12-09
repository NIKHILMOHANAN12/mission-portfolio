"use client";

import Link from "next/link";
import {
  DetectiveIcon,
  FlaskIcon,
  IdentificationBadgeIcon,
  TreasureChestIcon,
} from "@phosphor-icons/react";

const menuItems = [
  { title: "Works", icon: TreasureChestIcon, href: "/#myWork" },
  { title: "About Me", icon: DetectiveIcon, href: "/about" },
  { title: "Play", icon: FlaskIcon, href: "/play" },
  { title: "Resume", icon: IdentificationBadgeIcon, href: "/Nikhil Mohan-Resume.pdf", external: true },
];

const MobileNavbar = ({ onNavigate }: { onNavigate: () => void }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {menuItems.map(({ title, icon: Icon, href, external }) =>
        external ? (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className="flex items-center text-2xl font-semibold gap-3 hover:opacity-70 transition"
          >
            <Icon size={28} weight="duotone" />
            {title}
          </a>
        ) : (
          <Link
            key={title}
            href={href}
            onClick={onNavigate}
            className="flex items-center text-2xl font-semibold gap-3 hover:opacity-70 transition"
          >
            <Icon size={28} weight="duotone" />
            {title}
          </Link>
        )
      )}
    </div>
  );
};

export default MobileNavbar;
