
import { Award, Zap, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-maverick-600" />,
    title: "Lightning Fast",
    description: "Our AI processes vast amounts of data in milliseconds, providing real-time insights when you need them most."
  },
  {
    icon: <Award className="h-10 w-10 text-maverick-600" />,
    title: "Industry Leading",
    description: "Award-winning technology recognized for its accuracy, reliability and innovative approach to AI solutions."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-maverick-600" />,
    title: "Intelligent Design",
    description: "Sophisticated algorithms learn from your data, continuously improving and adapting to your business needs."
  }
];

const KeyPoints = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-maverick-800">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
