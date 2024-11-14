"use client";

import { Button } from "@/components/ui/button";
import { Menu, Sparkles, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const LINKS = [
    { href: "/me", label: "Features" },
    { href: "/me", label: "About" },
    { href: "/me", label: "Pricing" },
    { href: "/me", label: "Blog" },
];

export default function Block01Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 right-0 w-full p-4 sm:p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200/50 dark:border-zinc-800/50 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white dark:text-black" />
                    </div>
                    <Link
                        href="/"
                        className="font-bold text-xl text-zinc-900 dark:text-white cursor-pointer"
                    >
                        KokonutUI
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
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

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-2">
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
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        type="button"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="relative p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <Sun className="h-5 w-5 text-zinc-600 dark:text-zinc-400 transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
                        <Moon className="absolute h-5 w-5 text-zinc-600 dark:text-zinc-400 transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                        ) : (
                            <Menu className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg">
                    <div className="p-4 space-y-4">
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col gap-4">
                            {LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 text-md font-medium py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
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
                    </div>
                </div>
            )}
        </nav>
    );
}
