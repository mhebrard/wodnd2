import Link from "next/link";
import { BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 py-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Welcome to the Chronicles
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Dive into the epic sagas of our tabletop adventures. Explore the lore, meet the heroes, and follow their journeys.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/campaigns"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Campaigns
          </Link>
          <Link
            href="/characters"
            className="inline-flex items-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <Users className="mr-2 h-5 w-5" />
            Meet the Heroes
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Latest Stories</h2>
          <p className="text-slate-400 mb-4">
            Catch up on the most recent events in our ongoing campaigns. The world is ever-changing, and new legends are written every session.
          </p>
          <Link href="/campaigns" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Read more &rarr;
          </Link>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Character Spotlight</h2>
          <p className="text-slate-400 mb-4">
            Discover the backgrounds, stats, and stories of the brave (and sometimes foolish) adventurers who shape these worlds.
          </p>
          <Link href="/characters" className="text-cyan-400 hover:text-cyan-300 font-medium">
            View Characters &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
