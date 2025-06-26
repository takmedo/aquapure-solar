
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate sending email - in a real app, this would go through a backend service
      const emailData = {
        to: 'hammataktak@yahoo.com',
        subject: `AquaPure Inquiry from ${formData.firstName} ${formData.lastName}`,
        body: `
          New inquiry from AquaPure website:
          
          Name: ${formData.firstName} ${formData.lastName}
          Email: ${formData.email}
          Organization: ${formData.organization}
          
          Message:
          ${formData.message}
        `
      };

      console.log('Email would be sent with data:', emailData);

      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest in AquaPure. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Get Started Today
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Bring Clean Water to Your Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? Contact us to learn more about AquaPure Solar 
            and how we can help solve water scarcity in your region.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Request Information</h3>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input 
                    name="firstName"
                    placeholder="Enter your first name" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input 
                    name="lastName"
                    placeholder="Enter your last name" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization/Location
                </label>
                <Input 
                  name="organization"
                  placeholder="Organization or location" 
                  value={formData.organization}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your water challenges and how we can help..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Partnership Opportunities</h3>
              <p className="text-gray-600 mb-6">
                We're looking for partners, distributors, and organizations committed to 
                bringing sustainable water solutions to communities worldwide.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  NGOs and humanitarian organizations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Government agencies and development programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Local distributors and retailers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Educational institutions and researchers
                </li>
              </ul>
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                Learn About Partnerships
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Impact Goals</h3>
              <p className="text-gray-600 mb-6">
                Our mission is to provide clean water access to 1 million people by 2030 
                through sustainable solar water purification technology.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">10,000+</div>
                  <div className="text-sm text-gray-600">Units Goal</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white text-center">
              <h4 className="font-bold mb-2">Ready to Make a Difference?</h4>
              <p className="mb-4 opacity-90">Join the clean water revolution today</p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Download Product Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
