import { Text, Window, hot, View, LineEdit, Button } from "@nodegui/react-nodegui";
import React, { useContext, useState } from "react";
import { QIcon } from "@nodegui/nodegui";
import path from "path";
import { StepOne } from "./components/stepone";
import { StepTwo } from "./components/steptwo";
import nodeguiIcon from "../assets/nodegui.jpg";
import { Configuration } from "./services";
import { StatusBar } from "./components/StatusBar";
import { Discord } from "./services/Discord";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(path.resolve(__dirname, nodeguiIcon));

function App() {
	const config = useContext(Configuration);
	const client = useContext(Discord);

	const [token, setToken] = useState(config.get("discordToken") as string);
	const [ready, setReady] = useState(false);
	const [ran, setRan] = useState(false);

	const login = () => {
		if (ready) {
			client.destroy();
		}

		config.set("discordToken", token);

		client
			.on("ready", () => setReady(true))
			.on("disconnect", () => setReady(false))
			.login(token)
			.catch(console.error);
	};

	if (!ran && token) {
		setRan(true);
		login();
	}

	return (
		<Window windowIcon={winIcon} windowTitle="Sunset" minSize={minSize} styleSheet={styleSheet}>
			<View style={containerStyle} id="base">
				<Text id="welcome-text">Welcome to NodeGui 🐕</Text>
				<Text id="step-1">1. Play around</Text>
				<StepOne />
				<Text id="step-2">2. Debug</Text>
				<StepTwo />
				<LineEdit
					on={{
						textChanged: setToken,
					}}
					text={token}
					placeholderText="Discord bot token"
				/>
				<Button on={{ clicked: login }} text="Login" />
				<StatusBar ready={ready} />
			</View>
		</Window>
	);
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
  #base {
    background-color: #353535;
    color: white;
  }

  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: "AlignHCenter";
    font-family: "Segoe UI", "Arial", "sans-serif";
    color: white;
  }

  #step-1, #step-2 {
    font-family: "Segoe UI", "Arial", sans-serif;
    font-size: 22px;
    padding-top: 10px;
    padding-horizontal: 20px;
    color: white;
  }
`;

export default hot(App);
