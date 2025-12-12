import Link from "next/link";
import { BookOpen, Users, Scroll, Shield, Dices } from "lucide-react";
import { getLatestScenario, getLatestCharacter, getCampaignBySlug } from "@/lib/markdown";

export default function Home() {
  const latestScenario = getLatestScenario();
  const latestCharacter = getLatestCharacter();

  // Scenario Theme
  let scenarioTheme = {};
  if (latestScenario && latestScenario.campaignSlug) {
    const campaign = getCampaignBySlug(latestScenario.campaignSlug, ["primaryColor", "secondaryColor"]);
    if (campaign) {
      scenarioTheme = {
        '--color-primary': campaign.primaryColor,
        '--color-secondary': campaign.secondaryColor,
      } as React.CSSProperties;
    }
  }

  // Character Theme
  let characterTheme = {};
  if (latestCharacter && latestCharacter.campaign) {
    // Find campaign by title (since character stores campaign title, not slug... wait, let's check grommash.md)
    // grommash.md: campaign: "The Lost Mines"
    // We need to find the slug from the title or hope we have a utility.
    // Actually, getAllCampaigns returns slugs. We can search.
    // Or we can update character frontmatter to use slug.
    // For now, let's try to find the campaign by title.
    // Wait, getCampaignBySlug needs a slug.
    // Let's assume for now we can't easily get the character's campaign colors without a slug.
    // BUT, the user requirement is strict.
    // Let's check if we can map title to slug.
    // "The Lost Mines" -> "the-lost-mines"
    // "Demon Hunter" -> "demon-hunter"
    // Simple slugify might work.
    const campaignSlug = latestCharacter.campaign.toLowerCase().replace(/ /g, '-');
    try {
      const campaign = getCampaignBySlug(campaignSlug, ["primaryColor", "secondaryColor"]);
      if (campaign) {
        characterTheme = {
          '--color-primary': campaign.primaryColor,
          '--color-secondary': campaign.secondaryColor,
        } as React.CSSProperties;
      }
    } catch (e) {
      // Fallback if slug doesn't match
      console.warn("Could not find campaign for character:", latestCharacter.campaign);
    }
  }

  return (
    <div className="space-y-12">
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] font-[family-name:var(--font-cinzel)] drop-shadow-lg">
          <span className="block text-[color:var(--color-primary)]">World <span className="text-[color:var(--color-secondary)]">of</span> Darkness</span>
          <span className="block text-4xl md:text-6xl mt-2 text-[color:var(--color-primary)]"><span className="text-[color:var(--color-secondary)]">&</span> Dungeons <span className="text-[color:var(--color-secondary)]">&</span> Dragons</span>
        </h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed text-justify font-sans">
          WoD&D² is an adaptation of the World of Darkness, the storytelling system God-Machine version 2 with a dual goal. First, extract the core rules from the 226 pages of the core rulebook and simplify them to an easy and quick use. Second, extend the rules for applying them to a heroic fantasy universe inspired from Advanced Dungeons & Dragons.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {/* Latest Scenario Card */}
        {latestScenario ? (
          <Link href={`/campaigns/${latestScenario.campaignSlug}/${latestScenario.slug}`} className="block group">
            <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-[color:var(--color-primary)]/50 transition-all hover:shadow-lg hover:shadow-[color:var(--color-primary)]/10 h-full relative overflow-hidden" style={scenarioTheme}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Scroll className="w-24 h-24 text-[color:var(--color-primary)]" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--color-secondary)] border border-[color:var(--color-secondary)] px-2 py-1 rounded">
                  {latestScenario.campaignTitle || "Latest Scenario"}
                </span>
                <span className="text-xs text-slate-500 font-mono">{latestScenario.date}</span>
              </div>
              <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-2 group-hover:text-[color:var(--color-primary)] transition-colors font-[family-name:var(--font-cinzel)]">
                {latestScenario.title}
              </h2>
              <p className="text-text-muted mb-6 font-sans line-clamp-3">
                {latestScenario.description}
              </p>
              <div className="flex items-center text-[color:var(--color-primary)] font-medium font-[family-name:var(--font-cinzel)] group-hover:underline">
                Read Chapter &rarr;
              </div>
            </div>
          </Link>
        ) : (
          <Link href="/campaigns" className="block group">
            <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full">
              <h2 className="text-2xl font-bold text-primary mb-4">Campaigns</h2>
              <p className="text-text-muted">Explore the archives.</p>
            </div>
          </Link>
        )}

        {/* Latest Character Card */}
        {
          latestCharacter ? (
            <Link href={`/characters/${latestCharacter.slug}`} className="block group">
              <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-[color:var(--color-primary)]/50 transition-all hover:shadow-lg hover:shadow-[color:var(--color-primary)]/10 h-full relative overflow-hidden" style={characterTheme}>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield className="w-24 h-24 text-[color:var(--color-primary)]" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--color-secondary)] border border-[color:var(--color-secondary)] px-2 py-1 rounded">
                    {latestCharacter.campaign || "New Challenger"}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{latestCharacter.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-2 group-hover:text-[color:var(--color-primary)] transition-colors font-[family-name:var(--font-cinzel)]">
                  {latestCharacter.name}
                </h2>
                <p className="text-text-muted mb-2 font-sans">
                  <span className="text-slate-400">Concept:</span> {latestCharacter.concept} <span className="mx-2">•</span> <span className="text-slate-400">Race:</span> {latestCharacter.race}
                </p>
                <div className="flex items-center text-[color:var(--color-primary)] font-medium font-[family-name:var(--font-cinzel)] mt-4">
                  View Profile &rarr;
                </div>
              </div>
            </Link>
          ) : (
            <Link href="/characters" className="block group">
              <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full">
                <h2 className="text-2xl font-bold text-primary mb-4">Characters</h2>
                <p className="text-text-muted">Meet the heroes.</p>
              </div>
            </Link>
          )
        }
      </section >

      <div className="flex justify-center items-center gap-2 pt-8 border-t border-slate-800/50 text-slate-500 font-sans text-sm">
        <span>Forged in the shadows by</span>
        <a href="https://github.com/mhebrard" target="_blank" rel="noopener noreferrer" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)] transition-colors font-medium">mhebrard</a>
        <span>and</span>
        <a href="https://antigravity.ai" target="_blank" rel="noopener noreferrer" className="text-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)] transition-colors font-medium">gemini</a>
        <Dices className="w-4 h-4" />
      </div>
    </div >
  );
}
