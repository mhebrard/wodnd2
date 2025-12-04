import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Book } from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PaginationNav from "@/components/PaginationNav";

export default async function RulePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ["title", "date", "slug", "content"], "rules");

    if (!post) {
        notFound();
    }

    // Get all rules for pagination
    // Note: getAllPosts sorts by date descending. Rules might not have dates or might need specific ordering.
    // For now, we assume the sort order returned by getAllPosts is acceptable (or we might want to sort by title).
    // Let's assume alphabetical sort for rules might be better, but getAllPosts does date.
    // If rules don't have dates, the sort might be unstable or based on something else.
    // Let's stick to the default order for now.
    const allRules = getAllPosts(["title", "slug", "order"], "rules");
    const currentIndex = allRules.findIndex(r => r.slug === slug);
    const prevRule = currentIndex > 0 ? allRules[currentIndex - 1] : null;
    const nextRule = currentIndex < allRules.length - 1 ? allRules[currentIndex + 1] : null;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 border-b border-slate-800 pb-4">
                <Breadcrumbs
                    items={[
                        { label: "Rules", href: "/rules" },
                        { label: post.title }
                    ]}
                />
                <div className="flex items-center gap-3 mb-2">
                    <Book className="h-8 w-8 text-primary" />
                    <h1 className="text-4xl font-bold text-primary font-[family-name:var(--font-cinzel)]">{post.title}</h1>
                </div>
            </div>

            <div className="bg-surface/50 rounded-xl p-8 border border-slate-800">
                <MarkdownRenderer content={post.content} />
            </div>

            <PaginationNav
                prev={prevRule ? {
                    label: "Previous Rule",
                    title: prevRule.title,
                    href: `/rules/${prevRule.slug}`
                } : undefined}
                next={nextRule ? {
                    label: "Next Rule",
                    title: nextRule.title,
                    href: `/rules/${nextRule.slug}`
                } : undefined}
            />
        </div>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"], "rules");

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
