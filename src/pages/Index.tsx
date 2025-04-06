
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyPoints from "@/components/KeyPoints";
import MainContent from "@/components/MainContent";
import CompanyInfo from "@/components/CompanyInfo";
import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <KeyPoints />
        <MainContent />
        <CompanyInfo />
        <AboutUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
