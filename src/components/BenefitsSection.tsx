
import { Card } from "@/components/ui/card";
import { Sun, Droplet, Water, Flask } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Choose AquaPure Solar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our system offers unmatched sustainability, portability, and water quality improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Sun className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">100% Sustainable</h3>
            <p className="text-gray-600">
              Powered entirely by solar energy with zero carbon emissions. No electricity or fuel required for operation.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-blue-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Droplet className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Portable Design</h3>
            <p className="text-gray-600">
              Lightweight and easy to transport. Perfect for remote areas, islands, and emergency situations.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-cyan-200">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
              <Flask className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Enhanced Water Quality</h3>
            <p className="text-gray-600">
              Removes 99.9% of salts and contaminants, then adds essential minerals for optimal health and taste.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-purple-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Water className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Low Maintenance</h3>
            <p className="text-gray-600">
              Simple design with minimal moving parts. Easy cleaning and occasional mineral cartridge replacement.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-orange-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Sun className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Cost Effective</h3>
            <p className="text-gray-600">
              Low initial investment with virtually no operational costs. Pays for itself through clean water production.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-teal-200">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Droplet className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Chemical-Free</h3>
            <p className="text-gray-600">
              No chemicals, additives, or artificial processes. Pure solar distillation with natural mineralization.
            </p>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Global Impact Potential</h3>
            <p className="text-xl opacity-90">
              Bringing clean water access to communities worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="opacity-90">Liters per year per unit</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">People served per unit</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0kg</div>
              <div className="opacity-90">CO₂ emissions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
