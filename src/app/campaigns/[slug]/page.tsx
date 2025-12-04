import { notFound } from "next/navigation";
import Link from "next/link";
import { getCampaignBySlug, getAllScenarios, getAllCampaigns } from "@/lib/markdown";
import { BookOpen, Scroll } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
    const campaigns = getAllCampaigns(["slug"]);
    return campaigns.map((campaign) => ({
        slug: campaign.slug,
    }));
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const campaign = getCampaignBySlug(slug, ["title", "description", "primaryColor", "secondaryColor"]);
    const scenarios = getAllScenarios(slug, ["title", "date", "description", "slug"]);

    if (!campaign) {
        notFound();
    }

    return (
        <div
            className="space-y-8"
            style={{
                '--color-primary': campaign.primaryColor,
                '--color-secondary': campaign.secondaryColor,
            } as React.CSSProperties}
        >
            <div className="border-b border-slate-800 pb-4">
                <Breadcrumbs
                    items={[
                        { label: "Campaigns", href: "/campaigns" },
                        { label: campaign.title }
                    ]}
                />
                <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-4 font-[family-name:var(--font-cinzel)]">
                    {campaign.title}
                </h1>
                <p className="text-lg text-text-muted font-sans max-w-3xl">
                    {campaign.description}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {scenarios.map((scenario) => (
                    <Link
                        key={scenario.slug}
                        href={`/campaigns/${slug}/${scenario.slug}`}
                        className="block group"
                    >
                        <div
                            className="bg-surface rounded-xl border border-slate-800 p-6 h-full transition-all hover:shadow-lg relative overflow-hidden hover:border-[color:var(--color-primary)] hover:shadow-[color:var(--color-primary)]/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <Scroll className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                                <span className="text-xs text-slate-500 font-mono">{scenario.date}</span>
                            </div>
                            <h2 className="text-xl font-bold text-text-main group-hover:text-[color:var(--color-primary)] transition-colors mb-2 font-[family-name:var(--font-cinzel)]">
                                {scenario.title}
                            </h2>
                            <p className="text-text-muted text-sm line-clamp-3 font-sans">
                                {scenario.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
