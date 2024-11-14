"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Block03LoginContent() {
    const router = useRouter();
    return (
        <form className="space-y-6">
            <div className="space-y-6 p-8">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Welcome back
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Sign in to your account to continue
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="username"
                            placeholder="hello@example.com"
                            className="h-11 bg-zinc-50 border-zinc-200 dark:bg-zinc-800/50 dark:border-zinc-800"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            className="h-11 bg-zinc-50 border-zinc-200 dark:bg-zinc-800/50 dark:border-zinc-800"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="rounded border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:ring-zinc-500"
                            />
                            <label
                                htmlFor="remember"
                                className="text-sm text-zinc-500 dark:text-zinc-400"
                            >
                                Remember me
                            </label>
                        </div>

                        <Link
                            href="/me"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        className="h-11 w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                        onClick={() => {
                            router.push("/me");
                        }}
                    >
                        Sign in
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full h-11 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        onClick={() => {
                            router.push("/me");
                        }}
                    >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                    </Button>
                </div>
            </div>

            <div className="p-8 pt-0 text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Don't have an account?{" "}
                    <Link
                        href="/me"
                        className="font-medium text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </form>
    );
}
