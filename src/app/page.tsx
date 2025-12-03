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
        <div className="flex justify-center gap-4 pt-8">
          <Link
            href="/campaigns"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover transition-colors shadow-primary/20 font-[family-name:var(--font-cinzel)]"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Campaigns
          </Link>
          <Link
            href="/characters"
            className="inline-flex items-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-300 bg-surface hover:bg-surface-hover transition-colors font-[family-name:var(--font-cinzel)]"
          >
            <Users className="mr-2 h-5 w-5" />
            Meet the Heroes
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors group">
          <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-hover transition-colors font-[family-name:var(--font-cinzel)]">Latest Stories</h2>
          <p className="text-text-muted mb-4 font-sans">
            Catch up on the most recent events in our ongoing campaigns. The world is ever-changing, and new legends are written every session.
          </p>
          <Link href="/campaigns" className="text-primary hover:text-primary-hover font-medium font-[family-name:var(--font-cinzel)]">
            Read more &rarr;
          </Link>
        </div>
        <div className="bg-surface p-6 rounded-xl border border-slate-800 hover:border-secondary/50 transition-colors group">
          <h2 className="text-2xl font-bold text-secondary mb-4 group-hover:text-secondary-hover transition-colors font-[family-name:var(--font-cinzel)]">Character Spotlight</h2>
          <p className="text-text-muted mb-4 font-sans">
            Discover the backgrounds, stats, and stories of the brave (and sometimes foolish) adventurers who shape these worlds.
          </p>
          <Link href="/characters" className="text-secondary hover:text-secondary-hover font-medium font-[family-name:var(--font-cinzel)]">
            View Characters &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
