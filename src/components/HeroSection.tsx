
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Droplet, Sun, Beaker, Wind, Play, BookOpen } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Revolutionary Solar + Wind Water Technology
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
            AquaPure
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform seawater and brackish water into clean, mineralized drinking water using our innovative hybrid solar-wind distillation system. Featuring integrated solar panels and mini wind turbine for enhanced evaporation and continuous operation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Dialog open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-3">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">About AquaPure Technology</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-left">
                <p className="text-gray-600">
                  AquaPure represents a breakthrough in sustainable water purification technology, combining solar and wind energy to create clean drinking water from seawater and brackish water sources.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Solar Integration</h4>
                    <p className="text-sm text-blue-700">Direct solar heating accelerates the evaporation process, making distillation more efficient even in moderate sunlight conditions.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Wind Enhancement</h4>
                    <p className="text-sm text-green-700">Mini wind turbine improves air circulation, enhancing condensation and enabling 24/7 operation.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Mineral Restoration</h4>
                  <p className="text-sm text-gray-700">Our integrated mineral filter ensures the purified water contains essential minerals for optimal health and taste.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">AquaPure Demo</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-blue-600 font-semibold">Interactive Demo Coming Soon</p>
                    <p className="text-sm text-blue-500 mt-2">Experience our virtual prototype</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">Step 1</div>
                    <div className="text-gray-600">Add seawater to the distillation chamber</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">Step 2</div>
                    <div className="text-gray-600">Solar + wind energy begins purification</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">Step 3</div>
                    <div className="text-gray-600">Collect clean, mineralized water</div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Product Visualization */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 backdrop-blur-sm border border-blue-200/50">
            <div className="grid md:grid-cols-4 gap-6 items-center">
              {/* Input */}
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Droplet className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">Seawater Input</h3>
                <p className="text-sm text-gray-500">35,000 mg/L TDS</p>
              </div>

              {/* Solar Process */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sun className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">Solar Panels</h3>
                <p className="text-sm text-gray-500">Direct heating</p>
              </div>

              {/* Wind Process */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Wind className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">Mini Wind Turbine</h3>
                <p className="text-sm text-gray-500">Enhanced circulation</p>
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
              <div className="w-full h-px bg-gradient-to-r from-blue-300 via-yellow-300 via-green-300 to-emerald-300 relative">
                <div className="absolute left-1/4 top-0 w-2 h-2 bg-yellow-400 rounded-full transform -translate-y-1/2"></div>
                <div className="absolute left-2/4 top-0 w-2 h-2 bg-green-400 rounded-full transform -translate-y-1/2"></div>
                <div className="absolute right-1/4 top-0 w-2 h-2 bg-emerald-400 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
