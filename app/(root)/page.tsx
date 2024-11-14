import Block01 from "@/components/kokonutui/block-01";
import Block01Navigation from "@/components/kokonutui/block-01-nav";
import Block01Content from "@/components/kokonutui/block-01-content";
import Faq02 from "@/components/kokonutui/faq-02";
import { Github, Twitter, Linkedin } from "lucide-react";
import AlertLanding from "@/components/alert-landing";
import Pricing_04 from "@/components/kokonutui/pricing-04";

export default function Home() {
    return (
        <main className="w-full">
            <section className="h-screen w-full bg-white dark:bg-zinc-900 flex items-center justify-center">
                <Block01>
                    <Block01Navigation />
                    <Block01Content />
                </Block01>
            </section>

            <section className="min-h-screen w-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                            Simple, transparent pricing
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                            Choose the perfect plan for your needs. No hidden
                            fees, no surprises. Start with a 14-day free trial,
                            no credit card required.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <Pricing_04 />
                    </div>
                </div>
            </section>

            <section className="h-screen w-full bg-white dark:bg-zinc-900 flex items-center justify-center">
                <Faq02 />
            </section>

            <footer className="w-full bg-zinc-900 text-zinc-100 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                Company Name
                            </h3>
                            <p className="text-zinc-400 text-sm">
                                Building the future of software, one line at a
                                time.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-zinc-400 hover:text-white"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-zinc-400 hover:text-white"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-zinc-400 hover:text-white"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Product */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Product</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        API Reference
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-white text-sm"
                                    >
                                        Licenses
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-zinc-800 mt-12 pt-8">
                        <p className="text-zinc-400 text-sm text-center">
                            © {new Date().getFullYear()} Company Name. All
                            rights reserved.
                        </p>
                    </div>
                </div>
                <AlertLanding />
            </footer>
        </main>
    );
}
