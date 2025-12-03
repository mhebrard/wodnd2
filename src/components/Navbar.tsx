import Link from 'next/link';
import { BookOpen, Users, ScrollText, Home } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-surface text-text-main shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors font-[family-name:var(--font-cinzel)]">
                            <ScrollText className="h-6 w-6 text-primary" />
                            <span>WoDnD2</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-surface-hover hover:text-primary transition-colors font-[family-name:var(--font-cinzel)]">
                                <Home className="h-4 w-4" />
                                <span>Home</span>
                            </Link>
                            <Link href="/campaigns" className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-surface-hover hover:text-primary transition-colors font-[family-name:var(--font-cinzel)]">
                                <BookOpen className="h-4 w-4" />
                                <span>Campaigns</span>
                            </Link>
                            <Link href="/characters" className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-surface-hover hover:text-primary transition-colors font-[family-name:var(--font-cinzel)]">
                                <Users className="h-4 w-4" />
                                <span>Characters</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
