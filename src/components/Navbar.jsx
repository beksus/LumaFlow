import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lightbulb } from 'lucide-react'; // Using Lightbulb as logo placeholder if no logo asset
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Problem', path: '/problem' },
        { name: 'Process', path: '/process' },
        { name: 'Solution', path: '/solution' },
        { name: 'Impact', path: '/impact' },
        { name: 'Team', path: '/team' },
        { name: 'Downloads', path: '/downloads' },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl text-gray-900 tracking-tight">AI-Light</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 lg:space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path
                                        ? 'text-primary bg-blue-50'
                                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === item.path
                                            ? 'text-primary bg-blue-50'
                                            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
