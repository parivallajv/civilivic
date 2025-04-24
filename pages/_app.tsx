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

const Header = dynamic(() => import("../components/Header"), { ssr: false });

const IndexPage = () => (
  <Layout title="Home construction">
    <Header />
    <Dashboard />
    <TalkToExpertPopup />
    <OurServices />
    <WhyChooseUs />
    <HowItWorks />
    <BasicPackageAccordion />
    <Footer />
  </Layout>
);

export default IndexPage;
