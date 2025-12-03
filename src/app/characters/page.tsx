import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { Users, Shield, Sword, Scroll } from "lucide-react";

export default function CharactersPage() {
    const characters = getAllPosts(["name", "class", "race", "level", "campaign", "slug"], "characters");

    return (
        <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
                <h1 className="text-3xl font-bold text-secondary font-[family-name:var(--font-cinzel)]">Characters</h1>
                <p className="text-text-muted mt-2 font-sans">Meet the heroes (and villains) of our stories.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {characters.map((char) => (
                    <Link
                        key={char.slug}
                        href={`/characters/${char.slug}`}
                        className="block group"
                    >
                        <div className="bg-surface rounded-xl border border-slate-800 p-6 h-full hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Users className="h-24 w-24 text-secondary" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-2 py-1 bg-surface-hover rounded text-xs text-secondary font-mono border border-slate-700">
                                        Lvl {char.level}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono">{char.campaign}</span>
                                </div>

                                <h2 className="text-xl font-bold text-text-main group-hover:text-secondary-hover transition-colors mb-1 font-[family-name:var(--font-cinzel)]">
                                    {char.name}
                                </h2>

                                <div className="flex items-center gap-2 text-sm text-text-muted mb-4 font-sans">
                                    <span>{char.race}</span>
                                    <span>•</span>
                                    <span>{char.class}</span>
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-950/50 px-2 py-1 rounded">
                                        <Shield className="h-3 w-3" />
                                        <span>View Sheet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
