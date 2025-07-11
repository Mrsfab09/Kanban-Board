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
import { IconPicker } from "@/components/ui/icon-picker";

import * as icons from "lucide-react"; // Importujemy WSZYSTKIE ikony jako obiekt

import { CircleCheckBig, OctagonX, Plus } from "lucide-react";

interface DialogProjectProps {
  openDialog: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DialogProject({
  openDialog,
  onOpenChange,
}: DialogProjectProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !selectedIcon) {
      toast(
        <div className="flex items-center gap-2">
          <OctagonX size={20} color={"oklch(0.646 0.222 41.116)"} />
          Complete all data
        </div>,
        { position: "top-center" }
      );
      return;
    }

    toast(
      <div className="flex items-center gap-2">
        <CircleCheckBig size={20} color={"oklch(0.646 0.222 41.116)"} />
        Project created
      </div>,
      {
        description: `Your task "${name}" has been created`,
        position: "top-center",
      }
    );

    // Reset state
    setName("");
    setSelectedIcon(undefined);
    setOpen(false);
  };

  const SelectedIcon =
    selectedIcon &&
    typeof icons[selectedIcon as keyof typeof icons] === "function"
      ? icons[selectedIcon as keyof typeof icons]
      : null;

  return (
    <>
      <Plus
        size={14}
        cursor={"pointer"}
        className="text-muted-foreground"
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add project</DialogTitle>
              <DialogDescription>
                Choose a name and an icon for your project
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-3">
                <Label>Choose icon</Label>
                <IconPicker
                  value={selectedIcon}
                  onValueChange={setSelectedIcon}
                  searchable
                  triggerPlaceholder="Choose icon"
                />
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
                style={{ backgroundColor: "var(--chart-1)" }}
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
