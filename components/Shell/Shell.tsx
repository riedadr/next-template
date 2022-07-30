import React, { useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
    MantineProvider,
} from "@mantine/core";
import ThemeSwitch from "../ThemeSwitch";

export default function Shell(props: any) {
	const scheme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		
			<AppShell
				styles={{
					main: {
						background:
							scheme.colorScheme === "dark"
								? scheme.colors.dark[9]
								: scheme.colors.gray[1],
					},
				}}
				navbarOffsetBreakpoint="sm"
				asideOffsetBreakpoint="sm"
				fixed
				navbar={
					<Navbar
						p="md"
						hiddenBreakpoint="sm"
						hidden={!opened}
						width={{ sm: 200, lg: 300 }}
					>
                        <p>Navbar</p>
                    </Navbar>
				}
				header={
					<Header height={70} p="md">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								height: "100%",
							}}
						>
							<MediaQuery
								largerThan="sm"
								styles={{ display: "none" }}
							>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size="sm"
									color={scheme.colors.gray[6]}
									mr="xl"
								/>
							</MediaQuery>

							<div className="w-full flex justify-between">
								<Text size="xl" weight={700}>
									Mantine AppShell
								</Text>
								<ThemeSwitch />
							</div>
						</div>
					</Header>
				}
			>
				<div id="content">{props.children}</div>
			</AppShell>
	);
}
