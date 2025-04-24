import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <motion.li
      className="mb-2"
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Link
        href={href}
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        {children}
      </Link>
    </motion.li>
  );
};

interface FooterCategoryProps {
  title: string;
  links: { href: string; label: string }[];
}

const FooterCategory: React.FC<FooterCategoryProps> = ({ title, links }) => {
  return (
    <div className="mb-6">
      <h6 className="text-sm font-semibold text-white mb-2">{title}</h6>
      <ul>
        {links.map((link) => (
          <FooterLink key={link.href} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <FooterCategory
          title="Site Map"
          links={[
            { href: "/how-it-works", label: "How It Works" },
            { href: "/our-projects", label: "Our Projects" },
            { href: "/about-us", label: "About Us" },
          ]}
        />
        <FooterCategory
          title="Others"
          links={[
            { href: "/join-us", label: "Join us as a professional" },
            { href: "/refer-a-friend", label: "Refer A Friend" },
          ]}
        />
        <FooterCategory
          title="Information"
          links={[
            { href: "/terms", label: "Terms & Conditions" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/faqs", label: "FAQs" },
          ]}
        />
        <div>
          <h6 className="text-sm font-semibold text-white mb-2">Contact Us</h6>
          <p className="text-gray-400 mb-2">+91 7506 205 205</p>
          <p className="text-gray-400 mb-2">support@bricknbolt.com</p>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
            <Link href="#" className="text-gray-400 hover:text-gray-200">
              {/* Example: <svg>...</svg> */}
              Facebook
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-200">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-200">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Brick&Bolt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
