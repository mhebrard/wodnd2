import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"], "campaigns");

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ["title", "date", "content"], "campaigns");

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 border-b border-slate-800 pb-4">
                <h1 className="text-4xl font-bold text-red-500 mb-2 font-[family-name:var(--font-cinzel)]">{post.title}</h1>
                <p className="text-slate-500 font-mono">{post.date}</p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                <MarkdownRenderer content={post.content} />
            </div>
        </div>
    );
}
