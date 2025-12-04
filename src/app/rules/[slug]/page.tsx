import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Book } from "lucide-react";
import { notFound } from "next/navigation";

export default async function RulePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ["title", "date", "slug", "content"], "rules");

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3 mb-2">
                    <Book className="h-8 w-8 text-primary" />
                    <h1 className="text-4xl font-bold text-primary font-[family-name:var(--font-cinzel)]">{post.title}</h1>
                </div>
            </div>

            <div className="bg-surface/50 rounded-xl p-8 border border-slate-800">
                <MarkdownRenderer content={post.content} />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"], "rules");

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
