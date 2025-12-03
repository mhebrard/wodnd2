import Link from "next/link";

export default function CharactersPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-green-700 dark:text-green-300">Characters</h1>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <Link href="/characters/lira" className="flex-1">
            <h2 className="text-lg font-bold">Lira the Rogue</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">Human Rogue (Level 2)</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Player: Alice | Background: Street Urchin</p>
          </Link>
        </li>
      </ul>
    </main>
  );
}
