import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { BookOpen } from "lucide-react";

export default function CampaignsPage() {
    const campaigns = getAllPosts(["title", "date", "description", "slug"], "campaigns");

    return (
        <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
                <h1 className="text-3xl font-bold text-primary font-[family-name:var(--font-cinzel)]">Campaigns</h1>
                <p className="text-text-muted mt-2 font-sans">Select a campaign to read its story.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {campaigns.map((campaign) => (
                    <Link
                        key={campaign.slug}
                        href={`/campaigns/${campaign.slug}`}
                        className="block group"
                    >
                        <div className="bg-surface rounded-xl border border-slate-800 p-6 h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                            <div className="flex items-center justify-between mb-4">
                                <BookOpen className="h-6 w-6 text-primary" />
                                <span className="text-xs text-slate-500 font-mono">{campaign.date}</span>
                            </div>
                            <h2 className="text-xl font-bold text-text-main group-hover:text-primary-hover transition-colors mb-2 font-[family-name:var(--font-cinzel)]">
                                {campaign.title}
                            </h2>
                            <p className="text-text-muted text-sm line-clamp-3 font-sans">
                                {campaign.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
