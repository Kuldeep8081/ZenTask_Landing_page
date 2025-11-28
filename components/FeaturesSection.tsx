import { BarChart, Shield, Zap } from 'lucide-react';
import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Automation",
      description:
        "Stop doing busy work. Let our AI handle task assignment, scheduling, and follow-ups automatically.",
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Gain insights into team performance with beautiful, real-time dashboards that require zero configuration.",
      icon: <BarChart className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and SOC2 compliance ensure your data remains safe and private at all times.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
    },
  ];
  return (
    <div id="features" className=' py-24 bg-white'>
       <div className="max-w-7xl ax-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Everything you need to ship faster</p>
          <p className="mt-4 text-xl text-slate-500">
            ZenTask isn&apos;t jus another list app. It&apos;s a complete operating system for high-performance teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {
            features.map((feature,index)=>(
              <div
              key={index}
               className="bg-slate-50 rounded-2xl p-8 border-slate-100 hover:shadow-xl transition-shadow duration-300"
               >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-200 mb-6 ">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))
          }
        </div>
       </div>
    </div>
  )
}

export default FeaturesSection