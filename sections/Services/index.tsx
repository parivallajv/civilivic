import Image from "next/image";
import House from "./images/house.jpg";
import Business from "./images/business.jpg";

export default function OurServices() {
  return (
    <section className="bg-[#fff6f3] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-700 mb-10">
          Flawless construction powered by deep expertise.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card */}
          {[
            { title: "House Construction", img: House },
            { title: "Construction for Business", img: Business },
          ].map((service, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-md group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-black text-white px-6 py-4 border-t-4 border-orange-600 transition-all duration-500 group-hover:bg-orange-600 group-hover:text-black">
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
