"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { PhoneIcon, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-6 py-3 border-b shadow-sm bg-white"
    >
      {/* Left: Logo & Location */}
      <div className="flex items-center gap-6">
        <div className="text-xl font-bold flex flex-col leading-none">
          <span>Brick & Bolt</span>
          <span className="text-xs text-orange-500 tracking-widest">
            HOME CONSTRUCTION
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-orange-500 font-semibold flex items-center gap-1 focus:outline-none">
            CHENNAI <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Chennai</DropdownMenuItem>
            <DropdownMenuItem>Bangalore</DropdownMenuItem>
            <DropdownMenuItem>Hyderabad</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Center: Menu Items */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <span className="cursor-pointer">Our Projects</span>
        <span className="cursor-pointer flex gap-1 items-center">
          Floor Plans{" "}
          <sup className="text-orange-500 font-bold text-[10px]">NEW</sup>
        </span>
        <span className="cursor-pointer">Cost Estimator</span>
        <span className="cursor-pointer">How it Works</span>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 focus:outline-none">
            More <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Testimonials</DropdownMenuItem>
            <DropdownMenuItem>Careers</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right: Button and Contact */}
      <div className="flex items-center gap-4">
        <Button className="bg-orange-500 hover:bg-orange-600 px-5 rounded text-white">
          Let’s Build
        </Button>
        <div className="flex items-center gap-2">
          <div className="bg-black rounded-full p-2">
            <PhoneIcon className="text-white w-4 h-4" />
          </div>
          <span className="text-sm">+91 7505 205 205</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
