'use client';

import { Button } from '@/components/ui/button';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const inter = Montserrat({ subsets : ['latin'], weight: ["700"],});

interface NavbarItemsProps {
    href: string
    children: React.ReactNode
    isActive?: boolean
}
const NavbarItems = ({
    href,
    children,
    isActive
}: NavbarItemsProps) => {
    return (
    <Link href={href}>
        <Button variant={'outline'} className={`border-0 bg-transparent rounded-full 
        hover:bg-amber-50 hover:text-amber-700 hover:shadow-sm transition-all
        ${isActive ? 'bg-amber-50 text-amber-700 shadow-sm' : ''}`}>
            {children}
        </Button>
    </Link>
    );
};

const navbaritem = [
    {href : "/", children: "Home"},
    {href : "/products", children: "Products"},
    {href : "/about", children: "About"},
    {href : "/Pricing", children: "Pricing"},
    {href : "/Contact", children: "Contact"},
]

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="border-b border-amber-100 font-medium bg-white/95" >
            <div className='mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-6'>
                <Link href='/' className='flex shrink-0 items-center'>
                    <span className={`text-4xl leading-none font-semibold lg:text-5xl ${inter.className}`}>BrewMarket</span>
                </Link>

                <div className='hidden flex-1 items-center justify-center gap-x-2 px-6 md:flex lg:gap-x-4'>
                    {navbaritem.map((item, idx) => (
                    <NavbarItems key={item.href + idx} href={item.href}
                    isActive={pathname === item.href}>
                    {item.children}
                    </NavbarItems>
                    ))}
                </div>

                <div className='flex shrink-0 items-center gap-x-2 md:gap-x-4'>
                    <Button asChild variant={'ghost'} size={'sm'}
                    className='h-10 border-0 text-black hover:bg-amber-50 hover:text-amber-700 hover:border-0 transition-colors'>
                        <Link href='/sign-in'>Log In</Link>
                    </Button>
                    <Button asChild variant={'ghost'} size={'sm'}
                    className='h-10 border-0 text-black hover:bg-amber-50 hover:text-amber-700 hover:border-0'>
                        <Link href="/sign-up">Checkout</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};