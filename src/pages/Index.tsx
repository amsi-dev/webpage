import Hero from "@/components/Hero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero logoUrl="/lovable-uploads/7845ea75-fac1-45c2-a8a4-4acf4bb90b2d.png" />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
