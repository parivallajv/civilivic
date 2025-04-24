import "../styles/global.css";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import TalkToExpertPopup from "@/sections/Dashboard/TalkToExpertPopup";
import Dashboard from "@/sections/Dashboard/Dashboard";
import OurServices from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import HowItWorks from "@/sections/HowItWorks";
import BasicPackageAccordion from "@/sections/Price";
import Footer from "@/sections/Footer";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";

const Header = dynamic(() => import("../components/Header"), { ssr: false });

const IndexPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Layout title="Home construction">
      <main className="scroll-smooth">
        <Header showForm={showForm} setShowForm={setShowForm} />
        <Dashboard />
        <TalkToExpertPopup />
        <OurServices />
        <WhyChooseUs />
        <HowItWorks />
        <BasicPackageAccordion />
        <Footer />
      </main>
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "#ffffff", // white background
            color: "#111827", // dark text (gray-900)
            border: "1px solid #d1d5db", // light gray border (gray-300)
          },
          classNames: {
            title: "text-base font-semibold text-gray-800",
            description: "text-sm text-gray-600",
            closeButton: "text-gray-500 hover:text-gray-800",
          },
        }}
      />
    </Layout>
  );
};

export default IndexPage;
