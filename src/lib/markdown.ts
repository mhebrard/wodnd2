import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs(directory: string) {
    const dirPath = path.join(contentDirectory, directory);
    if (!fs.existsSync(dirPath)) {
        return [];
    }
    return fs.readdirSync(dirPath);
}

export function getPostBySlug(slug: string, fields: string[] = [], directory: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, directory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = [], directory: string) {
    const slugs = getPostSlugs(directory);
    const posts = slugs
        .filter((slug) => slug.endsWith('.md'))
        .map((slug) => getPostBySlug(slug, fields, directory))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
