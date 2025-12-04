import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { Book, Scroll } from "lucide-react";

export default function RulesPage() {
    const rules = getAllPosts(["title", "date", "slug", "description"], "rules");

    return (
        <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
                <h1 className="text-3xl font-bold text-primary font-[family-name:var(--font-cinzel)]">Game Rules</h1>
                <p className="text-text-muted mt-2 font-sans">The laws that govern the world of WoDnD2.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rules.map((rule) => (
                    <Link
                        key={rule.slug}
                        href={`/rules/${rule.slug}`}
                        className="block group"
                    >
                        <div className="bg-surface rounded-xl border border-slate-800 p-6 h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Book className="h-24 w-24 text-primary" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <Scroll className="h-6 w-6 text-primary" />
                                </div>

                                <h2 className="text-xl font-bold text-text-main group-hover:text-primary-hover transition-colors mb-2 font-[family-name:var(--font-cinzel)]">
                                    {rule.title}
                                </h2>

                                <p className="text-text-muted text-sm line-clamp-3 font-sans">
                                    {rule.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
