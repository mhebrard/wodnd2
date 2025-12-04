import Link from "next/link";
import { getAllCampaigns } from "@/lib/markdown";
import { BookOpen } from "lucide-react";

export default function CampaignsPage() {
    const campaigns = getAllCampaigns(["title", "date", "description", "slug", "primaryColor", "secondaryColor"]);

    return (
        <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
                <h1 className="text-3xl font-bold text-primary font-[family-name:var(--font-cinzel)]">Campaigns</h1>
                <p className="text-text-muted mt-2 font-sans">Select a campaign to explore its scenarios.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {campaigns.map((campaign) => (
                    <Link
                        key={campaign.slug}
                        href={`/campaigns/${campaign.slug}`}
                        className="block group"
                    >
                        <div
                            className="bg-surface rounded-xl border border-slate-800 p-6 h-full transition-all hover:shadow-lg relative overflow-hidden group hover:border-[color:var(--color-primary)] hover:shadow-[color:var(--color-primary)]/10"
                            style={{
                                '--color-primary': campaign.primaryColor,
                                '--color-secondary': campaign.secondaryColor,
                            } as React.CSSProperties}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BookOpen className="h-24 w-24" style={{ color: 'var(--color-primary)' }} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <BookOpen className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                                    <span className="text-xs text-slate-500 font-mono">{campaign.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-text-main group-hover:text-[color:var(--color-primary)] transition-colors mb-2 font-[family-name:var(--font-cinzel)]">
                                    {campaign.title}
                                </h2>
                                <p className="text-text-muted text-sm line-clamp-3 font-sans">
                                    {campaign.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
