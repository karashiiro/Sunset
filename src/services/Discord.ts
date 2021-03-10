import { Client } from "discord.js";
import React from "react";

export const Discord = React.createContext(new Client());
Discord.displayName = "Discord";
