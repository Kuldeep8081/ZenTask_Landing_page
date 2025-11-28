"use client";
import { CheckCheck, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Pricing", href: "#pricing" },
    ];
    return (
        <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-between items-center h-16 '>
                    {/* Logo */}
                    <div className="shrink-0 flex items-center gap-2 cursor-pointer ">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <CheckCheck className='text-white w-5 h-5' />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">ZenTask</span>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {
                            navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className='text-slate-600 hover:text-indigo-600 font-medium transition-colors'
                                >
                                    {link.name}
                                </a>
                            ))
                        }
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium transition-colors">Get Started</button>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='text-slate-600 hover:text-indigo-600 focus:outline'
                        >
                            {isMobileMenuOpen ? (
                                <X className='w-6 h-6' />
                            ) : (
                                <Menu className='w-6 h-6' />
                            )
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {
                isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-b border-slate-200 animate-fade-in">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {
                                navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className='block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                                    >
                                        {link.name}
                                    </a>
                                ))
                            }
                            <div className="mt-4 px-3">
                                <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar