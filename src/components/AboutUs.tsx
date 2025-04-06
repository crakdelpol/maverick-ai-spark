
const features = [
  {
    title: "Innovation-Driven",
    description: "We constantly push the boundaries of what's possible with artificial intelligence. Our research team develops novel algorithms and approaches that deliver breakthrough capabilities, keeping our clients ahead of the competition."
  },
  {
    title: "Customer-Focused",
    description: "Every solution we build starts with understanding our customers' unique challenges. We work closely with clients to ensure our AI systems address their specific needs, creating customized solutions rather than one-size-fits-all products."
  },
  {
    title: "Results-Oriented",
    description: "We measure our success by the tangible outcomes we create for our clients. Our AI solutions are designed to deliver clear ROI through increased efficiency, enhanced decision-making, and the discovery of new business opportunities."
  },
  {
    title: "Ethical Development",
    description: "We believe in developing AI responsibly. Our systems are built with transparency, fairness, and privacy by design. We're committed to creating technology that benefits society while respecting individual rights and values."
  },
  {
    title: "Continuous Improvement",
    description: "Our work is never done. We continuously refine our algorithms, incorporate customer feedback, and integrate emerging technologies to ensure our solutions evolve alongside our clients' needs and the rapidly changing AI landscape."
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-maverick-900">Who We Are</h2>
          <p className="text-lg text-muted-foreground">
            A team of AI experts, data scientists, and business strategists dedicated to creating 
            intelligent solutions that transform how organizations operate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-maverick-800">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-maverick-800">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
