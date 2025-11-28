import { CheckCircle, X } from 'lucide-react'
import React from 'react'

const FootarSection = () => {
    return (
        <div className='bg-slate-900 text-white py-12 border-t border-slate-800 '>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
                                <CheckCircle className='text-white w-3 h-3' />
                            </div>
                            <span className="font-bold text-lg tracking-tight">
                                ZenTask
                            </span>
                        </div>

                        <p className="text-slate-400 text-sm">
                            Simplifying project management for teams worldwide.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">
                            Product
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>
                                <a href="#" className="hover:text-white">Features</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Integrations</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Changelog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>
                                <a href="#" className="hover:text-white">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Legal</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">
                            Connect
                        </h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white">X</a>
                            <a href="#" className="text-slate-400 hover:text-white">Linkedln</a>
                            <a href="#" className="text-slate-400 hover:text-white">Glob</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    &copy; {new Date().getFullYear()} ZenTask Inc. All rights reserved.
                </div>

            </div>
        </div>
    )
}

export default FootarSection