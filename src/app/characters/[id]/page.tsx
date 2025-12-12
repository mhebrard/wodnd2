import { getAllPosts, getPostBySlug, getCampaignBySlug } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";
import { Character } from "@/lib/types";
import { Shield, Scroll } from "lucide-react";
import getClassIcon from "@/components/ClassIcon";
import StatDots from "@/components/character-sheet/StatDots";
import AttributeGrid from "@/components/character-sheet/AttributeGrid";
import SkillColumn from "@/components/character-sheet/SkillColumn";
import HealthBoxes from "@/components/character-sheet/HealthBoxes";
import EquipmentTable from "@/components/character-sheet/EquipmentTable";

export async function generateStaticParams() {
    const posts = getAllPosts(["slug"], "characters");

    return posts.map((post) => ({
        id: post.slug,
    }));
}

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postData = getPostBySlug(id, [
        "name", "concept", "race", "class", "player", "fellowship", "chronicle", "campaign",
        "attributes", "skills", "other_traits", "weapons", "equipment", "content"
    ], "characters");

    if (!postData) {
        notFound();
    }

    const character = postData as unknown as Character;

    // Fetch campaign data for theming
    let primaryColor = "#e2e8f0"; // Default slate-200
    let secondaryColor = "#64748b"; // Default slate-500

    if (character.campaign) {
        try {
            const campaignData = getCampaignBySlug(character.campaign, ["primaryColor", "secondaryColor"]);
            if (campaignData.primaryColor) primaryColor = campaignData.primaryColor;
            if (campaignData.secondaryColor) secondaryColor = campaignData.secondaryColor;
        } catch (e) {
            console.error(`Failed to load campaign ${character.campaign} for character theming:`, e);
        }
    }

    return (
        <div
            className="max-w-6xl mx-auto space-y-8"
            style={{
                // @ts-expect-error - Setting custom CSS variables
                "--color-primary": primaryColor,
                "--color-secondary": secondaryColor,
            }}
        >
            {/* Sheet Header */}
            <div className="bg-surface rounded-xl border border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    {(() => {
                        const Icon = getClassIcon(character.class);
                        return <Icon className="h-64 w-64 text-primary" />;
                    })()}
                </div>

                {/* 3-Column Header Info */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 font-cinzel text-text-main border-b border-slate-700 pb-6 mb-6">
                    {/* Row 1 */}
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="font-bold text-slate-500">Name:</span>
                        <span className="text-xl font-bold text-primary">{character.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="font-bold text-slate-500">Concept:</span>
                        <span>{character.concept}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="font-bold text-slate-500">Race:</span>
                        <span>{character.race}</span>
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="font-bold text-slate-500">Player:</span>
                        <span>{character.player}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="font-bold text-slate-500">Fellowship:</span>
                        <span>{character.fellowship}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="font-bold text-slate-500">Chronicle:</span>
                        <span className="text-primary">{character.chronicle}</span>
                    </div>
                </div>

                {/* Attributes 3x3 Grid */}
                {character.attributes && (
                    <div className="mb-6">
                        <AttributeGrid attributes={character.attributes} />
                    </div>
                )}

                {/* Main Body Grid: 3 Columns */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Column 1: Skills (Full List) */}
                    <div className="space-y-6">
                        <div className="border border-slate-700 rounded-lg h-full">
                            <h3 className="bg-slate-800 text-center font-bold font-cinzel p-1 text-slate-200">SKILLS</h3>
                            <div className="space-y-6 p-2">
                                {character.skills?.mental && <SkillColumn title="Mental" skills={character.skills.mental} unskilledPenalty="-3" />}
                                {character.skills?.physical && <SkillColumn title="Physical" skills={character.skills.physical} unskilledPenalty="-1" />}
                                {character.skills?.social && <SkillColumn title="Social" skills={character.skills.social} unskilledPenalty="-1" />}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Other Traits & Equipment */}
                    <div className="md:col-span-2 space-y-6">

                        {/* Columns 2 & 3: Other Traits Container */}

                        <div className="border border-slate-700 rounded-lg">
                            <h3 className="bg-slate-800 text-center font-bold font-cinzel p-1 text-slate-200">OTHER TRAITS</h3>

                            {/* Merits & Energies */}
                            <div className="grid md:grid-cols-2 gap-8 p-2">
                                {/* Merits */}
                                <div className="">
                                    <h4 className="font-cinzel font-bold text-lg mb-2 text-center border-b border-slate-700 pb-1">Merits</h4>
                                    <div className="space-y-1">
                                        {/* Render fixed 10 slots for Merits */}
                                        {Array.from({ length: 10 }).map((_, i) => {
                                            const merit = character.other_traits?.merits?.[i];
                                            return (
                                                <div key={i} className="flex justify-between items-center border-b border-slate-800/50 pb-1 h-[29px]">
                                                    <span className="text-sm truncate pr-2">{merit?.name || ""}</span>
                                                    <StatDots value={merit?.value || 0} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Energies Section */}
                                <div className="">
                                    <h4 className="font-cinzel font-bold text-lg mb-2 text-center border-b border-slate-700 pb-1">Energies</h4>
                                    <div className="space-y-4">
                                        {/* Health: 12 Permanent Dots + 12 Temporary Squares */}
                                        {character.other_traits?.health && (
                                            <HealthBoxes
                                                label="Health"
                                                type="health"
                                                current={character.other_traits.health.current}
                                                max={character.other_traits.health.max}
                                                dotsCount={12}
                                                boxesCount={12}
                                            />
                                        )}

                                        {/* Willpower: 10 Permanent Dots + 10 Temporary Squares */}
                                        {character.other_traits?.willpower && (
                                            <HealthBoxes
                                                label="Willpower"
                                                type="willpower"
                                                current={character.other_traits.willpower.current}
                                                max={character.other_traits.willpower.max} // Permanent dots from data
                                                dotsCount={10}
                                                boxesCount={10}
                                            />
                                        )}

                                        {/* Mastery: 10 Permanent Dots (No Boxes) */}
                                        {character.other_traits?.mastery && (
                                            <HealthBoxes
                                                label="Mastery"
                                                type="mastery"
                                                current={character.other_traits.mastery.current}
                                                max={character.other_traits.mastery.max}
                                                dotsCount={10}
                                                boxesCount={0}
                                            />
                                        )}

                                        {/* Mana: 20 Temporary Squares (No Dots) */}
                                        {character.other_traits?.mana && (
                                            <HealthBoxes
                                                label="Mana"
                                                type="mana"
                                                current={character.other_traits.mana.current}
                                                max={character.other_traits.mana.max}
                                                dotsCount={0}
                                                boxesCount={20}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Advantages & Path */}
                            <div className="grid md:grid-cols-2 gap-8 p-2">

                                {/* Advantages */}
                                <div className="">
                                    {/* Advantages Table styled list */}
                                    {character.other_traits?.advantages && (
                                        <div className="">
                                            <h4 className="font-cinzel font-bold text-lg mb-2 text-center border-b border-slate-700 pb-1">Advantages</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between border-b border-slate-800/50 pb-1">
                                                    <span className="text-slate-400">Size</span>
                                                    <span className="font-mono">{character.other_traits.advantages.size}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-800/50 pb-1">
                                                    <span className="text-slate-400">Speed</span>
                                                    <span className="font-mono">{character.other_traits.advantages.speed}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-800/50 pb-1">
                                                    <span className="text-slate-400">Defense</span>
                                                    <span className="font-mono">{character.other_traits.advantages.defense}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-800/50 pb-1">
                                                    <span className="text-slate-400">Armor</span>
                                                    <span className="font-mono">{character.other_traits.advantages.armor}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-800/50 pb-1">
                                                    <span className="text-slate-400">Initiative</span>
                                                    <span className="font-mono">{character.other_traits.advantages.initiative}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* XP */}
                                    {character.other_traits?.xp && (
                                        <div className="flex justify-between items-center border p-2 rounded border-slate-700 bg-slate-950/50">
                                            <span className="font-cinzel font-bold text-sm">Experience</span>
                                            <span className="font-mono font-bold text-primary text-sm">
                                                <span className="text-slate-400">Spent:</span> {character.other_traits.xp.spent} / <span className="text-slate-400">Total:</span> {character.other_traits.xp.earned}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Paths */}
                                <div className="">
                                    {character.other_traits?.paths && (
                                        <div className="">
                                            {/* Separator Line Below Title */}
                                            <h4 className="font-cinzel font-bold text-lg mb-2 text-center border-b border-slate-700 pb-1">Paths</h4>
                                            <div className="space-y-1">
                                                {Object.entries(character.other_traits.paths).map(([path, val]) => (
                                                    <div key={path} className="flex justify-between items-center border-b border-slate-800/50 pb-1 capitalize">
                                                        <span className="text-sm">{path}</span>
                                                        <StatDots value={val} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>


                        {/* Equipment Section (Spanning both sub-cols) */}
                        <div className="border border-slate-700 rounded-lg">
                            <h3 className="bg-slate-800 text-center font-bold font-cinzel p-1 text-slate-200">EQUIPMENT</h3>

                            <EquipmentTable weapons={character.weapons} equipment={character.equipment} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Backstory / Content */}
            < div className="bg-surface/50 rounded-xl p-8 border border-slate-800" >
                <h2 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-2 font-[family-name:var(--font-cinzel)]">
                    <Scroll className="h-6 w-6 text-primary" />
                    Backstory & Notes
                </h2>
                <MarkdownRenderer content={character.content} />
            </div >
        </div >
    );
}
