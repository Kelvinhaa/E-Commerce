import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const inter = Montserrat({ subsets : ['latin']});

export const Navbar = () => {
    return (
        <nav className="h-20 justify-between flex border-b font-medium bg-amber-50" >
            <Link href='/' className='flex items-center'>
                <span className={`text-5xl font-semibold ${inter.className}`}>Coffee</span>
            </Link>
        </nav>
    );
};