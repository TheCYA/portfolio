"use client"

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoDesktopOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Select from "react-select";

export default function ThemeChanger(){
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    const options = [
        {value: "light", label:(
            <div>
                <IoSunnyOutline color="black" size={"1rem"}/>
                <span>Claro</span>
            </div>
        )},
        {value: "dark", label: (
            <div>
                <IoMoonOutline color="white" size={"1rem"}/>
                <span>Oscuro</span>
            </div>
        )},
        {value: "system", label: (
            <div>
                <IoDesktopOutline size={"1rem"}/>
                <span>Sistema</span>
            </div>
        )}
    ]

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const customStyles = {
        control: (provided, state) =>({
            ...provided,
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? "var(--bg-color)"
                : state.isFocused
                ? "var(--border-color)"
                : "var(--bg-color)",
            color: state.isFocused ? "var(--text-color-focus)" : "var(--text-color)",
                "&:hover": {
                backgroundColor: "var(--border-color)",
                },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "var(--text-color)",
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "var(--bg-color)",
          }),
    }

    return (
        <div className="theme-selector">
            <Select
                options={options}
                defaultValue={options.find(option => option.value === theme)}
                onChange={(selected => setTheme(selected.value))}
                styles={customStyles}
            />
        </div>
    )
}