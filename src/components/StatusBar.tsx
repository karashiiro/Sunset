import { Text, View } from "@nodegui/react-nodegui";
import React from "react";

export function StatusBar(props: { ready: boolean }) {
	if (props.ready) {
		return (
			<View>
				<Text style={textContainerStyle}>
					{`
                    <hr />
                    <p style="${textStyle}"><span style="${emojiStyle}">🟢</span> Connected to Discord</p>
					<br />`}
				</Text>
			</View>
		);
	} else {
		return (
			<View>
				<Text style={textContainerStyle}>
					{`
                    <hr />
                    <p style="${textStyle}"><span style="${emojiStyle}">🔴</span> Disconnected</p>
					<br />`}
				</Text>
			</View>
		);
	}
}

const textContainerStyle = `
    height: auto;
`;

const emojiStyle = `
    font-size: 14px;
    vertical-align: middle;
    line-height: 1;
`;

const textStyle = `
    margin: 0;
    color: white;
`;
