import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default async function ShadowOfEldoriaPage() {
  // Read the markdown file from the content directory
  const filePath = path.join(process.cwd(), 'content/campaigns/shadow-of-eldoria.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">{data.title}</h1>
      <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-200">{data.summary}</p>
      <article className="prose dark:prose-invert">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
