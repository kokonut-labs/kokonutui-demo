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
    Menu,
} from "lucide-react";

import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <nav
                className={`
                fixed inset-y-0 left-0 z-[70] w-[220px] bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
                lg:translate-x-0 lg:static lg:w-[220px] border-r border-gray-200 dark:border-[#1F1F23]
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
            >
                <div className="px-4 py-4 mb-4">
                    <Link
                        href="/me"
                        className="text-lg font-bold hover:cursor-pointer text-gray-900 dark:text-white"
                    >
                        Demo
                    </Link>
                </div>

                <div className="space-y-4">*/}
                    <div className="px-2">
                        <div className="px-2 mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Overview
                        </div>
                        <div className="space-y-0.5">
                            <a
                                href="/me"
                                className="flex items-center px-2 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                            >
                                <Home className="h-4 w-4 mr-3" />
                                Dashboard
                            </a>
                            <a
                                href="/me"
                                className="flex items-center px-2 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                            >
                                <BarChart2 className="h-4 w-4 mr-3" />
                                Analytics
                            </a>
                            <a
                                href="/me"
                                className="flex items-center px-2 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                            >
                                <Building2 className="h-4 w-4 mr-3" />
                                Organization
                            </a>
                            <a
                                href="/me"
                                className="flex items-center px-2 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                            >
                                <Folder className="h-4 w-4 mr-3" />
                                Projects
                            </a>
                        </div>
                </div>

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

                <div className="absolute bottom-4 left-2 right-2 px-2 pt-4 border-t border-gray-200 dark:border-[#1F1F23]">
                    <a
                        href="/settings"
                        className="flex items-center px-2 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                    >
                        <Settings className="h-4 w-4 mr-3" />
                        Settings
                    </a>
                    <a
                        href="/me"
                        className="flex items-center px-2 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-lg transition-colors"
                    >
                        <HelpCircle className="h-4 w-4 mr-3" />
                        Help
                    </a>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
