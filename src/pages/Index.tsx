
import { Button } from "@/components/ui/button";
import { Card, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, Sun, Beaker, Waves, CircleArrowDown, Thermometer } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProductGallery } from "@/components/ProductGallery";
import { SpecificationsSection } from "@/components/SpecificationsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AquaPure
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#problem" className="text-gray-700 hover:text-blue-600 transition-colors">Problem</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Technology</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#specs" className="text-gray-700 hover:text-blue-600 transition-colors">Specifications</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            Get Started
          </Button>
        </div>
      </nav>

      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <ProductGallery />
      <BenefitsSection />
      <SpecificationsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplet className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">AquaPure Solar</span>
              </div>
              <p className="text-gray-400">
                Revolutionary solar water purification technology for a sustainable future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AquaPure Solar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
