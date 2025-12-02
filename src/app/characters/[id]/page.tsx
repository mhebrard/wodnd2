import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";
import { Shield, Sword, Heart, Zap, Brain, Eye, Scroll } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"], "characters");

    return posts.map((post) => ({
        id: post.slug,
    }));
}

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = getPostBySlug(id, ["name", "class", "race", "level", "campaign", "content"], "characters");

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Shield className="h-64 w-64 text-cyan-500" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm mb-2">
                            <span className="bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">{post.campaign}</span>
                            <span className="text-slate-500">Level {post.level}</span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-2">{post.name}</h1>
                        <div className="text-xl text-slate-400 flex gap-2">
                            <span>{post.race}</span>
                            <span className="text-slate-600">|</span>
                            <span>{post.class}</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* Placeholder stats - in a real app these could come from frontmatter */}
                        <div className="text-center bg-slate-950/50 p-3 rounded-lg border border-slate-800 min-w-[80px]">
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">STR</div>
                            <div className="text-xl font-bold text-red-400">16</div>
                        </div>
                        <div className="text-center bg-slate-950/50 p-3 rounded-lg border border-slate-800 min-w-[80px]">
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">DEX</div>
                            <div className="text-xl font-bold text-green-400">14</div>
                        </div>
                        <div className="text-center bg-slate-950/50 p-3 rounded-lg border border-slate-800 min-w-[80px]">
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">INT</div>
                            <div className="text-xl font-bold text-blue-400">10</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content / Backstory */}
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                        <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                            <Scroll className="h-6 w-6 text-indigo-400" />
                            Backstory & Notes
                        </h2>
                        <MarkdownRenderer content={post.content} />
                    </div>
                </div>

                {/* Sidebar / Stats */}
                <div className="space-y-6">
                    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
                        <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                            <Sword className="h-5 w-5 text-red-400" />
                            Combat Stats
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                                <span className="text-slate-400">HP</span>
                                <span className="font-mono text-green-400 font-bold">32 / 32</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                                <span className="text-slate-400">AC</span>
                                <span className="font-mono text-slate-200 font-bold">15</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                                <span className="text-slate-400">Initiative</span>
                                <span className="font-mono text-slate-200 font-bold">+2</span>
                            </div>
                            <div className="flex justify-between items-center pb-2">
                                <span className="text-slate-400">Speed</span>
                                <span className="font-mono text-slate-200 font-bold">30 ft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
