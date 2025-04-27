// import { motion } from "framer-motion";
// import Image, { StaticImageData } from "next/image";
// import houseImg from "./images/construction.jpg";
// import planningImg from "./images/planning.jpg";
// import estimationImg from "./images/estimation.avif";
// import structuralImg from "./images/structural-drawing.jpg";
// import archiImg from "./images/architectural-drawing.jpg";
// import interiorImg from "./images/interior-design.jpg";
// import exteriorImg from "./images/exterior-design.avif";
// import mudbrickImg from "./images/eco-friendly-construction.jpg";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// interface Services {
//   id: number;
//   title: string;
//   description: string;
//   image: StaticImageData;
// }

// const services: Services[] = [
//   {
//     id: 1,
//     title: "House Construction",
//     description: "Complete house building solutions from foundation to finish.",
//     image: houseImg,
//   },
//   {
//     id: 2,
//     title: "Planning",
//     description:
//       "Strategic planning and layout designing tailored for your needs.",
//     image: planningImg,
//   },
//   {
//     id: 3,
//     title: "Estimation",
//     description:
//       "Accurate project cost estimation to manage your budget effectively.",
//     image: estimationImg,
//   },
//   {
//     id: 4,
//     title: "Structural Drawing",
//     description: "Detailed structural designs ensuring safety and strength.",
//     image: structuralImg,
//   },
//   {
//     id: 5,
//     title: "Architectural Drawings",
//     description: "Creative and functional architectural designs.",
//     image: archiImg,
//   },
//   {
//     id: 6,
//     title: "Interior Designs",
//     description: "Aesthetic and customized interior designing solutions.",
//     image: interiorImg,
//   },
//   {
//     id: 7,
//     title: "Exterior Designs",
//     description: "Elegant exterior design to enhance your home's curb appeal.",
//     image: exteriorImg,
//   },
//   {
//     id: 8,
//     title: "Mud Brick Construction",
//     description: "Eco-friendly mud brick houses for sustainable living.",
//     image: mudbrickImg,
//   },
// ];

// export default function OurServices() {
//   return (
//     <div id="our-services" className="py-12 bg-[#f9f9f9]">
//       <h2 className="text-4xl font-bold text-center text-[#1a1a1a] mb-12">
//         Our Services
//       </h2>

//       <div className="flex overflow-x-auto space-x-6 px-6 scrollbar-none scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-hidden w-10/12">
//         <Carousel>
//           <CarouselContent>
//             {services.map((service, index) => (
//               <CarouselItem key={index} className="pl-4 basis-1/3">
//                 <motion.div
//                   key={service.id}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="min-w-[350px] max-h-80 overflow-hidden"
//                 >
//                   <div className="max-w-md rounded overflow-hidden group shadow-lg bg-white">
//                     <div className="h-64 w-full overflow-hidden">
//                       <Image
//                         src={service.image}
//                         alt={service.title}
//                         className="object-cover w-full h-64"
//                       />
//                     </div>
//                     <div className="h-2 bg-orange-500"></div>
//                     <div className="bg-black p-4 group-hover:bg-orange-500 border-0">
//                       <h2 className="text-white text-xl font-bold">
//                         {service.title}
//                       </h2>
//                     </div>
//                   </div>
//                 </motion.div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import houseImg from "./images/construction.jpg";
import planningImg from "./images/planning.jpg";
import estimationImg from "./images/estimation.avif";
import structuralImg from "./images/structural-drawing.jpg";
import archiImg from "./images/architectural-drawing.jpg";
import interiorImg from "./images/interior-design.jpg";
import exteriorImg from "./images/exterior-design.avif";
import mudbrickImg from "./images/eco-friendly-construction.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // <-- import autoplay plugin
import { useRef } from "react";

interface Services {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const services: Services[] = [
  {
    id: 1,
    title: "House Construction",
    description: "Complete house building solutions from foundation to finish.",
    image: houseImg,
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Strategic planning and layout designing tailored for your needs.",
    image: planningImg,
  },
  {
    id: 3,
    title: "Estimation",
    description:
      "Accurate project cost estimation to manage your budget effectively.",
    image: estimationImg,
  },
  {
    id: 4,
    title: "Structural Drawing",
    description: "Detailed structural designs ensuring safety and strength.",
    image: structuralImg,
  },
  {
    id: 5,
    title: "Architectural Drawings",
    description: "Creative and functional architectural designs.",
    image: archiImg,
  },
  {
    id: 6,
    title: "Interior Designs",
    description: "Aesthetic and customized interior designing solutions.",
    image: interiorImg,
  },
  {
    id: 7,
    title: "Exterior Designs",
    description: "Elegant exterior design to enhance your home's curb appeal.",
    image: exteriorImg,
  },
  {
    id: 8,
    title: "Mud Brick Construction",
    description: "Eco-friendly mud brick houses for sustainable living.",
    image: mudbrickImg,
  },
];

export default function OurServices() {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <div
      id="our-services"
      className="py-12 bg-[#f9f9f9] flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-center text-[#1a1a1a] mb-12">
        Our Services
      </h2>

      <div className="w-10/12">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem key={service.id} className="pl-4 basis-1/3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="overflow-hidden"
                >
                  <div className="rounded overflow-hidden group shadow-lg bg-white">
                    <div className="h-64 w-full relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="h-2 bg-orange-500"></div>
                    <div className="bg-black p-4 group-hover:bg-orange-500 transition-colors duration-300">
                      <h2 className="text-white text-xl font-bold text-center">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
