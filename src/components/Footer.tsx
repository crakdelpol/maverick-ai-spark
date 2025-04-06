
const Footer = () => {
  return (
    <footer className="bg-maverick-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Maverick AI</h3>
            <p className="text-maverick-300 mb-4">
              Transforming businesses with intelligent AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-maverick-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-maverick-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-maverick-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-maverick-300 hover:text-white">Data Analytics</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">Predictive Insights</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">Business Intelligence</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">AI Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-maverick-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">Case Studies</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-maverick-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-maverick-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-maverick-800 pt-8">
          <p className="text-center text-maverick-400">
            &copy; {new Date().getFullYear()} Maverick AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
