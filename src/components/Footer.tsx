import React, { useState } from 'react';

// Icons
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

// Types
interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    icon: string;
    href: string;
    label: string;
    followers?: string;
}

interface PaymentMethod {
    icon: string;
    name: string;
}

interface FooterProps {
    customerService: FooterSection;
    company: FooterSection;
    menClothing: FooterSection;
    womenClothing: FooterSection;
    mobileCovers: FooterSection;
    socialLinks: SocialLink[];
    paymentMethods: PaymentMethod[];
}

// Sub-components
const FooterSection: React.FC<{ section: FooterSection }> = ({ section }) => {
    if (!section || !section.title || !section.links) {
        return null; // or display a fallback UI
    }

    return (
        <div className="flex flex-col gap-3 lg:gap-4 w-full lg:w-1/4">
            <span className="text-[#fdd835] font-semibold text-base">
                {section.title}
            </span>
            <div className="flex lg:flex-col gap-[6px] lg:gap-2 flex-wrap">
                {section.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="flex gap-2 text-white hover:text-gray-300 transition-colors"
                    >
                        <span className="text-xs font-medium">{link.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <div className="w-full lg:w-1/4">
            <span className="text-[#fdd835] font-semibold text-base block mb-4">
                KEEP UP TO DATE
            </span>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Id:"
                    className="flex-1 px-3 py-2 bg-white rounded-l text-sm"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#fdd835] text-black px-4 py-2 font-medium rounded-r hover:bg-[#fdd835]/90 transition-colors"
                >
                    SUBSCRIBE
                </button>
            </form>
        </div>
    );
};

const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => {
    const iconMap: Record<string, React.FC> = {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
    };

    return (
        <div className="flex flex-col gap-4">
            {links.map((link, index) => {
                const Icon = iconMap[link.icon];
                return (
                    <a
                        key={index}
                        href={link.href}
                        className="flex gap-2 items-baseline text-white hover:text-gray-300 transition-colors"
                    >
                        {Icon && <Icon size={16} />}
                        {link.followers && (
                            <span className="text-xs font-medium">{link.followers} People like this</span>
                        )}
                    </a>
                );
            })}
        </div>
    );
};

const PaymentMethods: React.FC<{ methods: PaymentMethod[] }> = ({ methods }) => {
    return (
        <div className="flex flex-wrap gap-1">
            {methods.map((method, index) => (
                <div
                    key={index}
                    className="h-5 w-[35px] bg-white rounded-sm flex items-center justify-center"
                >
                    <img
                        src={method.icon}
                        alt={`Pay with ${method.name}`}
                        className="h-4 w-auto"
                    />
                </div>
            ))}
        </div>
    );
};

// Main Footer Component
export const Footer: React.FC<FooterProps> = ({
    customerService,
    company,
    menClothing,
    womenClothing,
    mobileCovers,
    socialLinks,
    paymentMethods,
}) => {
    return (
        <footer className="bg-[#181818] text-white py-12 mt-10 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-2 flex flex-col lg:flex-row gap-8">
                        <FooterSection section={customerService} />
                        <FooterSection section={company} />
                    </div>
                    <Newsletter />
                    <div>
                        <span className="text-[#fdd835] font-semibold text-base block mb-4">
                            CONNECT WITH US
                        </span>
                        <SocialLinks links={socialLinks} />
                    </div>
                </div>

                {/* Middle Section - Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-t border-gray-700">
                    <FooterSection section={menClothing} />
                    <FooterSection section={womenClothing} />
                    <FooterSection section={mobileCovers} />
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        <div>
                            <span className="text-[#fdd835] font-semibold text-base block mb-2">
                                100% SECURE PAYMENT
                            </span>
                            <PaymentMethods methods={paymentMethods} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4">
                                <a href="/contact-us/refund-or-return" className="flex gap-2 text-white hover:text-gray-300">
                                    <span className="text-xs">15 Days Return Policy*</span>
                                </a>
                                <a href="/contact-us/order-delivery-payment" className="flex gap-2 text-white hover:text-gray-300">
                                    <span className="text-xs">Cash On Delivery*</span>
                                </a>
                            </div>
                            <p className="text-xs text-gray-400">
                                © {new Date().getFullYear()} Bewakoof®. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>

                {/* Brand Description */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <h1 className="text-lg font-semibold mb-4">
                        BEWAKOOF® THE NEW AGE ONLINE SHOPPING EXPERIENCE.
                    </h1>
                    <p className="text-sm text-gray-300">
                        Founded in 2012, Bewakoof® is a lifestyle fashion brand that makes creative, distinctive fashion
                        for the trendy, contemporary Indian. Bewakoof® was created on the principle of creating impact
                        through innovation, honesty and thoughtfulness.
                    </p>
                </div>
            </div>
        </footer>
    );
};
