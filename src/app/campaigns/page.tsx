import Link from "next/link";

export default function CampaignsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">Campaigns</h1>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow">
          <Link href="/campaigns/shadow-of-eldoria">
            <h2 className="text-lg font-bold">The Shadow of Eldoria</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">A tale of intrigue and ancient magic in the kingdom of Eldoria.</p>
          </Link>
        </li>
        <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow">
          <Link href="/campaigns/neon-nights-cyber-city">
            <h2 className="text-lg font-bold">Neon Nights: Cyber City</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">A gritty cyberpunk adventure in a city that never sleeps.</p>
          </Link>
        </li>
      </ul>
    </main>
  );
}
