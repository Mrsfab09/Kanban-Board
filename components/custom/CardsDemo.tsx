"use client";

import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FolderCheck,
  ClipboardCheck,
  CircleCheck,
  CalendarDays,
  CircleDotDashed,
  CircleDashed,
} from "lucide-react";
import { DialogDemo } from "./DialogDemo";
import { Badge } from "../ui/badge";

// Typy dla kolumn
type Column = "To Do" | "In Progress" | "Done";

// Struktura zadania
interface Task {
  name: string;
  tag: string;
  date: string;
  description: string;
}

// Dane dla nagłówków kolumn
interface ColumnData {
  icon: React.ReactNode;
  title: Column;
  description: string;
}

export function CardsDemo() {
  // Stan przechowujący listy zadań dla każdej kolumny
  const [tasks, setTasks] = useState<Record<Column, Task[]>>({
    "To Do": [],
    "In Progress": [],
    Done: [],
  });

  // Dodawanie zadania do odpowiedniej kolumny
  const handleAdd = (column: Column, task: Task) => {
    setTasks((prev) => ({
      ...prev,
      [column]: [...prev[column], task],
    }));
  };

  // Konfiguracja kolumn
  const data: ColumnData[] = [
    {
      icon: <CircleDashed size={19} color="oklch(0.556 0 0)" />,
      title: "To Do",
      description: "Tasks to get started with.",
    },
    {
      icon: <CircleDotDashed size={19} color="oklch(0.769 0.188 70.08)" />,
      title: "In Progress",
      description: "Tasks currently in progress.",
    },
    {
      icon: <CircleCheck size={19} color="oklch(0.696 0.17 162.48)" />,
      title: "Done",
      description: "Completed tasks.",
    },
  ];

  return (
    <div className="grid auto-rows-min md:grid-cols-3 mt-5 gap-4">
      {data.map((item) => (
        <Card key={item.title} className="w-full max-w-sm bg-neutral-100">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-3">
                {item.icon}
                {item.title}
              </div>
            </CardTitle>
            <CardAction>
              <DialogDemo onAdd={(task) => handleAdd(item.title, task)} />
            </CardAction>
          </CardHeader>

          <CardContent className="space-y-4">
            {tasks[item.title].length > 0 ? (
              tasks[item.title].map((task, index) => (
                <div
                  key={index}
                  className="bg-muted p-3 rounded-lg bg-neutral-50 border border-neutral-300"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{task.name}</h4>
                    <div className="flex items-center gap-1">
                      <CalendarDays
                        size={20}
                        className="text-muted-foreground"
                      />
                      <p className="text-xs text-muted-foreground">
                        {new Date(task.date).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground mt-3">
                    {task.description}
                  </p>
                  <div className="flex justify-end items-center mt-1">
                    <Badge
                      style={{
                        backgroundColor: "var(--test)",
                      }}
                    >
                      {task.tag}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-sm">No tasks</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
