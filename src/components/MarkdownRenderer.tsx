import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';
import { Dices } from 'lucide-react';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

interface MarkdownRendererProps {
    content: string;
}

// Custom plugin to transform directives to HTML-compatible nodes
const remarkDirectivePlugin: Plugin = () => {
    return (tree: Node) => {
        visit(tree, (node: any) => {
            if (
                node.type === 'containerDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'textDirective'
            ) {
                const data = node.data || (node.data = {});
                const tagName = node.type === 'textDirective' ? 'span' : 'div';

                if (node.name === 'rolls') {
                    data.hName = 'details';
                    data.hProperties = { className: 'rolls-section group' };
                } else {
                    data.hName = tagName;
                    data.hProperties = { className: node.name };
                }
            }
        });
    };
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
    return (
        <article className="prose prose-invert prose-red max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkDirective, remarkDirectivePlugin]}
                rehypePlugins={[rehypeSlug]}
                components={{
                    details: ({ node, children, className, ...props }) => {
                        if (className?.includes('rolls-section')) {
                            return (
                                <details className="my-4 bg-surface/50 border border-primary/30 rounded-lg overflow-hidden group" {...props}>
                                    <summary className="flex items-center gap-2 px-4 py-3 bg-primary/10 cursor-pointer hover:bg-primary/20 transition-colors font-bold text-primary select-none font-[family-name:var(--font-cinzel)]">
                                        <Dices className="h-4 w-4" />
                                        <span>Rolls</span>
                                    </summary>
                                    <div className="p-4 text-text-muted font-sans">
                                        {children}
                                    </div>
                                </details>
                            );
                        }
                        return <details className={className} {...props}>{children}</details>;
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default MarkdownRenderer;
