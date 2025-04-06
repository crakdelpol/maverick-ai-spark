
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="schedule" className="section-padding bg-gradient-to-r from-maverick-900 to-maverick-800 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-maverick-100 mb-8">
                Schedule a personalized demo with our team to see how Maverick AI can help your organization 
                harness the power of artificial intelligence. We'll walk you through our platform and discuss 
                your specific needs.
              </p>
              <Button className="bg-white text-maverick-900 hover:bg-maverick-50 px-8 py-6 h-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Demo
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-maverick-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-maverick-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-medium">1</span>
                  </div>
                  <span>30-minute personalized demonstration</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-maverick-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-medium">2</span>
                  </div>
                  <span>In-depth discussion of your business needs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-maverick-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-medium">3</span>
                  </div>
                  <span>Live walkthrough of relevant features</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-maverick-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-medium">4</span>
                  </div>
                  <span>Q&A with our product specialists</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-maverick-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm font-medium">5</span>
                  </div>
                  <span>Custom implementation proposal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
