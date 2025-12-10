import { Attributes } from '@/lib/types';
import StatDots from './StatDots';

interface AttributeGridProps {
    attributes: Attributes;
}

const AttributeGrid = ({ attributes }: AttributeGridProps) => {
    return (
        <div className="border border-slate-700 rounded-lg overflow-hidden">
            <h3 className="bg-slate-800 text-center font-bold font-cinzel p-1 text-slate-200">ATTRIBUTES</h3>
            <div className="grid grid-cols-3 bg-slate-900/50">
                {/* Headers */}
                <div className="text-center text-sm font-semibold p-1 border-b border-r border-slate-700 text-slate-400">Mental</div>
                <div className="text-center text-sm font-semibold p-1 border-b border-r border-slate-700 text-slate-400">Physical</div>
                <div className="text-center text-sm font-semibold p-1 border-b border-slate-700 text-slate-400">Social</div>

                {/* Row 1: Power */}
                <div className="p-2 border-r border-b border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Intelligence</span>
                    <StatDots value={attributes.mental.intelligence} />
                </div>
                <div className="p-2 border-r border-b border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Strength</span>
                    <StatDots value={attributes.physical.strength} />
                </div>
                <div className="p-2 border-b border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Presence</span>
                    <StatDots value={attributes.social.presence} />
                </div>

                {/* Row 2: Finesse */}
                <div className="p-2 border-r border-b border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Wits</span>
                    <StatDots value={attributes.mental.wits} />
                </div>
                <div className="p-2 border-r border-b border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Dexterity</span>
                    <StatDots value={attributes.physical.dexterity} />
                </div>
                <div className="p-2 border-b border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Manipulation</span>
                    <StatDots value={attributes.social.manipulation} />
                </div>

                {/* Row 3: Resistance */}
                <div className="p-2 border-r border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Resolve</span>
                    <StatDots value={attributes.mental.resolve} />
                </div>
                <div className="p-2 border-r border-slate-700 flex justify-between items-center">
                    <span className="text-sm font-medium">Stamina</span>
                    <StatDots value={attributes.physical.stamina} />
                </div>
                <div className="p-2 flex justify-between items-center">
                    <span className="text-sm font-medium">Composure</span>
                    <StatDots value={attributes.social.composure} />
                </div>
            </div>
        </div>
    );
};

export default AttributeGrid;
