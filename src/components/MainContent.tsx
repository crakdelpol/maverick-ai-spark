
import { CheckCircle, Activity, Code, Database, Shield } from "lucide-react";

const MainContent = () => {
  return (
    <section id="product" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-maverick-900">
              Intelligent Solutions For Modern Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines cutting-edge machine learning with intuitive design, creating 
              powerful tools that transform how businesses operate.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Activity className="h-6 w-6 text-maverick-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-maverick-800">Real-time Analytics</h3>
                  <p className="text-muted-foreground">Monitor business metrics and respond to changes instantly</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Code className="h-6 w-6 text-maverick-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-maverick-800">Adaptable Framework</h3>
                  <p className="text-muted-foreground">Customizable solutions that scale with your business needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Database className="h-6 w-6 text-maverick-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-maverick-800">Smart Data Integration</h3>
                  <p className="text-muted-foreground">Seamlessly connect with your existing data infrastructure</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-maverick-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-maverick-800">Enterprise Security</h3>
                  <p className="text-muted-foreground">Bank-level protection for your sensitive information</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-maverick-800">Technical Specifications</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-maverick-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>99.9% system reliability with redundant architecture</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-maverick-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Processing over 10,000 events per second</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-maverick-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Sub-millisecond response times for critical operations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-maverick-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Seamless integration with major cloud providers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-maverick-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Scalable from startup to enterprise deployments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-maverick-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>SOC 2 Type II and GDPR compliant</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-maverick-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Continuous updates and improvements via cloud delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
