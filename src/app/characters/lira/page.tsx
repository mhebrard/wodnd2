import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default async function LiraPage() {
  // Read the markdown file from the content directory
  const filePath = path.join(process.cwd(), 'content/characters/lira.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-pink-700 dark:text-pink-300">{data.name}</h1>
      <div className="mb-6 text-zinc-700 dark:text-zinc-200">
        <span className="font-semibold">Race:</span> {data.race} | <span className="font-semibold">Class:</span> {data.class} | <span className="font-semibold">Level:</span> {data.level} <br/>
        <span className="font-semibold">Player:</span> {data.player} | <span className="font-semibold">Background:</span> {data.background}
      </div>
      <article className="prose dark:prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
