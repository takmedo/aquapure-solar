
import { Card } from "@/components/ui/card";
import { Water, Droplet, AlertTriangle } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            The Global Water Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Billions of people lack access to clean drinking water. Traditional sources are contaminated 
            by saltwater intrusion, droughts, or inadequate infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center border-red-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">2.2 Billion</h3>
            <p className="text-gray-600">People lack access to safely managed drinking water at home</p>
          </Card>

          <Card className="p-8 text-center border-orange-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplet className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-2">4.2 Billion</h3>
            <p className="text-gray-600">People live without safely managed sanitation services</p>
          </Card>

          <Card className="p-8 text-center border-blue-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Water className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Small Islands</h3>
            <p className="text-gray-600">Face unique challenges with saltwater intrusion and limited freshwater</p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Our Solution: Solar-Powered Water Purification
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                AquaPure Solar addresses these challenges with a sustainable, portable system that 
                transforms any water source into clean, mineralized drinking water using only solar energy.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  No electricity or fuel required
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Works with seawater and brackish water
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Portable and easy to maintain
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Naturally remineralizes water for health
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold mb-4 text-gray-900">Water Quality Transformation</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Salt Content (TDS)</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-600 font-mono">35,000 mg/L</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-mono">50-150 mg/L</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">pH Level</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-600 font-mono">5.5-6.0</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-mono">7.0-8.0</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Minerals</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-600 font-mono">None</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-mono">Balanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
