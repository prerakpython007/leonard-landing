"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { internationalServices } from "~/lib/serviceData";
import { ArrowLeft, Calendar, DollarSign, CheckCircle, Clock, Users, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.slug as string;
  
  // Find the service by extracting the last part of the route
  const service = internationalServices.find(
    s => {
      const routeParts = s.route.split('/');
      const lastPart = routeParts[routeParts.length - 1];
      return lastPart === serviceId;
    }
  );

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#EEEEEE] to-[#E0E0E0] flex items-center justify-center px-4">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Service Not Found</h1>
          <p className="mb-6 text-gray-600">The service you're looking for doesn't exist.</p>
          <Link 
            href="/service/international" 
            className="inline-flex items-center text-[#00ADB5] hover:text-[#008A90] font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] font-montserrat">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative h-full flex items-center">
          <div className="max-w-4xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/service/international"
                className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                Back to Services
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <IconComponent className="h-7 w-7" />
              </div>
              <span className="px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm">
                {service.category}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {service.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl max-w-2xl leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f8f9fa] to-transparent"></div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 -mt-2">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-[#00ADB5] pl-4">Service Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {service.detailedDescription}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-5 text-gray-800 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-[#00ADB5]" />
                    Our Process
                  </h3>
                  <ol className="space-y-4">
                    {service.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00ADB5] text-white flex items-center justify-center mr-4 font-medium">
                          {index + 1}
                        </div>
                        <p className="text-gray-600 pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-[#00ADB5] to-[#008A90] rounded-2xl p-6 text-white shadow-md"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Service Highlights
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className="p-2 bg-white/20 rounded-lg mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Timeline</p>
                      <p className="font-medium">{service.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-2 bg-white/20 rounded-lg mr-4">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Pricing</p>
                      <p className="font-medium">{service.pricing}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-5 text-gray-800">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#00ADB5] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how we can help protect your interests internationally.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:info@leonardsolutions.in"
                    className="block w-full bg-[#00ADB5] hover:bg-[#008A90] text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}