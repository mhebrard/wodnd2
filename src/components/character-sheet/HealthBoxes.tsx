interface HealthBoxesProps {
    current: number; // Temporary (boxes usage)
    max: number;     // Permanent (dots count)
    label?: string;
    type?: 'health' | 'willpower' | 'mana' | 'mastery';
    boxesCount?: number; // Override for number of boxes (e.g., Mana has 20)
    dotsCount?: number;  // Override for number of dots (e.g., Health has 12)
}

const HealthBoxes = ({ current, max, label, type = 'health', boxesCount, dotsCount }: HealthBoxesProps) => {

    // Configurations
    const config = {
        health: { dots: 12, boxes: 12, dotColor: "bg-primary border-primary", boxColor: "bg-secondary/50 border-primary" },
        willpower: { dots: 10, boxes: 10, dotColor: "bg-primary border-primary", boxColor: "bg-secondary/50 border-primary" },
        mastery: { dots: 10, boxes: 0, dotColor: "bg-primary border-primary", boxColor: "" },
        mana: { dots: 0, boxes: 20, dotColor: "", boxColor: "bg-secondary/50 border-primary" },
    };
    // border-[color:var(--color-primary)]/50

    const settings = config[type];
    const totalDots = dotsCount ?? settings.dots;
    const totalBoxes = boxesCount ?? settings.boxes;

    return (
        <div className="flex flex-col items-center gap-1" >
            {label && <h4 className="font-cinzel font-bold text-lg">{label}</h4>}

            {/* Dots Row (Permanent) */}
            {
                totalDots > 0 && (
                    <div className="flex gap-1 justify-center">
                        {Array.from({ length: totalDots }).map((_, i) => {
                            const isFilled = i < max;
                            return (
                                <div
                                    key={`dot-${i}`}
                                    className={`w-4 h-4 rounded-full border border-slate-200 ${isFilled ? settings.dotColor : "bg-transparent"}`}
                                />
                            );
                        })}
                    </div>
                )
            }

            {/* Boxes Row (Temporary) */}
            {
                totalBoxes > 0 && (
                    <div className={`gap-1 justify-center ${totalBoxes >= 20 ? 'grid grid-cols-10' : 'flex flex-wrap'}`}>
                        {Array.from({ length: totalBoxes }).map((_, i) => {
                            const isFilled = i < current;
                            return (
                                <div
                                    key={`box-${i}`}
                                    className={`w-4 h-4 rounded-sm border border-slate-200 ${isFilled ? settings.boxColor : "bg-transparent"}`}
                                />
                            );
                        })}
                    </div>
                )
            }
        </div >
    );
};

export default HealthBoxes;
