
import { Award, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const KeyPoints = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-maverick-600" />,
      titleKey: 'keyPoints.lightning.title',
      descriptionKey: 'keyPoints.lightning.description'
    },
    {
      icon: <Award className="h-10 w-10 text-maverick-600" />,
      titleKey: 'keyPoints.industry.title',
      descriptionKey: 'keyPoints.industry.description'
    },
    {
      icon: <Sparkles className="h-10 w-10 text-maverick-600" />,
      titleKey: 'keyPoints.intelligent.title',
      descriptionKey: 'keyPoints.intelligent.description'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-maverick-800">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
