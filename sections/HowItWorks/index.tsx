import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Request from "./images/request.jpg";
import Expert from "./images/professionals.jpg";
import Booking from "./images/booking.jpg";
import Design from "./images/plans.jpg";
import Tracking from "./images/track.jpg";
import Construction from "./images/construction.jpg";
import Completed from "./images/completed.jpg";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  image: any;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Raise a Request",
    description:
      "Raise a house construction service request or call us. Our team will get in touch with you to understand your needs.",
    image: Request,
  },
  {
    id: 2,
    title: "Meet Our Expert",
    description:
      "Our construction expert will meet you to discuss your plans, site, and expectations.",
    image: Expert,
  },
  {
    id: 3,
    title: "Book with Us",
    description:
      "Once you're satisfied, proceed to book with us with full transparency and no advance.",
    image: Booking,
  },
  {
    id: 4,
    title: "Receive Designs",
    description: "Get design options tailored for your space and budget.",
    image: Design,
  },
  {
    id: 5,
    title: "Track & Transact",
    description:
      "Track progress, make payments, and stay informed through our online portal.",
    image: Tracking,
  },
  {
    id: 6,
    title: "Execution Begins",
    description:
      "Our vetted contractors start executing your project with quality checks in place.",
    image: Construction,
  },
  {
    id: 7,
    title: "Settle In",
    description:
      "Once complete, we help you move in and ensure everything meets your expectations.",
    image: Completed,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const step = steps.find((s) => s.id === activeStep)!;

  return (
    <section
      id="how-it-works"
      className="px-4 py-25 max-w-2xl mx-auto text-center"
    >
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-3 text-gray-800 drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our house construction steps are simple and easy to understand:
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-base md:text-lg mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Plan – Build – Track – Settle in
      </motion.p>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {steps.map(({ id }) => (
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            key={id}
            className={`w-10 h-10 rounded-full border text-sm font-semibold transition-all duration-300 shadow-sm ${
              activeStep === id
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveStep(id)}
          >
            {id}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="mx-auto max-w-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-xl transition-shadow hover:shadow-2xl rounded-xl">
          <CardContent className="p-6 flex flex-col items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={300}
                height={200}
                className="rounded-lg object-cover shadow-md mb-4"
              />
            </motion.div>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg w-full shadow-sm text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{`${step.id}. ${step.title}`}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
