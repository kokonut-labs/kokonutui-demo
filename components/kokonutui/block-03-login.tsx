import { Sparkles } from "lucide-react";
import Link from "next/link";

interface Block03LoginProps {
    children?: React.ReactNode;
}

export default function Block03Login({ children }: Block03LoginProps) {
    return (
        <div className="relative min-h-screen">
            <div className="flex min-h-screen flex-col items-center justify-center pt-12 p-4">
                <Link href="#" className="mb-8 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white">
                        <Sparkles className="h-5 w-5 text-white dark:text-black" />
                    </div>
                    <span className="text-xl font-bold text-zinc-900 dark:text-white">
                        Acme
                    </span>
                </Link>

                <div className="w-full max-w-md">
                    <div className="rounded-2xl border border-zinc-200/50 bg-white shadow-xl dark:border-zinc-800/50 dark:bg-zinc-900">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
