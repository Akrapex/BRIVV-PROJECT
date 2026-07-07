"use client";

import { CONVERSATIONS, MESSAGES } from "@/lib/mock/messages";
import { AGENTS } from "@/lib/mock/agents";
import { PROPERTIES } from "@/lib/mock/properties";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/utils/format";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Image as ImgIcon, Send, MoreHorizontal } from "lucide-react";
import type { Message } from "@/lib/mock/types";

export default function Messages() {
  const [activeId, setActiveId] = useState(CONVERSATIONS[0]?.id);
  const [threads, setThreads] = useState<Record<string, Message[]>>(() => {
    const map: Record<string, Message[]> = {};
    CONVERSATIONS.forEach((c) => {
      map[c.id] = MESSAGES.filter((m) => m.conversationId === c.id);
    });
    return map;
  });
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const active = CONVERSATIONS.find((c) => c.id === activeId)!;
  const agent = AGENTS.find((a) => a.id === active.agentId)!;
  const property = PROPERTIES.find((p) => p.id === active.propertyId)!;
  const msgs = threads[active.id] ?? [];

  const send = () => {
    if (!draft.trim()) return;
    const newMsg: Message = {
      id: `${active.id}-${Date.now()}`,
      conversationId: active.id,
      senderId: "me",
      text: draft.trim(),
      at: new Date().toISOString(),
    };
    setThreads((t) => ({
      ...t,
      [active.id]: [...(t[active.id] ?? []), newMsg],
    }));
    setDraft("");
    setTyping(true);
    setTimeout(() => {
      setThreads((t) => ({
        ...t,
        [active.id]: [
          ...(t[active.id] ?? []),
          {
            id: `${active.id}-r-${Date.now()}`,
            conversationId: active.id,
            senderId: agent.id,
            text: "Thanks — I'll get back to you shortly!",
            at: new Date().toISOString(),
          },
        ],
      }));
      setTyping(false);
    }, 1400);
  };

  return (
    <div className="grid h-[calc(100vh-9rem)] grid-cols-1 gap-4 md:grid-cols-[320px_1fr]">
      <aside className="hidden overflow-y-auto rounded-md border border-border bg-card shadow-soft md:block">
        <div className="border-b border-border p-4">
          <h2 className="font-display text-lg font-semibold">Messages</h2>
        </div>
        <ul>
          {CONVERSATIONS.map((c) => {
            const ag = AGENTS.find((a) => a.id === c.agentId)!;
            const isActive = c.id === activeId;
            return (
              <li key={c.id}>
                <button
                  onClick={() => setActiveId(c.id)}
                  className={
                    "flex w-full items-center gap-3 border-l-2 p-3 text-left transition " +
                    (isActive
                      ? "border-primary bg-primary-soft/50"
                      : "border-transparent hover:bg-muted")
                  }
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={ag.avatar} />
                    <AvatarFallback>{initials(ag.name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="truncate text-sm font-semibold">
                        {ag.name}
                      </div>
                      {c.unread > 0 && (
                        <span className="grid h-5 min-w-[20px] place-items-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground">
                          {c.unread}
                        </span>
                      )}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {c.lastMessage}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <section className="flex min-h-0 flex-col overflow-hidden rounded ">
        <header className="flex items-center gap-3 border-b border-border p-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={agent.avatar} />
            <AvatarFallback>{initials(agent.name)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold">{agent.name}</div>
            <div className="truncate text-xs text-muted-foreground">
              Re: {property.title}
            </div>
          </div>
          <Button size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </header>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {msgs.map((m) => (
            <div
              key={m.id}
              className={
                "flex " +
                (m.senderId === "me" ? "justify-end" : "justify-start")
              }
            >
              <div
                className={
                  "max-w-[75%] rounded-2xl px-3.5 py-2 text-sm " +
                  (m.senderId === "me"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted rounded-bl-sm")
                }
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-sm bg-muted px-3 py-2">
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60"
                  style={{ animationDelay: "120ms" }}
                />
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60"
                  style={{ animationDelay: "240ms" }}
                />
              </div>
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label="Attach image"
          >
            <ImgIcon className="h-4 w-4" />
          </Button>
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message" 
            className="rounded-full bg-white py-6 pl-4 border-0"
          />
          <Button type="submit" size="icon" className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </section>
    </div>
  );
}
