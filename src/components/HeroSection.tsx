
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplet, Sun, Beaker } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Revolutionary Water Technology
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
            Pure Water from
            <br />
            Solar Energy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform seawater and brackish water into clean, mineralized drinking water using our innovative solar distillation system. Sustainable, portable, and designed for water-scarce regions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-3">
            Learn More
          </Button>
          <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
            View Demo
          </Button>
        </div>

        {/* Product Visualization */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 backdrop-blur-sm border border-blue-200/50">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Input */}
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Droplet className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">Seawater Input</h3>
                <p className="text-sm text-gray-500">35,000 mg/L TDS</p>
              </div>

              {/* Process */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sun className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">Solar Distillation</h3>
                <p className="text-sm text-gray-500">+ Remineralization</p>
              </div>

              {/* Output */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Beaker className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">Pure Water</h3>
                <p className="text-sm text-gray-500">50-150 mg/L TDS</p>
              </div>
            </div>

            {/* Flow arrows */}
            <div className="hidden md:flex justify-center items-center mt-8">
              <div className="w-full h-px bg-gradient-to-r from-blue-300 via-yellow-300 to-green-300 relative">
                <div className="absolute left-1/3 top-0 w-2 h-2 bg-yellow-400 rounded-full transform -translate-y-1/2"></div>
                <div className="absolute right-1/3 top-0 w-2 h-2 bg-green-400 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
