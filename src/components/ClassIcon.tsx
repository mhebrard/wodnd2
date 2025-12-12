import { Shield, Sword, Skull, HandFist, BowArrow, User, Axe, Guitar, Cross, Leaf, Flame, Eye, Book } from "lucide-react";

export const getClassIcon = (className: string) => {
    const lowerClass = (className || "").toLowerCase();

    if (lowerClass.includes("barbarian")) return Axe;
    if (lowerClass.includes("bard")) return Guitar;
    if (lowerClass.includes("cleric")) return Cross;
    if (lowerClass.includes("druid")) return Leaf;
    if (lowerClass.includes("fighter")) return Sword;
    if (lowerClass.includes("monk")) return HandFist;
    if (lowerClass.includes("paladin")) return Shield;
    if (lowerClass.includes("ranger")) return BowArrow;
    if (lowerClass.includes("rogue")) return Skull;
    if (lowerClass.includes("sorcerer")) return Flame;
    if (lowerClass.includes("warlock")) return Eye;
    if (lowerClass.includes("wizard")) return Book;
    return User; // Default
};

export default getClassIcon;
