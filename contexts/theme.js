import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const [body, setBody] = useState(
		typeof window !== "undefined" ? document.querySelector("body") : null
	);
	const [theme, setTheme] = useState();

	function toggleTheme() {
		let newTheme = theme === "dark" ? "light" : "dark";
		localStorage.theme = newTheme;
		body.className = newTheme;
		setTheme(newTheme);
	}

	const value = {
		theme,
		toggleTheme,
	};

	React.useEffect(() => {
		setBody(document.querySelector("body"));
		setTheme(localStorage.theme ? localStorage.theme : "dark");

		body.className = theme;
	}, [body, theme]);

	return (
		<div>
			<ThemeContext.Provider value={value}>
				{children}
			</ThemeContext.Provider>
		</div>
	);
}
