'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search, ShoppingBag, UserCircle2, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/Pricing', label: 'Pricing' },
    { href: '/Contact', label: 'Contact' },
    { href: '/sell', label: 'Sell' },
];

const iconButtonClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE0D5] bg-white/70 text-[#5C4033] transition hover:bg-white hover:text-[#3C2A21]';

export const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 border-b border-[#EAE0D5]/80 bg-[#FDFBF9]/70 backdrop-blur-xl">
                <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center">
                        <span className="font-display text-3xl font-semibold text-[#3C2A21] lg:text-4xl">
                            BrewMarket
                        </span>
                    </Link>

                    <div className="hidden items-center gap-2 md:flex lg:gap-3">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                asChild
                                variant="ghost"
                                size="sm"
                                className={`rounded-full border border-transparent px-4 text-sm text-[#5C4033] transition ${
                                    isActive(item.href)
                                        ? 'border-[#EAE0D5] bg-white text-[#3C2A21]'
                                        : 'hover:border-[#EAE0D5] hover:bg-white/80 hover:text-[#3C2A21]'
                                }`}
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        ))}
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                        <Link href="/products" aria-label="Search products" className={iconButtonClass}>
                            <Search className="h-4 w-4" />
                        </Link>
                        <Link href="/sign-in" aria-label="My account" className={iconButtonClass}>
                            <UserCircle2 className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/cart"
                            aria-label="View cart"
                            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE0D5] bg-[#826251] text-white transition hover:bg-[#6f5243]"
                        >
                            <ShoppingBag className="h-4 w-4" />
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#3C2A21] px-1 text-[11px] font-semibold text-white">
                                2
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <Link href="/products" aria-label="Search products" className={iconButtonClass}>
                            <Search className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/cart"
                            aria-label="View cart"
                            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE0D5] bg-[#826251] text-white"
                        >
                            <ShoppingBag className="h-4 w-4" />
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#3C2A21] px-1 text-[11px] font-semibold text-white">
                                2
                            </span>
                        </Link>
                        <button
                            type="button"
                            aria-label="Open menu"
                            onClick={() => setMenuOpen(true)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE0D5] bg-white/70 text-[#5C4033]"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close menu overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-[#3C2A21]/25 md:hidden"
                        />

                        <motion.aside
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                            className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[88vw] flex-col border-l border-[#EAE0D5] bg-[#FDFBF9] p-5 shadow-2xl md:hidden"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <span className="font-display text-2xl font-semibold text-[#3C2A21]">Menu</span>
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE0D5] bg-white text-[#5C4033]"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`rounded-lg border px-4 py-3 text-sm font-medium transition ${
                                            isActive(item.href)
                                                ? 'border-[#DCCFC1] bg-white text-[#3C2A21]'
                                                : 'border-transparent bg-[#f6ede4]/60 text-[#5C4033] hover:border-[#EAE0D5] hover:bg-white'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-2">
                                <Button asChild className="h-11">
                                    <Link href="/sign-in">Sign In</Link>
                                </Button>
                                <Button asChild variant="outline" className="h-11 border-[#EAE0D5] bg-white">
                                    <Link href="/sign-up">Create Account</Link>
                                </Button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};