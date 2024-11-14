"use client";

import Sidebar from "@/components/sidebar";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import AlertItem from "@/components/ui/toast-custom";
import TopNav from "@/components/top-nav";

interface LayoutProps {
    children: ReactNode;
}

export default function LoggedLayout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-[#0A0A0C]">
            {/* Fixed Sidebar */}
            <aside className="fixed left-0 h-full w-56 bg-white dark:bg-gradient-to-b dark:from-[#0F0F12] dark:to-[#1A1A1F] border-r border-gray-200 dark:border-[#1F1F23]">
                <Sidebar />
            </aside>

            {/* Main Content Area */}
            <div className="ml-56 flex flex-1 flex-col">
                <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23]">
                    <TopNav />
                </header>
                <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>

            {/* Custom Alert */}
        </div>
    );
}
