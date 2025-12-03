import Link from "next/link";
import { BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-[family-name:var(--font-cinzel)] drop-shadow-lg">
          <span className="block">World of Darkness</span>
          <span className="block text-4xl md:text-6xl mt-2 ml-12 text-secondary">& Dungeons & Dragons</span>
        </h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed text-justify font-sans">
          WoD&D² is an adaptation of the World of Darkness, the storytelling system God-Machine version 2 with a dual goal. First, extract the core rules from the 226 pages of the core rulebook and simplify them to an easy and quick use. Second, extend the rules for applying them to a heroic fantasy universe inspired from Advanced Dungeons & Dragons.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Link href="/campaigns" className="block group">
          <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full">
            <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-hover transition-colors font-[family-name:var(--font-cinzel)]">Latest Stories</h2>
            <p className="text-text-muted mb-4 font-sans">
              Catch up on the most recent events in our ongoing campaigns. The world is ever-changing, and new legends are written every session.
            </p>
            <span className="text-primary hover:text-primary-hover font-medium font-[family-name:var(--font-cinzel)] group-hover:underline">
              Read more &rarr;
            </span>
          </div>
        </Link>
        <Link href="/characters" className="block group">
          <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10 h-full">
            <h2 className="text-2xl font-bold text-secondary mb-4 group-hover:text-secondary-hover transition-colors font-[family-name:var(--font-cinzel)]">Character Spotlight</h2>
            <p className="text-text-muted mb-4 font-sans">
              Discover the backgrounds, stats, and stories of the brave (and sometimes foolish) adventurers who shape these worlds.
            </p>
            <span className="text-secondary hover:text-secondary-hover font-medium font-[family-name:var(--font-cinzel)] group-hover:underline">
              View Characters &rarr;
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
