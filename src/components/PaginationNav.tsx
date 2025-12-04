import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
    title?: string;
}

interface PaginationNavProps {
    prev?: NavItem;
    next?: NavItem;
}

export default function PaginationNav({ prev, next }: PaginationNavProps) {
    if (!prev && !next) return null;

    return (
        <nav className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 gap-4">
            <div className="col-start-1">
                {prev && (
                    <Link
                        href={prev.href}
                        className="group flex flex-col items-start gap-1 text-sm"
                    >
                        <span className="flex items-center gap-1 text-text-muted group-hover:text-[color:var(--color-primary)] transition-colors">
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                        </span>
                        <span className="font-bold text-lg text-text-main group-hover:text-[color:var(--color-primary)] transition-colors font-[family-name:var(--font-cinzel)] text-left">
                            {prev.title || prev.label}
                        </span>
                    </Link>
                )}
            </div>

            <div className="col-start-2 flex justify-end">
                {next && (
                    <Link
                        href={next.href}
                        className="group flex flex-col items-end gap-1 text-sm"
                    >
                        <span className="flex items-center gap-1 text-text-muted group-hover:text-[color:var(--color-primary)] transition-colors">
                            Next
                            <ChevronRight className="h-4 w-4" />
                        </span>
                        <span className="font-bold text-lg text-text-main group-hover:text-[color:var(--color-primary)] transition-colors font-[family-name:var(--font-cinzel)] text-right">
                            {next.title || next.label}
                        </span>
                    </Link>
                )}
            </div>
        </nav>
    );
}
