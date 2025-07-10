"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormDateDemo } from "@/components/custom/FormDateDemo";
import { CirclePlus, CircleCheckBig, OctagonX } from "lucide-react";
import { SelectDemo } from "./SelectDemo";
import { TextareaDemo } from "./TextareaDemo";

interface Task {
  name: string;
  tag: string;
  date: string;
  description: string;
}

export function DialogDemo({ onAdd }: { onAdd: (task: Task) => void }) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !selected || !date || !description) {
      toast(
        <div className="flex items-center gap-2">
          <OctagonX size={20} color={"oklch(0.646 0.222 41.116)"} />
          Complete all data
        </div>,
        {
          position: "top-center",
        }
      );
      return;
    }

    onAdd({
      name,
      tag: selected,
      date: date.toISOString(),
      description,
    });

    setName("");
    setSelected("");
    setDate(undefined);
    setDescription("");
    setOpen(false);

    toast(
      <div className="flex items-center gap-2">
        <CircleCheckBig size={20} color={"oklch(0.646 0.222 41.116)"} />
        Task created
      </div>,
      {
        description: `Your task ${name} has been created`,
        position: "top-center",
      }
    );
  };

  return (
    <>
      <CirclePlus
        color="grey"
        size={20}
        onClick={() => setOpen(true)}
        cursor={"pointer"}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add task</DialogTitle>
              <DialogDescription>
                Add a new task to your list. Click save when you&#39;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="task-name">Task Name</Label>
                <Input
                  id="task-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter task name"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tag">Tag</Label>
                <SelectDemo value={selected} onChange={setSelected} />
              </div>
              <div className="grid gap-3">
                <FormDateDemo value={date} onChange={setDate} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <TextareaDemo value={description} onChange={setDescription} />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                onClick={handleSubmit}
                type="submit"
                style={{ backgroundColor: "var(--chart-1)" }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
