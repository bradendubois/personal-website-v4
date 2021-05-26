import { createContext, useContext, useState } from "react";

interface Theming {
	toggle(): void;
}

export enum ThemeOptions {
	Light = "light",
	Dark = "dark",
}

const ThemeContext = createContext<Theming>({
	toggle: () => {},
});

export const ThemingProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(ThemeOptions.Dark);

	const toggle = () => {
		setCurrentTheme(currentTheme === ThemeOptions.Dark ? ThemeOptions.Light : ThemeOptions.Dark);
	};

	return (
		<ThemeContext.Provider value={{ toggle }}>
			<div className={currentTheme === ThemeOptions.Light ? "light-theme" : "dark-theme"}>{children}</div>
		</ThemeContext.Provider>
	);
};

export const useTheming = () => useContext(ThemeContext);
