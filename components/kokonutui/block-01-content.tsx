import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import Text_02 from "./text-02";
import Link from "next/link";

export function HeroBadge() {
    return (
        <div className="mb-8 animate-fade-in">
            <div className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-zinc-900 dark:text-white" />
                <span className="text-sm font-medium text-zinc-900 dark:text-white">
                    New Features Released
                </span>
            </div>
        </div>
    );
}

interface StatItemProps {
    text: string;
}

function StatItem({ text }: StatItemProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-zinc-900 dark:bg-white rounded-full" />
            <span className="font-semibold text-zinc-900 dark:text-white">
                {text}
            </span>
        </div>
    );
}

export function HeroStats() {
    return (
        <div className="absolute bottom-12 left-0 right-0">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm">
                <StatItem text="100k+ Users" />
                <StatItem text="4.9/5 Rating" />
                <StatItem text="99.9% Uptime" />
            </div>
        </div>
    );
}

export default function Block01Content() {
    return (
        <div className="relative flex flex-col items-center justify-center px-4 text-center min-h-[calc(100vh-12rem)]">
            <HeroBadge />

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-tight">
                KokonutUI
                <Text_02 text="Demo" className="text-3xl sm:text-5xl md:text-7xl" />
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                This project serves as a demo for the KokonutUI library. It
                includes a variety of components that you can use in your
                projects.
            </p>

            <div className="mt-8 sm:mt-10 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/me"
                    className="h-12 px-6 gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center rounded-lg"
                >
                    Start Building Free
                    <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/me"
                    className="h-12 px-6 border-zinc-200 dark:border-zinc-800 flex items-center gap-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
                >
                    Book a Demo
                </Link>
            </div>

            <div className="mt-12 sm:mt-16 flex flex-col items-center gap-6">
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Trusted by leading companies worldwide
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-6 sm:gap-12 text-zinc-400 dark:text-zinc-600">
                    <div className="text-sm font-semibold">COMPANY</div>
                    <div className="text-sm font-semibold">COMPANY</div>
                    <div className="text-sm font-semibold">COMPANY</div>
                    <div className="text-sm font-semibold">COMPANY</div>
                </div>
            </div>

            <div className="mt-12 sm:mt-16 w-full">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 text-sm">
                    <StatItem text="100k+ Users" />
                    <StatItem text="4.9/5 Rating" />
                    <StatItem text="99.9% Uptime" />
                </div>
            </div>
        </div>
    );
}
