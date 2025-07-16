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
// import { IconPicker } from "@/components/ui/icon-picker";

import * as icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { CircleCheckBig, OctagonX, Plus } from "lucide-react";

type IconName = keyof typeof icons;

interface DialogProjectProps {
  openDialog: boolean;
  onOpenChange: (open: boolean) => void;
  onAddProject: (project: { name: string }) => void;
}

export function DialogProject({
  openDialog,
  onOpenChange,
  onAddProject,
}: DialogProjectProps) {
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconName | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      toast(
        <div className="flex items-center gap-2">
          <OctagonX size={20} color={"oklch(0.646 0.222 41.116)"} />
          Complete all data
        </div>,
        { position: "top-center" }
      );
      return;
    }

    onAddProject({ name });

    toast(
      <div className="flex items-center gap-2">
        <CircleCheckBig size={20} className="text-[var(--chart-5)]" />
        Project created
      </div>,
      {
        description: `Your project "${name}" has been created`,
        position: "top-center",
      }
    );

    // Reset state
    setName("");
    setSelectedIcon(undefined);
    onOpenChange(false);
  };

  const SelectedIcon = selectedIcon
    ? (icons[selectedIcon] as LucideIcon)
    : null;

  return (
    <>
      <Plus
        size={14}
        cursor={"pointer"}
        className="text-muted-foreground"
        onClick={() => onOpenChange(true)}
      />
      <Dialog open={openDialog} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add project</DialogTitle>
              <DialogDescription>
                Choose a name and an icon for your project
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-3">
                {/*
                <Label>Choose icon</Label>
                 <IconPicker
                  value={selectedIcon}
                  onValueChange={setSelectedIcon}
                  searchable
                  triggerPlaceholder="Choose icon"
                /> */}
                {SelectedIcon && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <SelectedIcon size={20} />
                    {selectedIcon}
                  </div>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="task-name">Project Name</Label>
                <Input
                  id="task-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter project name"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                style={{ backgroundColor: "var(--chart-5)" }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
