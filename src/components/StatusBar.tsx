import { Text, View } from "@nodegui/react-nodegui";
import React from "react";

export function StatusBar(props: { tokenInstalled: boolean }) {
	if (props.tokenInstalled) {
		return (
			<View>
				<Text style={textContainerStyle}>
					{`
                    <hr />
                    <p style="${textStyle}"><span style="${emojiStyle}">🟢</span> Token installed</p>`}
				</Text>
			</View>
		);
	} else {
		return (
			<View>
				<Text style={textContainerStyle}>
					{`
                    <hr />
                    <p style="${textStyle}"><span style="${emojiStyle}">🔴</span> Token not installed</p>`}
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
