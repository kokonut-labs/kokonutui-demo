import Sidebar from "@/components/sidebar";
import type { ReactNode } from "react";
import TopNav from "@/components/top-nav";

interface LayoutProps {
    children: ReactNode;
}

export default function LoggedLayout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-[#0A0A0C]">
            {/* Sidebar rendered at root level */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="w-full flex flex-1 flex-col">
                <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23]">
                    <TopNav />
                </header>
                <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
        </div>
    );
}
