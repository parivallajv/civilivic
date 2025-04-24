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
import Link from "next/link";
import TalkToExpertPopup from "@/sections/Dashboard/TalkToExpertPopup";

type HeaderProps = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ showForm, setShowForm }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-6 py-3 border-b shadow-sm bg-white sticky top-0 left-0 z-100"
    >
      <div className="flex items-center gap-6">
        <Link href="#">
          <div className="text-xl font-bold flex flex-col leading-none">
            <span>civilivic</span>
            <span className="text-xs text-orange-500 tracking-widest">
              HOME CONSTRUCTION
            </span>
          </div>
        </Link>

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

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="#our-services" scroll={true}>
          <span className="cursor-pointer">Our Services</span>
        </Link>
        <Link href="#why-civilivic">
          <span className="cursor-pointer flex gap-1 items-center">
            Why civilivic ?
            <sup className="text-orange-500 font-bold text-[10px]">NEW</sup>
          </span>
        </Link>
        <Link href="#how-it-works">
          <span className="cursor-pointer">How it Works</span>
        </Link>
        <Link href="#pricing">
          <span className="cursor-pointer">Pricing</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button
          className="bg-orange-500 hover:bg-orange-600 px-5 rounded text-white"
          onClick={() => setShowForm(true)}
        >
          Let’s Build
        </Button>
        <div className="flex items-center gap-2">
          <div className="bg-black rounded-full p-2">
            <PhoneIcon className="text-white w-4 h-4" />
          </div>
          <div className="flex-col">
            <div>
              <span className="text-sm">+91 900 398 3719</span>
            </div>
            <div>
              <span className="text-sm">+91 904 713 4920</span>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="hidden md:block absolute top-1/2 right-6 -translate-y-1/2 z-20 w-[350px]">
          <TalkToExpertPopup onSuccess={() => setShowForm(false)} />
        </div>
      )}
    </motion.div>
  );
};

export default Header;
