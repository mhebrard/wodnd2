import { getCampaignBySlug, getScenarioBySlug, getAllCampaigns, getAllScenarios } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PaginationNav from "@/components/PaginationNav";

export async function generateStaticParams() {
    const campaigns = getAllCampaigns(["slug"]);

    let params: { slug: string; scenario: string }[] = [];
    for (const campaign of campaigns) {
        const scenarios = getAllScenarios(campaign.slug, ["slug"]);
        for (const scenario of scenarios) {
            params.push({
                slug: campaign.slug,
                scenario: scenario.slug,
            });
        }
    }
    return params;
}

export default async function ScenarioPage({ params }: { params: Promise<{ slug: string; scenario: string }> }) {
    const { slug, scenario } = await params;
    const campaign = getCampaignBySlug(slug, ["title", "primaryColor", "secondaryColor"]);
    const post = getScenarioBySlug(slug, scenario, ["title", "date", "content"]);

    // Get all scenarios to determine prev/next
    const allScenarios = getAllScenarios(slug, ["title", "slug", "order"]);
    const currentIndex = allScenarios.findIndex(s => s.slug === scenario);
    const prevScenario = currentIndex > 0 ? allScenarios[currentIndex - 1] : null;
    const nextScenario = currentIndex < allScenarios.length - 1 ? allScenarios[currentIndex + 1] : null;

    // Wait, getAllScenarios sorts by date descending (newest first).
    // Usually scenarios are read oldest to newest (Chapter 1, then Chapter 2).
    // If Chapter 1 is older than Chapter 2:
    // Array: [Chapter 2, Chapter 1]
    // Current: Chapter 1 (index 1)
    // Prev in array (index 2) -> null
    // Next in array (index 0) -> Chapter 2
    // So:
    // Next Story Step = Array[index - 1]
    // Previous Story Step = Array[index + 1]

    // Let's verify sort order in markdown.ts.
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); -> Descending (Newest first)

    // If I want "Next" to be the next chapter (chronologically later), that is the NEWER post.
    // So "Next" link should go to a post with a LATER date (which is earlier in the array).
    // "Previous" link should go to a post with an EARLIER date (which is later in the array).

    return (
        <article
            className="max-w-4xl mx-auto"
            style={{
                '--color-primary': campaign.primaryColor,
                '--color-secondary': campaign.secondaryColor,
                '--color-primary-hover': campaign.primaryColor, // Fallback
            } as React.CSSProperties}
        >
            <div className="mb-8 border-b border-slate-800 pb-8">
                <Breadcrumbs
                    items={[
                        { label: "Campaigns", href: "/campaigns" },
                        { label: campaign.title, href: `/campaigns/${slug}` },
                        { label: post.title }
                    ]}
                />

                <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-4 font-[family-name:var(--font-cinzel)]">
                    {post.title}
                </h1>
                <div className="text-slate-500 font-mono text-sm">
                    {post.date}
                </div>
            </div>

            {/* 
                We need to pass the custom colors to MarkdownRenderer or ensure it uses CSS variables.
                The MarkdownRenderer likely uses 'text-primary' classes which map to the global variable.
                Since we are setting --primary locally in the style prop, Tailwind's 'text-primary' 
                (if defined as var(--primary)) should pick it up automatically IF 'text-primary' is defined as using that var.
                
                Let's check globals.css to see how --primary is defined.
            */}
            <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-[family-name:var(--font-cinzel)] 
                prose-headings:text-[color:var(--color-primary)]
                prose-a:text-[color:var(--color-primary)] prose-a:no-underline hover:prose-a:text-[color:var(--color-secondary)]
                prose-strong:text-[color:var(--color-primary)]
                prose-blockquote:border-l-[color:var(--color-primary)]
                [&_div[data-directive='rules']]:border-[color:var(--color-primary)]
                [&_div[data-directive='hrp']]:border-[color:var(--color-secondary)]
            ">
                <MarkdownRenderer content={post.content} />
            </div>

            <PaginationNav
                prev={prevScenario ? {
                    label: "Previous Chapter",
                    title: prevScenario.title,
                    href: `/campaigns/${slug}/${prevScenario.slug}`
                } : undefined}
                next={nextScenario ? {
                    label: "Next Chapter",
                    title: nextScenario.title,
                    href: `/campaigns/${slug}/${nextScenario.slug}`
                } : undefined}
            />
        </article>
    );
}
