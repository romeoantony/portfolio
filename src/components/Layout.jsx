import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight">
                        <span className="text-indigo-600 dark:text-indigo-400">Portfolio</span>
                    </div>

                    <nav className="flex items-center gap-6">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </main>

            <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-8 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/romeoantony" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/akshayantony/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:romeoantony1999@gmail.com" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </footer>
            <ScrollToTop />
        </div>
    );
};

export default Layout;
