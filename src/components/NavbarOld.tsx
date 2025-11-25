"use client";
import { DetectiveIcon, FlaskIcon, IdentificationBadgeIcon, TreasureChestIcon } from "@phosphor-icons/react";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed gap-2 bottom-6 z-50 left-0 right-0 mx-auto w-fit menu flex justify-center bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.075)] border p-2">
      {/* Works */}
      <a href="#" className="link group flex items-center">
        <div className="flex items-center justify-center">
        <span className="link-icon ">
          <TreasureChestIcon size={28} weight="duotone" />
        </span>
        <span className="link-title text-bodysmall">Works</span>
        </div>
      </a>

      {/* About Me */}
      <a href="#" className="link group flex items-center justify-center">
        <div className="flex items-center justify-center">
        <span className="link-icon ">
            <DetectiveIcon size={28} weight="duotone"/>
        </span>
        <span className="link-title">About Me</span>
        </div>
      </a>

      {/* Play */}
      <a href="#" className="link group flex items-cente">
        <div className="flex items-center justify-center">
        <span className="link-icon ">
          <FlaskIcon size={28} weight="duotone"/>
        </span>
        <span className="link-title">Play</span>
        </div>
      </a>

      {/* Resume */}
      <a href="#" className="link group gap-3">
        <div className="flex items-center justify-center">
        <span className="link-icon ">
          <IdentificationBadgeIcon size={28} weight="duotone"/>
        </span>
        <span className="link-title">Resume</span>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
