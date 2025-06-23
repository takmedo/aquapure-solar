
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SpecificationsSection = () => {
  return (
    <section id="specs" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Technical Specifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Product Details & Dimensions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered for optimal performance, durability, and ease of use in challenging environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dimensions */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">System Dimensions</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Base Tray (Water Basin)</span>
                <span className="font-mono text-blue-600">40×30×10 cm</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Transparent Cover</span>
                <span className="font-mono text-blue-600">45×35×5 cm</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Collection Trough</span>
                <span className="font-mono text-blue-600">40 cm length</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Mineral Cartridge</span>
                <span className="font-mono text-blue-600">10×5 cm</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700">Total Weight</span>
                <span className="font-mono text-green-600">≤ 3.5 kg</span>
              </div>
            </div>
          </Card>

          {/* Materials */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Premium Materials</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-900">Basin & Frame</h4>
                <p className="text-gray-600">Food-safe stainless steel or UV-resistant polymer</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-900">Transparent Cover</h4>
                <p className="text-gray-600">Tempered glass or UV-resistant acrylic</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-900">Seals & Gaskets</h4>
                <p className="text-gray-600">Food-grade silicone for vapor-tight operation</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-gray-900">Mineral Cartridge</h4>
                <p className="text-gray-600">Natural shells, charcoal in mesh housing</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Performance Table */}
        <Card className="p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Performance Specifications</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Parameter</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Input (Seawater)</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">After Distillation</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Final Output</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">TDS (Total Dissolved Solids)</td>
                  <td className="py-3 px-4 text-red-600 font-mono">~35,000 mg/L</td>
                  <td className="py-3 px-4 text-blue-600 font-mono">&lt;10 mg/L</td>
                  <td className="py-3 px-4 text-green-600 font-mono">50-150 mg/L</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">pH Level</td>
                  <td className="py-3 px-4 text-orange-600 font-mono">7.8-8.2</td>
                  <td className="py-3 px-4 text-red-600 font-mono">5.5-6.0</td>
                  <td className="py-3 px-4 text-green-600 font-mono">7.0-8.0</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Calcium (Ca)</td>
                  <td className="py-3 px-4 text-red-600 font-mono">~400 mg/L</td>
                  <td className="py-3 px-4 text-red-600 font-mono">~0 mg/L</td>
                  <td className="py-3 px-4 text-green-600 font-mono">20-30 mg/L</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700">Magnesium (Mg)</td>
                  <td className="py-3 px-4 text-red-600 font-mono">~1,300 mg/L</td>
                  <td className="py-3 px-4 text-red-600 font-mono">~0 mg/L</td>
                  <td className="py-3 px-4 text-green-600 font-mono">5-10 mg/L</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-700">Daily Production</td>
                  <td className="py-3 px-4 text-gray-500">-</td>
                  <td className="py-3 px-4 text-gray-500">-</td>
                  <td className="py-3 px-4 text-green-600 font-mono">2-4 L/m²/day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Operating Conditions */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6">
            <h4 className="font-bold mb-4 text-gray-900">Optimal Operating Conditions</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Temperature:</strong> 20-40°C ambient</li>
              <li>• <strong>Sunlight:</strong> 6-8 hours direct exposure</li>
              <li>• <strong>Humidity:</strong> &lt;80% relative humidity</li>
              <li>• <strong>Wind:</strong> Minimal wind for best efficiency</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="font-bold mb-4 text-gray-900">Maintenance Schedule</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Daily:</strong> Check water levels</li>
              <li>• <strong>Weekly:</strong> Clean transparent cover</li>
              <li>• <strong>Monthly:</strong> Replace mineral cartridge</li>
              <li>• <strong>Seasonal:</strong> Inspect seals and gaskets</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
