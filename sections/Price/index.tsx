import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import packageData from "./enums";

const packagePricing: Record<string, string> = {
  "Freesia Package": "₹3,910/sq.ft (Incl. GST)",
  "Dahlia Package": "₹5,080/sq.ft (Incl. GST)",
  "Magnolia Package": "₹6,220/sq.ft (Incl. GST)",
};

export default function PackageComparison() {
  return (
    <div className="bg-[#fff8f6] py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Home Construction Packages In Bengaluru
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Find the best Luxury Packages.* <br />
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {Object.entries(packageData).map(([pkgName, sections]) => (
          <div
            key={pkgName}
            className="bg-white rounded-lg shadow-sm border border-gray-200 "
          >
            <div className="bg-orange-600 text-white font-bold text-center p-4 rounded-t-lg">
              <h3 className="text-lg">{pkgName}</h3>
              <p className="text-sm">
                {packagePricing[pkgName] ?? "Price not available"}
              </p>
            </div>

            <Accordion type="multiple" className="p-4">
              {Object.entries(sections).map(([section, items]) => (
                <AccordionItem
                  key={`${pkgName}-${section}`}
                  value={`${pkgName}-${section}`}
                  className="border-b"
                >
                  <AccordionTrigger className="font-medium text-left text-base text-gray-800">
                    {section}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
