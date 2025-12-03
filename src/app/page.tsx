
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <header className="w-full py-8 px-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow">
        <h1 className="text-4xl font-bold tracking-tight">TTRPG Story Hub</h1>
        <p className="mt-2 text-lg">A place to read, share, and manage your tabletop RPG stories and characters.</p>
      </header>
      <main className="max-w-3xl mx-auto py-12 px-4">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">Welcome Adventurer!</h2>
          <p className="text-zinc-700 dark:text-zinc-200">
            This site is dedicated to chronicling the epic stories and characters from our tabletop roleplaying campaigns. Browse campaign storylines, explore character sheets, and dive into the world of collaborative storytelling.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4 text-pink-700 dark:text-pink-300">Campaigns</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow">
              <Link href="/campaigns/shadow-of-eldoria">
                <h3 className="text-lg font-bold">The Shadow of Eldoria</h3>
                <p className="text-zinc-600 dark:text-zinc-300">A tale of intrigue and ancient magic in the kingdom of Eldoria. <span className="italic">(Sample campaign)</span></p>
              </Link>
            </li>
            <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow">
              <Link href="/campaigns/neon-nights-cyber-city">
                <h3 className="text-lg font-bold">Neon Nights: Cyber City</h3>
                <p className="text-zinc-600 dark:text-zinc-300">A gritty cyberpunk adventure in a city that never sleeps. <span className="italic">(Sample campaign)</span></p>
              </Link>
            </li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Characters</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <Link href="/characters/lira" className="flex-1">
                <h3 className="text-lg font-bold">Lira the Rogue</h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-2">Human Rogue (Level 2)</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">Player: Alice | Background: Street Urchin</p>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
