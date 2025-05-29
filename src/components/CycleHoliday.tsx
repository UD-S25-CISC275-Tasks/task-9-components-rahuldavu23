import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define a type for your holidays
type Holiday = "🎃" | "🎄" | "❤️" | "🦃" | "🐰";

// Alphabetical order: Bunny, Christmas, Halloween, Heart, Turkey
const alphabetOrder: Record<Holiday, Holiday> = {
    "🐰": "🎄",
    "🎄": "🎃",
    "🎃": "❤️",
    "❤️": "🦃",
    "🦃": "🐰",
};

// Year order: Valentine (Heart), Easter (Bunny), Halloween (Pumpkin), Thanksgiving (Turkey), Christmas (Tree)
const yearOrder: Record<Holiday, Holiday> = {
    "❤️": "🐰",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "❤️",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("❤️");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(alphabetOrder[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(yearOrder[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
