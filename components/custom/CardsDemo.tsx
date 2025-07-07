"use client";

import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderCheck, ClipboardCheck, CircleCheck } from "lucide-react";
import { DialogDemo } from "./DialogDemo";

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
      icon: <FolderCheck size={19} color="oklch(0.556 0 0)" />,
      title: "To Do",
      description: "Tasks to get started with.",
    },
    {
      icon: <ClipboardCheck size={19} color="oklch(0.769 0.188 70.08)" />,
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
        <Card key={item.title} className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-3">
                {item.icon}
                {item.title}
              </div>
            </CardTitle>
            <CardAction>
              {/* Przekazujemy handler do DialogDemo */}
              <DialogDemo onAdd={(task) => handleAdd(item.title, task)} />
            </CardAction>
          </CardHeader>

          <CardContent className="space-y-4">
            {tasks[item.title].length > 0 ? (
              tasks[item.title].map((task, index) => (
                <div key={index} className="bg-muted p-3 rounded">
                  <h4 className="font-semibold text-sm">{task.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {task.tag} — {task.date}
                  </p>
                  <p className="mt-1 text-sm">{task.description}</p>
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
