
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-maverick-950 mb-6">
            {t('hero.title')} <span className="text-maverick-600">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-maverick-600 hover:bg-maverick-700 text-white px-8 py-6 h-auto">
              {t('hero.getStarted')}
            </Button>
            <Button variant="outline" className="px-8 py-6 h-auto">
              {t('hero.bookDemo')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
