"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Alert02 from "../kokonutui/alert-02";

export default function AlertItem() {
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
                <Alert02 />
            </motion.div>
        </AnimatePresence>
    );
}
