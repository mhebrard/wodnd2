import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import { AlertTriangle, Info, Scroll } from 'lucide-react';
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

                if (node.name === 'rules') {
                    data.hName = 'details';
                    data.hProperties = { className: 'rules-section group' };
                } else if (node.name === 'hrp') {
                    data.hName = 'details';
                    data.hProperties = { className: 'hrp-section group' };
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
                components={{
                    details: ({ node, children, className, ...props }) => {
                        if (className?.includes('rules-section')) {
                            return (
                                <details className="my-4 bg-slate-900/50 border border-red-500/30 rounded-lg overflow-hidden group" {...props}>
                                    <summary className="flex items-center gap-2 px-4 py-3 bg-red-500/10 cursor-pointer hover:bg-red-500/20 transition-colors font-bold text-red-300 select-none font-[family-name:var(--font-cinzel)]">
                                        <Scroll className="h-4 w-4" />
                                        <span>Rules</span>
                                    </summary>
                                    <div className="p-4 text-slate-300 font-sans">
                                        {children}
                                    </div>
                                </details>
                            );
                        }
                        if (className?.includes('hrp-section')) {
                            return (
                                <details className="my-4 bg-slate-900/50 border border-amber-500/30 rounded-lg overflow-hidden group" {...props}>
                                    <summary className="flex items-center gap-2 px-4 py-3 bg-amber-500/10 cursor-pointer hover:bg-amber-500/20 transition-colors font-bold text-amber-300 select-none font-[family-name:var(--font-cinzel)]">
                                        <AlertTriangle className="h-4 w-4" />
                                        <span>HRP (Hors Roleplay)</span>
                                    </summary>
                                    <div className="p-4 text-slate-300 font-sans">
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
