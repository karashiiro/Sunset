import Conf from "conf";
import React from "react";
import yaml from "js-yaml";

export const Configuration = React.createContext(
	new Conf({
		projectName: "Sunset",
		fileExtension: "yml",
		serialize: yaml.dump,
		deserialize: yaml.loadAll,
	}),
);

Configuration.displayName = "Configuration";
