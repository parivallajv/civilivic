"use client";

import { motion } from "framer-motion";
import Document from "./images/document.jpg";
import Money from "./images/money.jpg";
import Quality from "./images/quality.avif";
import Time from "./images/time.jpg";
import Image from "next/image";

interface Service {
  icon: any;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Money,
    title: "Safe Money Transaction",
    description:
      "No Advance. Contractor is paid only once the work is complete",
  },
  {
    icon: Document,
    title: "Absolute Transparency",
    description: "Clear and Detailed Quotation. Online tracking of projects",
  },
  {
    icon: Quality,
    title: "Assured Quality Control",
    description: "470+ Quality (QASCON) Checks performed by team of experts",
  },
  {
    icon: Time,
    title: "Zero Delays",
    description: "Zero tolerance for delays",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-civilivic" className="bg-white py-25 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Civilivic?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We ensure peace of mind, trust, and transparent house construction
          services.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#fff6f3] p-6 hover:shadow-xl transition-shadow duration-300 border hover:border-orange-500 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                <Image src={item.icon} alt={item.description} />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
