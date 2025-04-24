import Slider, { Slide } from "@/components/Slider";
import Exterior from "./images/exterior.jpg";
import Interior from "./images/interior-1.jpg";
import Dining from "./images/dining.jpg";
import { useState } from "react";
import TalkToExpertPopup from "./TalkToExpertPopup";

function Dashboard() {
  const [showForm, setShowForm] = useState(true);

  const mySlides: Slide[] = [
    {
      imageUrl: Exterior,
      title: "Dream Home Design",
      subtitle: "Explore our innovative home designs.",
    },
    {
      imageUrl: Interior,
      title: "Quality Construction",
      subtitle: "Built with the finest materials and craftsmanship.",
    },
    {
      imageUrl: Dining,
      title: "Your Vision, Our Expertise",
      subtitle: "Let us bring your dream home to life.",
    },
  ];

  return (
    <div>
      <Slider slides={mySlides} interval={4000} />
      {/* {showForm && (
        <div className="hidden md:block absolute top-1/2 right-6 -translate-y-1/2 z-20 w-[350px]">
          <TalkToExpertPopup onSuccess={() => setShowForm(false)} />
        </div>
      )} */}
    </div>
  );
}

export default Dashboard;
