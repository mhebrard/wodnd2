import { Weapon, Equipment } from "@/lib/types";

interface EquipmentTableProps {
    weapons?: Weapon[];
    equipment?: Equipment[];
}

const EquipmentTable = ({ weapons, equipment }: EquipmentTableProps) => {
    return (
        <div className="space-y-6">
            {/* Weapons Section */}
            {weapons && weapons.length > 0 && (
                // <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-slate-700 table-fixed">
                    <thead className="bg-slate-800 text-slate-200 font-cinzel">
                        <tr>
                            <th className="p-2 border-b border-r border-slate-700 w-[30%]">Weapon/Attack</th>
                            <th className="p-2 border-b border-r border-slate-700 w-[15%] text-center">Damage</th>
                            <th className="p-2 border-b border-r border-slate-700 w-[15%] text-center">Size</th>
                            <th className="p-2 border-b border-r border-slate-700 w-[15%] text-center">Hand</th>
                            <th className="p-2 border-b border-slate-700 w-[25%]">Special</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weapons.map((w, i) => (
                            <tr key={i} className="border-b border-slate-700 hover:bg-slate-900/50">
                                <td className="p-2 border-r border-slate-700 font-medium truncate" title={w.name}>{w.name}</td>
                                <td className="p-2 border-r border-slate-700 text-center">{w.damage}</td>
                                <td className="p-2 border-r border-slate-700 text-center">{w.size}</td>
                                <td className="p-2 border-r border-slate-700 text-center">{w.hand}</td>
                                <td className="p-2 font-mono text-xs text-slate-400 truncate" title={w.special}>{w.special}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                // </div>
            )}

            {/* Equipment Section */}
            {equipment && equipment.length > 0 && (
                // <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-slate-700 table-fixed">
                    <thead className="bg-slate-800 text-slate-200 font-cinzel">
                        <tr>
                            <th className="p-2 border-b border-r border-slate-700 w-[30%]">Equipment</th>
                            <th className="p-2 border-b border-r border-slate-700 w-[15%] text-center">Armor</th>
                            <th className="p-2 border-b border-r border-slate-700 w-[15%] text-center">Structure</th>
                            <th className="p-2 border-b border-r border-slate-700 w-[15%] text-center">Defense</th>
                            <th className="p-2 border-b border-slate-700 w-[25%]">Special</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment.map((e, i) => (
                            <tr key={i} className="border-b border-slate-700 hover:bg-slate-900/50">
                                <td className="p-2 border-r border-slate-700 font-medium truncate" title={e.name}>{e.name}</td>
                                <td className="p-2 border-r border-slate-700 text-center">{e.armor}</td>
                                <td className="p-2 border-r border-slate-700 text-center">{e.structure}</td>
                                <td className="p-2 border-r border-slate-700 text-center">{e.defense}</td>
                                <td className="p-2 font-mono text-xs text-slate-400 truncate" title={e.special}>{e.special}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                // </div>
            )}
        </div>
    );
};

export default EquipmentTable;
