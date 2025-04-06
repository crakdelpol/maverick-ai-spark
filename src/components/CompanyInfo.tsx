
import { BrainCircuit } from "lucide-react";

const CompanyInfo = () => {
  return (
    <section className="section-padding bg-maverick-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <BrainCircuit className="h-16 w-16 mx-auto mb-6 text-maverick-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Business Through AI</h2>
          <p className="text-lg text-maverick-100 mb-8">
            Maverick AI is at the forefront of artificial intelligence innovation, creating solutions that 
            help businesses extract valuable insights from complex data. We combine cutting-edge technology 
            with industry expertise to build AI systems that deliver measurable results.
          </p>
          <p className="text-lg text-maverick-100">
            Our platform empowers organizations to make data-driven decisions faster, automate routine 
            tasks, and uncover hidden opportunities that drive growth. With flexible deployment options 
            and enterprise-grade security, Maverick AI is the trusted partner for businesses looking to 
            stay ahead in the age of artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
