import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='relative pt-20 bg-32 overflow-hidden'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                {/* Hero Text */}
                <div className="lg:col-span-6 text-center lg:text-left">
                    <div className="inline-flex items-center  px-3 py-1 text-indigo-700 bg-indigo-100 rounded-full text-sm font-semibold mb-6">
                        <span className="flex h-2 w-2 bg-indigo-600 rounded-full mr-2 "></span>
                        v2.0 is now live
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        Manage projects <br className='hidden lg:block ' />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500">without the chaos.</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        ZenTask combines powerfull AI automation with with a simple, intuitive
                        interface. Streamline your workflow and focus on what  actually matters.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
                            Start Free Trial
                            <ArrowRight className='ml-2 w-5 h-5' />
                        </button>
                        <button className=" inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all">
                            View Demo
                        </button>
                    </div>
                    <p className=" mt-4 text-sm text-slate-500">
                        No credit car required . 14-day free trial
                    </p>
                </div>
                {/* Hero Visual */}
                <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
                    <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-200 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="rounded-xl bg-slate-50 overflow-hidden aspect-4/3 flex flex-col ">
                            {/* Mock UI Header */}
                            <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                <div className="ml-4 w-1/2 h-3 rounded-full bg-slate-400"></div>
                            </div>
                            {/* Mock UI Body */}
                            <div className="p-6 flex-1 relative">
                                <div className="flex gap-4 mb-6">
                                    <div className="w-1/3 h-24 bg-white rounded-lg border border-slate-200 shadow-sm p-3">
                                        <div className="h-2 w-16 bg-indigo-100 rounded mb-2"></div>
                                        <div className="h-8 w-8 bg-indigo-50 rounded-full mb-2"></div>
                                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                                    </div>
                                    <div className="w-1/3 h-24 bg-white rounded-lg border border-slate-200 shadow-sm p-3">
                                        <div className="h-2 w-16 bg-emerald-100 rounded mb-2"></div>
                                        <div className="h-8 w-8 bg-emerald-50 rounded-full mb-2"></div>
                                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                                    </div>
                                    <div className="w-1/3 h-24 bg-white rounded-lg border border-slate-200 shadow-sm p-3">
                                        <div className="h-2 w-16 bg-amber-100 rounded mb-2"></div>
                                        <div className="h-8 w-8 bg-amber-50 rounded-full mb-2"></div>
                                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-10 w-full bg-white rounded border-slate-200"></div>
                                    <div className="h-10 w-full bg-white rounded border-slate-200"></div>
                                    <div className="h-10 w-full bg-white rounded border-slate-200"></div>
                                </div>

                                {/* Floating notification */}
                                <div className="absolute bottom-6 right-6 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm flex items-center gap-2">
                                    <CheckCircle className='w-4 h-4 text-emerald-400' />
                                    Task Completed
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Blur */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/20 blur-3xl rounded-full ">
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection