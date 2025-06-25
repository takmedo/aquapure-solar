
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";

export const ProductGallery = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Real Prototype
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            AquaPure in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our working prototype that transforms seawater into clean drinking water using innovative solar distillation technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-square relative">
              <img 
                src="/lovable-uploads/a0b2f4c5-b0d8-4e3f-9c7a-8d5e6f7a8b9c.jpg" 
                alt="AquaPure prototype showing the complete system with solar lid and collection container"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                <Camera className="h-5 w-5 text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Complete System</h3>
              <p className="text-gray-600 text-sm">
                The full AquaPure setup showing the distillation unit with transparent solar lid and separate collection container with mineral filter.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-square relative">
              <img 
                src="/lovable-uploads/f8e9d0c1-a2b3-4c5d-8e7f-9a0b1c2d3e4f.jpg" 
                alt="Close-up view of AquaPure showing the clean, minimalist design and beige color scheme"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                <Camera className="h-5 w-5 text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Design Detail</h3>
              <p className="text-gray-600 text-sm">
                Close-up view highlighting the clean, minimalist design with beige/tan color scheme and portable form factor.
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-4 text-gray-900">Key Features Visible</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <div className="font-semibold text-gray-900">• Transparent Solar Lid</div>
                <div className="text-gray-600">Maximizes solar heat capture</div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">• Separate Collection</div>
                <div className="text-gray-600">Clean water storage container</div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">• Mineral Filter</div>
                <div className="text-gray-600">Healthy water remineralization</div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">• Portable Design</div>
                <div className="text-gray-600">Compact and easy to transport</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
