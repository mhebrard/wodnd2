import { Skill } from '@/lib/types';
import StatDots from './StatDots';

interface SkillColumnProps {
    title: string;
    skills: Skill[];
    unskilledPenalty: string;
}

const SkillColumn = ({ title, skills, unskilledPenalty }: SkillColumnProps) => {
    return (
        <div className="flex flex-col gap-1">
            <h4 className="text-center font-cinzel text-lg font-bold border-b border-slate-700 pb-1 mb-2">
                {title}
                <br />
                <span className="text-xs font-sans text-slate-500 font-normal">({unskilledPenalty} unskilled)</span>
            </h4>
            <div className="space-y-1">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-300">{skill.name}</span>
                            {skill.specialty && <span className="text-xs text-slate-500 italic">({skill.specialty})</span>}
                        </div>
                        <StatDots value={skill.value} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillColumn;
