import Link from "next/link";
import { getAllPosts, getAllCampaigns } from "@/lib/markdown";
import { Users, Shield, Sword, Scroll } from "lucide-react";

export default function CharactersPage() {
    const characters = getAllPosts(["name", "class", "race", "level", "campaign", "slug", "concept"], "characters");
    const campaigns = getAllCampaigns(["title", "slug", "primaryColor", "secondaryColor"]);

    // Create a map for easy lookup: Slug -> Colors & Title
    const campaignDataMap = campaigns.reduce((acc, campaign) => {
        if (campaign.slug) {
            acc[campaign.slug] = {
                title: campaign.title,
                primary: campaign.primaryColor,
                secondary: campaign.secondaryColor
            };
        }
        return acc;
    }, {} as Record<string, { title: string, primary: string, secondary: string }>);

    return (
        <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
                <h1 className="text-3xl font-bold text-primary font-[family-name:var(--font-cinzel)]">Characters</h1>
                <p className="text-text-muted mt-2 font-sans">Meet the heroes (and villains) of our stories.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {characters.map((char) => {
                    // Try to find campaign by slug (assuming char.campaign is now a slug)
                    // If not found, try to find by title (legacy support)
                    let theme = campaignDataMap[char.campaign];
                    if (!theme) {
                        // Fallback: Check if char.campaign is a title
                        const foundSlug = Object.keys(campaignDataMap).find(slug => campaignDataMap[slug].title === char.campaign);
                        if (foundSlug) theme = campaignDataMap[foundSlug];
                    }

                    const style = theme ? {
                        '--color-primary': theme.primary,
                        '--color-secondary': theme.secondary,
                    } as React.CSSProperties : {};

                    return (
                        <Link
                            key={char.slug}
                            href={`/characters/${char.slug}`}
                            className="block group"
                        >
                            <div
                                className="bg-surface rounded-xl border border-slate-800 p-6 h-full hover:border-[color:var(--color-primary)]/50 transition-all hover:shadow-lg hover:shadow-[color:var(--color-primary)]/10 relative overflow-hidden"
                                style={style}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Users className="h-24 w-24 text-[color:var(--color-primary)]" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-2 py-1 bg-surface-hover rounded text-xs text-[color:var(--color-secondary)] font-bold uppercase tracking-wider border border-[color:var(--color-secondary)]">
                                            {theme?.title || char.campaign}
                                        </span>
                                        <span className="text-xs text-slate-500 font-mono">Lvl {char.level}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-text-main group-hover:text-[color:var(--color-primary)] transition-colors mb-1 font-[family-name:var(--font-cinzel)]">
                                        {char.name}
                                    </h2>

                                    <div className="flex items-center gap-2 text-sm text-text-muted mb-4 font-sans">
                                        <span>{char.concept}</span>
                                        <span>•</span>
                                        <span>{char.race}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
