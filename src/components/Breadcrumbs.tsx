import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-sm text-text-muted">
                <li>
                    <Link
                        href="/"
                        className="flex items-center hover:text-[color:var(--color-primary)] transition-colors"
                        aria-label="Home"
                    >
                        <Home className="h-4 w-4" />
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-[color:var(--color-primary)] transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-[color:var(--color-primary)] font-medium" aria-current="page">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
