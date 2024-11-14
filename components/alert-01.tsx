"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function Alert01() {
    const [isVisible, setIsVisible] = useState(true);

    // Auto-dismiss after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-4 right-4 flex items-center gap-3  p-4 rounded-xl shadow-lg max-w-sm"
            >
                <div className="w-full max-w-xl mx-auto">
                    <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4 z-10">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <Check className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Welcome to KokonutUI Demo
                                </p>
                                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">
                                    Explore our collection of beautiful,
                                    ready-to-use components.
                                </p>
                                <a
                                    href="https://github.com/kokonut-labs/kokonutui"
                                    className="font-medium text-zinc-500 dark:text-zinc-400 hover:underline mt-2 text-sm"
                                >
                                    View on GitHub →
                                </a>
                                <p className="text-[12px] text-zinc-400 dark:text-zinc-500 mt-2">
                                    Built using KokonutUI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
