"use client";

import { Button } from "@/components/ui/button";
import { Menu, Sparkles, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
const LINKS = [
    { href: "", label: "Features" },
    { href: "", label: "About" },
    { href: "", label: "Pricing" },
    { href: "", label: "Blog" },
];

export default function Block01Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 right-0 w-full p-6 grid grid-cols-3 items-center z-50">
            {/* Logo - Left Column */}
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white dark:text-black" />
                </div>
                <span
                    className="font-bold text-xl text-zinc-900 dark:text-white cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    KokonutUI
                </span>
            </div>

            {/* Desktop Navigation - Center Column */}
            <div className="hidden md:flex justify-center gap-8 items-center">
                {LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 text-md font-medium"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Buttons - Right Column */}
            <div className="hidden md:flex items-center gap-4 justify-end">
                <button
                    type="button"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                    <Sun className="h-5 w-5 text-zinc-600 dark:text-zinc-400 transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
                    <Moon className="absolute h-5 w-5 text-zinc-600 dark:text-zinc-400 transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <span className="sr-only">Toggle theme</span>
                </button>
                <Button
                    variant="ghost"
                    size="lg"
                    className="text-base"
                    onClick={() => router.push("/login")}
                >
                    Sign in
                </Button>
                <Button
                    size="lg"
                    className="text-base bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                    onClick={() => router.push("/me")}
                >
                    Start Free
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2 justify-end">
                <button
                    type="button"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                    <Sun className="h-5 w-5 text-zinc-600 dark:text-zinc-400 transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
                    <Moon className="absolute h-5 w-5 text-zinc-600 dark:text-zinc-400 transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <span className="sr-only">Toggle theme</span>
                </button>
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-zinc-900 dark:text-white" />
                    ) : (
                        <Menu className="h-6 w-6 text-zinc-900 dark:text-white" />
                    )}
                </button>
            </div>

            {/* Add Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 p-6 flex flex-col items-center gap-4 border-t border-gray-200 dark:border-gray-800 md:hidden">
                    {LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 text-md font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        variant="ghost"
                        size="lg"
                        className="text-base w-full"
                        onClick={() => router.push("/login")}
                    >
                        Sign in
                    </Button>
                    <Button
                        size="lg"
                        className="text-base bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 w-full"
                        onClick={() => router.push("/me")}
                    >
                        Start Free
                    </Button>
                </div>
            )}
        </nav>
    );
}
