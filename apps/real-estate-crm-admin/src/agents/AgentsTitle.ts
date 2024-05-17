import { Agents as TAgents } from "../api/agents/Agents";

export const AGENTS_TITLE_FIELD = "name";

export const AgentsTitle = (record: TAgents): string => {
  return record.name?.toString() || String(record.id);
};
