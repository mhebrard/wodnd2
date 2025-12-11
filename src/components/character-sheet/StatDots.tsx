import { Circle } from 'lucide-react';

interface StatDotsProps {
    value: number;
    max?: number;
    className?: string;
}

const StatDots = ({ value, max = 5, className = "" }: StatDotsProps) => {
    return (
        <div className={`flex gap-1 ${className}`}>
            {Array.from({ length: max }).map((_, i) => (
                <div key={i} className={`rounded-full border w-3 h-3 border-slate-200 ${i < value ? 'bg-primary' : 'bg-transparent'}`} />
            ))}
        </div>
    );
};

export default StatDots;
