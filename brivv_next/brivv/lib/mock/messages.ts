import type { Conversation, Message } from "./types";
import { AGENTS } from "./agents";
import { PROPERTIES } from "./properties";

export const CONVERSATIONS: Conversation[] = AGENTS.slice(0, 6).map((a, i) => ({
  id: `c${i + 1}`,
  agentId: a.id,
  propertyId: PROPERTIES[i % PROPERTIES.length].id,
  lastMessage: [
    "Sure — I can arrange an inspection this weekend.",
    "The property is still available. Would you like a video tour?",
    "Owner is open to negotiation on the asking price.",
    "I'll send the floor plan shortly.",
    "Yes, service charge is included in the rent.",
    "Please share your preferred inspection date.",
  ][i],
  lastAt: new Date(Date.now() - i * 1000 * 60 * 47).toISOString(),
  unread: i < 2 ? 2 : 0,
}));

export const MESSAGES: Message[] = CONVERSATIONS.flatMap((c, ci) => [
  { id: `${c.id}-1`, conversationId: c.id, senderId: "me", text: "Hi, is this property still available?", at: new Date(Date.now() - (10 - ci) * 3600_000).toISOString() },
  { id: `${c.id}-2`, conversationId: c.id, senderId: c.agentId, text: c.lastMessage, at: c.lastAt },
]);