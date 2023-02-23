import React from "react";
import Select from "react-select";
import "../styles/CharacterSelection.css";

const options = [
    { value: "orc", label: "Orc" },
    { value: "elf", label: "Elf" },
    { value: "humain", label: "Humain" },
];

export default function CharacterSelection() {
    return (
        <div>
            <div className="selection-container">
                <label>Salut</label>
                <select
                    className="selection"
                    name="RaceSelect"
                    id="race-selection"
                >
                    <option value="Orc">Orc</option>
                    <option value="Elf">Elf</option>
                    <option value="Humain">Humain</option>
                </select>
            </div>
        </div>
    );
}
