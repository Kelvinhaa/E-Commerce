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
        hover:bg-amber-100 hover:text-amber-700 hover:shadow-md hover:scale-105 transition-all
        ${isActive ? 'bg-amber-100 text-amber-700 shadow-md' : ''}`}>
            {children}
        </Button>
    </Link>
    );
};

const navbaritem = [
    {href : "/", children: "Home"},
    {href : "/about", children: "About"},
    {href : "/Pricing", children: "Pricing"},
    {href : "/Contact", children: "Contact"},
]

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="h-20 justify-between flex border-b font-medium bg-amber-50" >
            <Link href='/' className='flex items-center'>
                <span className={`text-5xl font-semibold ${inter.className}`}>Coffee</span>
            </Link>
            <div className='flex items-center gap-x-4 lg:flex'>
                {navbaritem.map((item, idx) => (
                 <NavbarItems key={item.href + idx} href={item.href}
                 isActive={pathname === item.href}>
                {item.children}
                 </NavbarItems>
                ))}
            </div>
            
            <div className='flex gap-x-5 items-center'>
                <Button asChild variant={'ghost'}
                className='border-0 text-black hover:text-amber-700 hover:border-0 transition-colors'>
                    <Link href='/sign-in'>Log In</Link>
                </Button>
                <Button asChild variant={'ghost'}
                className='border-0 black hover:text-amber-700 hover:border-0'>
                    <Link href="/sign-up">Checkout</Link>
                </Button>
            </div>
        </nav>
    );
};