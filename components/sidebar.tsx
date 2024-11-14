"use client";

import {
    BarChart2,
    Receipt,
    Building2,
    CreditCard,
    Folder,
    Wallet,
    Users2,
    Shield,
    MessagesSquare,
    Video,
    Settings,
    HelpCircle,
} from "lucide-react";

import { Home } from "lucide-react";

import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();
    return (
        <nav className="h-full py-6 text-gray-600 dark:text-gray-300">
            {/* Logo/Brand */}
            <div className="px-6 mb-8">
                <h1
                    className="text-xl font-bold hover:cursor-pointer text-gray-900 dark:text-white"
                    onClick={() => router.push("/me")}
                >
                    Demo
                </h1>
            </div>

            {/* Menu Categories */}
            <div className="space-y-6">
                {/* Overview Category */}
                <div className="px-3">
                    <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Overview
                    </div>
                    <div className="space-y-1">
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Home className="h-4 w-4 mr-3" />
                            Dashboard
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <BarChart2 className="h-4 w-4 mr-3" />
                            Analytics
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Building2 className="h-4 w-4 mr-3" />
                            Organization
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Folder className="h-4 w-4 mr-3" />
                            Projects
                        </a>
                    </div>
                </div>

                {/* Finance Category */}
                <div className="px-3">
                    <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Finance
                    </div>
                    <div className="space-y-1">
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Wallet className="h-4 w-4 mr-3" />
                            Transactions
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Receipt className="h-4 w-4 mr-3" />
                            Invoices
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <CreditCard className="h-4 w-4 mr-3" />
                            Payments
                        </a>
                    </div>
                </div>

                {/* Team Category */}
                <div className="px-3">
                    <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Team
                    </div>
                    <div className="space-y-1">
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Users2 className="h-4 w-4 mr-3" />
                            Members
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Shield className="h-4 w-4 mr-3" />
                            Permissions
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <MessagesSquare className="h-4 w-4 mr-3" />
                            Chat
                        </a>
                        <a
                            href="/me"
                            className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                        >
                            <Video className="h-4 w-4 mr-3" />
                            Meetings
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-6 left-3 right-3 px-3 pt-6 border-t border-gray-200 dark:border-[#1F1F23]">
                <a
                    href="/settings"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                >
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                </a>
                <a
                    href="/me"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                >
                    <HelpCircle className="h-4 w-4 mr-3" />
                    Help
                </a>
            </div>
        </nav>
    );
}
