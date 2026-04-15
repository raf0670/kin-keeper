import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                    KeenKeeper
                </h2>

                <p className="max-w-2xl text-emerald-100/80 text-lg mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture
                    the relationships that matter most.
                </p>

                <div className="space-y-4 mb-12">
                    <h3 className="text-xl font-semibold">Social Links</h3>
                    <div className="flex gap-4 justify-center">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#244D3F] hover:bg-emerald-100 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#244D3F] hover:bg-emerald-100 transition-colors">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#244D3F] hover:bg-emerald-100 transition-colors">
                            <FaXTwitter size={18} />
                        </a>
                    </div>
                </div>

                <div className="w-full border-t border-gray-500 pt-8 flex flex-col md:row items-center justify-between gap-6 md:flex-row text-sm text-emerald-100/60">

                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;