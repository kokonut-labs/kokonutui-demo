import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import Text_02 from "./text-02";

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
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <HeroBadge />

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-tight">
                KokonutUI
                <Text_02 text="Demo" className="text-7xl" />
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                This project serves as a demo for the KokonutUI library. It
                includes a variety of components that you can use in your
                projects.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Button
                    size="lg"
                    className="h-12 px-6 gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                    Start Building Free
                    <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-6 border-zinc-200 dark:border-zinc-800"
                >
                    Book a Demo
                </Button>
            </div>

            <div className="mt-16 flex flex-col items-center gap-6">
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Trusted by leading companies worldwide
                </p>
                <div className="grid grid-cols-2 sm:flex items-center gap-8 sm:gap-12 text-zinc-400 dark:text-zinc-600">
                    <div className="text-sm font-semibold">COMPANY</div>
                    <div className="text-sm font-semibold">COMPANY</div>
                    <div className="text-sm font-semibold">COMPANY</div>
                    <div className="text-sm font-semibold">COMPANY</div>
                </div>
            </div>

            <HeroStats />
        </div>
    );
}
