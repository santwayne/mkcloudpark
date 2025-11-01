import React from 'react';
import { Truck, MapPin, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import pic from "../assets/service-map.png";

const AboutServices = () => {
  const colors = {
    primary: 'hsl(195, 100%, 50%)',
    primaryDark: 'hsl(213, 89%, 39%)',
    primaryLight: 'hsl(195, 100%, 70%)'
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span
                className="font-semibold text-sm tracking-wider uppercase"
                style={{ color: colors.primary }}
              >
                OUR LOGISTICS SERVICES
              </span>
              <div
                className="h-1 w-12 mt-2"
                style={{ backgroundColor: colors.primary }}
              ></div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Driven by Precision,
              <br />
              <span style={{ color: colors.primary }}>Every Step of the Way</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="font-semibold" style={{ color: colors.primary }}>CloudPark Logistics</span> connects
              the supply chain industry with their clients across Canada and the USA. We deliver seamless cross-country
              and cross-border logistics solutions backed by advanced technology and a commitment to excellence.
            </p>

            {/* Route Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="text-xl">🇨🇦</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Canada</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Coast-to-coast delivery across Canadian provinces
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="text-xl">🇺🇸</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">USA</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Strategic cross-border shipping nationwide
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="group text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                style={{ backgroundColor: colors.primary }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primaryDark}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary}
              >
                TALK TO A SPECIALIST
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src={pic}
                alt="America and Canada Service Coverage Map"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: colors.primary }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;