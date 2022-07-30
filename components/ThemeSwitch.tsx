import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { Moon, Sun } from "tabler-icons-react";

export default function ThemeSwitch() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<ActionIcon
			variant="outline"
			color={dark ? "yellow" : "blue"}
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
		>
			{dark ? <Sun size={24} /> : <Moon size={24} />}
		</ActionIcon>
	);
}