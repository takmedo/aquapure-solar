
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Thermometer, Droplet, Beaker, Wind } from "lucide-react";

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Hybrid Solar-Wind Distillation + Remineralization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative dual-energy system combines solar panels and mini wind turbine to accelerate evaporation and ensure continuous operation, even in varying weather conditions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplet className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">1. Water Input</h3>
            <p className="text-sm text-gray-600">Seawater or brackish water enters the evaporation chamber</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">2. Solar Heating</h3>
            <p className="text-sm text-gray-600">Integrated solar panels concentrate heat for rapid evaporation</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wind className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">3. Wind Circulation</h3>
            <p className="text-sm text-gray-600">Mini turbine enhances air circulation and evaporation rate</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Thermometer className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">4. Condensation</h3>
            <p className="text-sm text-gray-600">Pure vapor condenses on cooler surfaces and flows to collection</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Beaker className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">5. Remineralization</h3>
            <p className="text-sm text-gray-600">Distilled water passes through mineral cartridge for optimal health</p>
          </Card>
        </div>

        {/* Detailed Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Hybrid Energy Technology</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold mb-3 text-gray-900 flex items-center">
                  <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                  Solar Panel Integration
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Concentrated heating:</strong> Direct solar energy conversion</li>
                  <li>• <strong>Efficiency boost:</strong> 40-60% faster evaporation</li>
                  <li>• <strong>All-day operation:</strong> Peak performance 6-10 hours</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold mb-3 text-gray-900 flex items-center">
                  <Wind className="h-5 w-5 text-green-500 mr-2" />
                  Mini Wind Turbine (Éolienne)
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Air circulation:</strong> Enhanced vapor movement</li>
                  <li>• <strong>Consistent operation:</strong> Works even with light breeze</li>
                  <li>• <strong>Weather backup:</strong> Maintains production on cloudy days</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold mb-3 text-gray-900">Natural Mineral Sources</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Eggshells:</strong> Rich in calcium carbonate</li>
                  <li>• <strong>Oyster shells:</strong> Calcium and trace minerals</li>
                  <li>• <strong>Activated charcoal:</strong> pH balance and filtration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
            <h4 className="font-bold mb-6 text-center text-gray-900">Enhanced Production Capacity</h4>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">4-8 Liters</div>
              <div className="text-gray-600">per square meter per day</div>
              <div className="text-sm text-green-600 mt-1">2x faster than traditional solar distillation</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Solar operation:</span>
                <span className="font-semibold">6-10 hours peak</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wind assistance:</span>
                <span className="font-semibold">24/7 potential</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">System efficiency:</span>
                <span className="font-semibold">75-90%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Energy consumption:</span>
                <span className="font-semibold text-green-600">Zero external power</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
