import { CheckCircle } from 'lucide-react';
import React from 'react'

const PricingSection = () => {
     const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      features: [
        "Up to 5 Projects",
        "Basic Analytics",
        "2 Team Members",
        "Community Support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      features: [
        "Unlimited Projects",
        "AI Automation",
        "Up to 20 Team Members",
        "Priority Support",
        "Custom Workflows",
      ],
      cta: "Get Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Everything",
        "Dedicated Success Manager",
        "SSO & Advanced Security",
        "SLA Guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];
  return (
    <div id='pricing'
    className='py-24 bg-white'
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Simple, transparent pricing
                </h2>
                <p className="mt-4 text-xl text-slate-500">
                    Start for free, upgrade as you grow. No hidden fees.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {
                    plans.map((plan,index)=>(
                        <div 
                        key={index}
                        className={`relative rounded-2xl p-8 border ${plan.popular
                            ?"border-indigo-600 shadow-2xl scale-105 z-10 bg-white"
                        :"border-slate-200 bg-slate-50/50 "}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-lg font-semibold text-slate-900">
                                {plan.name}
                            </h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-extrabold text-slate-900 ">
                                    {plan.price}
                                </span>
                                <span className="ml-1 text-slate-500">
                                    {plan.period}
                                </span>
                            </div>
                            <p className="mt-6 text-sm text-slate-500">
                                Perfect for:{""}
                                {index===0
                                ?"Individuals"
                                :index===1
                                ?"Growing Teams"
                                :"Large Organizations"
                                }
                            </p>
                            <ul className="mt-6 space-y-4">
                                {plan.features.map((feature,idx)=>(
                                    <li 
                                    key={idx}
                                    className="mt-6 space-y-4">
                                        <CheckCircle className='shrink-0 w-5 h-5 text-indigo-600 '/>
                                        <span className="ml-3 text-sm text-slate-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors
                                    ${plan.popular?
                                "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30  "
                                :"bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 "} `}>
                                    {plan.cta}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PricingSection