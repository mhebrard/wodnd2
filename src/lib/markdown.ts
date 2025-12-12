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
        [key: string]: any;
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
        .map((slug) => getPostBySlug(slug, [...fields, 'order', 'date'], directory))
        // sort posts by order then by date
        .sort((post1, post2) => {
            // Sort by order if available (ascending)
            if (post1.order && post2.order) {
                return parseInt(post1.order) - parseInt(post2.order);
            }
            // Fallback to date (descending)
            return post1.date > post2.date ? -1 : 1;
        });
    return posts;
}

export function getAllCampaigns(fields: string[] = []) {
    const campaignsDir = path.join(contentDirectory, 'campaigns');
    if (!fs.existsSync(campaignsDir)) return [];

    const dirs = fs.readdirSync(campaignsDir).filter(file => fs.statSync(path.join(campaignsDir, file)).isDirectory());

    const campaigns = dirs.map(slug => {
        const fullPath = path.join(campaignsDir, slug, 'campaign.md');
        if (!fs.existsSync(fullPath)) return null;

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        type Items = { [key: string]: string };
        const items: Items = {};

        fields.forEach((field) => {
            if (field === 'slug') {
                items[field] = slug;
            }
            if (typeof data[field] !== 'undefined') {
                items[field] = data[field];
            }
        });

        // Always include order and date for sorting
        if (typeof data['order'] !== 'undefined') items['order'] = data['order'];
        if (typeof data['date'] !== 'undefined') items['date'] = data['date'];

        return items;
    }).filter(Boolean) as { [key: string]: string }[];

    return campaigns.sort((a, b) => {
        // Sort by order if available (ascending)
        if (a.order && b.order) {
            return parseInt(a.order) - parseInt(b.order);
        }
        // Fallback to date (descending)
        return a.date > b.date ? -1 : 1;
    });
}

export function getCampaignBySlug(slug: string, fields: string[] = []) {
    const fullPath = path.join(contentDirectory, 'campaigns', slug, 'campaign.md');

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Campaign not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    type Items = { [key: string]: string };
    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = slug;
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllScenarios(campaignSlug: string, fields: string[] = []) {
    const campaignDir = path.join(contentDirectory, 'campaigns', campaignSlug);
    if (!fs.existsSync(campaignDir)) return [];

    const files = fs.readdirSync(campaignDir);

    const scenarios = files
        .filter(file => file.endsWith('.md') && file !== 'campaign.md')
        .map(file => {
            const realSlug = file.replace(/\.md$/, '');
            const fullPath = path.join(campaignDir, file);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            type Items = { [key: string]: string };
            const items: Items = {};

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

            // Always include order and date for sorting
            if (typeof data['order'] !== 'undefined') items['order'] = data['order'];
            if (typeof data['date'] !== 'undefined') items['date'] = data['date'];

            return items;
        })
        .sort((a, b) => {
            // Sort by order if available (ascending)
            if (a.order && b.order) {
                return parseInt(a.order) - parseInt(b.order);
            }
            // Fallback to date (descending)
            return a.date > b.date ? -1 : 1;
        });

    return scenarios;
}

export function getScenarioBySlug(campaignSlug: string, scenarioSlug: string, fields: string[] = []) {
    const fullPath = path.join(contentDirectory, 'campaigns', campaignSlug, `${scenarioSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Scenario not found: ${scenarioSlug} in ${campaignSlug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = { [key: string]: string };
    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = scenarioSlug;
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

export function getLatestScenario() {
    const campaigns = getAllCampaigns(["slug", "title"]);
    let allScenarios: { [key: string]: string }[] = [];

    campaigns.forEach(campaign => {
        const scenarios = getAllScenarios(campaign.slug, ["title", "date", "description", "slug", "campaign"]);
        // Add campaign slug and title to each scenario for linking and display
        const scenariosWithCampaign = scenarios.map(s => ({
            ...s,
            campaignSlug: campaign.slug,
            campaignTitle: campaign.title
        }));
        allScenarios = [...allScenarios, ...scenariosWithCampaign];
    });

    // Sort by date descending
    allScenarios.sort((a, b) => (a.date > b.date ? -1 : 1));

    return allScenarios.length > 0 ? allScenarios[0] : null;
}

export function getLatestCharacter() {
    const characters = getAllPosts(["name", "class", "level", "race", "campaign", "date", "slug", "concept"], "characters");
    // Sort by date descending (already done in getAllPosts but good to be explicit if logic changes)
    // getAllPosts sorts by order then date. Characters might not have order.
    // Let's re-sort strictly by date for "latest"
    characters.sort((a, b) => (a.date > b.date ? -1 : 1));

    return characters.length > 0 ? characters[0] : null;
}
