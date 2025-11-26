import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, staticImage, gifImage, tags, demoLink, repoLink }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const handleMouseEnter = () => {
        if (!isTouchDevice) {
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) {
            setIsPlaying(false);
        }
    };

    const togglePlay = (e) => {
        e.preventDefault(); // Prevent link click if wrapped
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            whileHover={{ y: -4 }}
        >
            <div
                className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={isTouchDevice ? togglePlay : undefined}
            >
                <img
                    src={isPlaying ? gifImage : staticImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Mobile Play Button Overlay */}
                {isTouchDevice && !isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
                        <div className="bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-lg">
                            <Play size={24} className="text-indigo-600 dark:text-indigo-400 fill-current" />
                        </div>
                    </div>
                )}

                {/* Desktop Hover Overlay (Optional, for links) */}
                {!isTouchDevice && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {/* Links could go here, but we'll put them in the footer for better UX */}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <Github size={16} />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
