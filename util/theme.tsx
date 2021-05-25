import {createContext, useContext, useState} from "react";

interface Theming {
    currentTheme: ThemeOptions
    toggle(): void
}

enum ThemeOptions {
    Light,
    Dark
}

const ThemeContext = createContext<Theming>({
    currentTheme: ThemeOptions.Dark,
    toggle: () => {}
})

export const ThemingProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState(ThemeOptions.Dark)

    const toggle = () => {
        setCurrentTheme(currentTheme === ThemeOptions.Dark ? ThemeOptions.Light : ThemeOptions.Dark)
    }

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            toggle
        }}>{children}</ThemeContext.Provider>
    )
}

export const useTheming = () => useContext(ThemeContext)
