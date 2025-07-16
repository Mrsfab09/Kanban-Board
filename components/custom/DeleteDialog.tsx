"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";

export function DeleteProjectMenuItem() {
  const handleDelete = () => {
    console.log("🗑️ Usuwanie projektu...");
    // tu możesz dodać async DELETE itd.
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Trash2 className="text-[var(--chart-1)] mr-2 h-4 w-4" />
          <span className="text-[var(--chart-1)] cursor-pointer">
            Delete Project
          </span>
        </DropdownMenuItem>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Na pewno usunąć projekt?</AlertDialogTitle>
          <AlertDialogDescription>
            Tej operacji nie można cofnąć. Usunięcie projektu spowoduje trwałe
            usunięcie danych.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Anuluj</AlertDialogCancel>
          <AlertDialogAction
            style={{ backgroundColor: "var(--chart-1)" }}
            onClick={handleDelete}
          >
            Usuń
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
