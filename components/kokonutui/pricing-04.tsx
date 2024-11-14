"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, ChartNoAxesColumn } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
    name: string;
    description: string;
    included: boolean;
}

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: {
        monthly: number;
        yearly: number;
    };
    description: string;
    features: Feature[];
    accent: string;
}

const tiers: PricingTier[] = [
    {
        name: "Pro",
        icon: <ChartNoAxesColumn className="w-5 h-5" />,
        price: {
            monthly: 49,
            yearly: 470,
        },
        description: "For personal use",
        accent: "zinc",
        features: [
            {
                name: "Team Management",
                description: "Add up to 20 team members to your workspace",
                included: true,
            },
            {
                name: "Advanced Analytics",
                description: "Get detailed insights and reports",
                included: true,
            },
            {
                name: "Priority Support",
                description: "24/7 email and chat support",
                included: true,
            },
            {
                name: "API Access",
                description: "Full access to our REST API",
                included: true,
            },
        ],
    },
    {
        name: "Enterprise",
        icon: <Sparkles className="w-5 h-5" />,
        price: {
            monthly: 99,
            yearly: 990,
        },
        description: "For large organizations",
        accent: "zinc",
        features: [
            {
                name: "Unlimited Team Members",
                description: "Add unlimited team members to your workspace",
                included: true,
            },
            {
                name: "Advanced Analytics",
                description: "Get detailed insights and reports",
                included: true,
            },
            {
                name: "24/7 Priority Support",
                description: "24/7 email and chat support",
                included: true,
            },
            {
                name: "Unlimited API Access",
                description: "Full access to our REST API",
                included: true,
            },
            {
                name: "Custom Integrations",
                description: "Custom integrations with your existing tools",
                included: true,
            },
            {
                name: "Enterprise Features",
                description: "Additional features for large organizations",
                included: true,
            },
        ],
    },
];

export default function Pricing_04() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="relative flex justify-center mb-16">
                <div className="p-[1px] rounded-full relative">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-zinc-400/20 via-zinc-100/20 to-zinc-400/20 
                        dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800 rounded-full blur-sm"
                    />
                    <div className="relative flex bg-white/80 dark:bg-black/80 rounded-full backdrop-blur-sm">
                        {["Monthly", "Yearly"].map((period) => (
                            <button
                                key={period}
                                type="button"
                                onClick={() => setIsYearly(period === "Yearly")}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm relative",
                                    (period === "Yearly" ? isYearly : !isYearly)
                                        ? "text-zinc-900 dark:text-white"
                                        : "text-zinc-500"
                                )}
                            >
                                {(period === "Yearly"
                                    ? isYearly
                                    : !isYearly) && (
                                    <div className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-full" />
                                )}
                                <span className="relative z-10">{period}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {tiers.map((tier, index) => (
                    <div key={tier.name} className="relative group h-full">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-zinc-200/50 to-white/50 
                                dark:from-zinc-800 dark:to-zinc-900/50 rounded-2xl blur-sm bg-red-500"
                        />
                        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 rounded-2xl backdrop-blur-sm" />

                        <div className="relative m-[2px] bg-white dark:bg-zinc-900 rounded-2xl p-8 flex flex-col h-full">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                                        {tier.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold">
                                        {tier.name}
                                    </h3>
                                </div>

                                <div className="flex justify-center items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold">
                                        $
                                        {isYearly
                                            ? tier.price.yearly
                                            : tier.price.monthly}
                                    </span>
                                    <span className="text-zinc-500">
                                        /{isYearly ? "year" : "month"}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-500">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="flex-grow">
                                <div className="flex-grow">
                                    <div className="mb-6">
                                        <div className="text-sm font-medium text-zinc-400 mb-4">
                                            All Pro Features
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {tiers[0].features.map(
                                                (feature) => (
                                                    <div
                                                        key={feature.name}
                                                        className="flex items-center gap-2 text-sm text-zinc-500"
                                                    >
                                                        <Check className="w-4 h-4" />
                                                        <span>
                                                            {feature.name}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-sm font-medium mb-4 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4" />
                                            Enterprise Perks
                                        </div>
                                        <div className="space-y-4">
                                            {tier.features
                                                .slice(4)
                                                .map(
                                                    (feature, featureIndex) => (
                                                        <div
                                                            key={feature.name}
                                                            className="relative group"
                                                        >
                                                            <div
                                                                className="absolute inset-0 bg-zinc-50 dark:bg-zinc-800/50 
                                                            rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                                            />
                                                            <div className="relative p-4 flex items-start gap-4">
                                                                <div className="flex-shrink-0 mt-1">
                                                                    <div
                                                                        className="w-6 h-6 flex items-center justify-center 
                                                                    bg-zinc-100 dark:bg-zinc-800 rounded-lg"
                                                                    >
                                                                        <Sparkles className="w-3 h-3" />
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <div className="font-medium text-sm">
                                                                        {
                                                                            feature.name
                                                                        }
                                                                    </div>
                                                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                                                        {
                                                                            feature.description
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button
                                    className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 
                                    relative overflow-hidden group/button
                                    transition-all duration-300 ease-out
                                    hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]
                                    dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                                    hover:scale-[1.02]"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover/button:translate-x-[-4px]">
                                        Get started
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-2" />
                                    </span>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-950 
                                        dark:from-zinc-100 dark:to-white opacity-0 group-hover/button:opacity-100 transition-opacity"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
