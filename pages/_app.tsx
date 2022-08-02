import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from "@mantine/core";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

	const toggleColorScheme = (value?: ColorScheme) => {
		const newScheme = value || (colorScheme === "dark" ? "light" : "dark");
		setColorScheme(newScheme);

		document.body.className = newScheme;

		localStorage.colorScheme = newScheme;
	};

	useEffect(() => {
		const currentScheme = localStorage.colorScheme
			? localStorage.colorScheme
			: "dark";
		setColorScheme(currentScheme);
		document.body.className = currentScheme;
	}, []);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<Component {...pageProps} />
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default MyApp;
