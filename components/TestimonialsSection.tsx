import { Star } from 'lucide-react';
import React from 'react'

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Product Manager at TechFlow",
            content:
                "ZenTask completely revolutionized how we handle sprints. The AI features alone saved us 10 hours a week.",
            avatar: "SJ",
        },
        {
            name: "David Chen",
            role: "CTO at StartScale",
            content:
                "Finally, a project management tool that doesn't feel like a spreadsheet. It's intuitive, fast, and looks great.",
            avatar: "DC",
        },
        {
            name: "Elena Rodriguez",
            role: "Freelance Designer",
            content:
                "I manage multiple clients and ZenTask keeps me sane. The pricing is unbeatable for the value provided.",
            avatar: "ER",
        },
    ];
    return (
        <div id='testimonials'
            className='py-24 bg-slate-50 border-t border-slate-200'
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 ">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Loved by teams globally
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="flex text-amber-400 mb-4">
                                {
                                    [...Array(5)].map((_, i) => (
                                        <Star key={i} className='w-4 h-4 full-current' />
                                    ))
                                }
                            </div>
                            <p className="text-slate-700 mb-6 italic">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-bold text-slate-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection