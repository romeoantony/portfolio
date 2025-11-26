import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import projectsData from '../data/projects.json';

const Home = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col justify-center items-start pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 tracking-wide">
                        Hi, my name is
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Akshay Antony.
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-500 dark:text-gray-400 mb-8 tracking-tight">
                        I build high-performance systems.
                    </h1>
                    <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                        I'm a software engineer with 2+ years of experience building C#, .NET, and WPF applications. I specialize in MVVM, multithreading, and enterprise healthcare solutions, with a passion for AI/ML applications.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                        >
                            Check out my work
                            <ArrowDown size={20} />
                        </a>
                        <a
                            href="/AkshayAntonyResume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
                        >
                            Download Resume
                            <ArrowDown size={20} className="rotate-0" />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                        <span className="text-indigo-600 dark:text-indigo-400">01.</span> Some Things I've Built
                        <span className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-4"></span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12 max-w-3xl mx-auto">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
