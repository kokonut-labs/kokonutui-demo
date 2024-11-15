"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Alert02 from "./kokonutui/alert-02";
import { useTheme } from "next-themes";
import Image from "next/image";
import Profile01 from "./kokonutui/profile-01";
import { Bell, Sun, Moon } from "lucide-react";

export default function TopNav() {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="h-full px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23]">
            {/* Left side - App Name */}
            <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 hidden sm:block">
                /me/dashboard
            </div>

            {/* Right side - Notifications, Theme, Profile */}
            <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
                {/* Notifications Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
                        >
                            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={8} className="w-[280px] sm:w-80" style={{ zIndex: 1000 }} align="end">
                        <Alert02 />
                    </DropdownMenuContent>
                </DropdownMenu>

                <button
                    type="button"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="relative p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
                >
                    <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300 transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
                    <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300 transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <span className="sr-only">Toggle theme</span>
                </button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            className="flex items-center hover:opacity-90 transition-opacity"
                        >
                            <Image
                                src="/av.png"
                                alt="User avatar"
                                width={28}
                                height={28}
                                className="rounded-full ring-2 ring-gray-200 dark:ring-[#2B2B30] sm:w-8 sm:h-8"
                            />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={8} className="w-[280px] sm:w-80" style={{ zIndex: 900 }} align="end">
                        <Profile01 avatar="/av.png" />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
