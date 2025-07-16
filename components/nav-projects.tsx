"use client";

import { Folder, Forward, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { DeleteProjectMenuItem } from "./custom/DeleteDialog";
import { DialogProject } from "./custom/DialogProject";
import { useState } from "react";

export function NavProjects({
  projects,
  onAddProject,
}: {
  projects: {
    name: string;
    url: string;
    icon?: React.ElementType;
  }[];
  onAddProject: (project: { name: string; icon?: React.ElementType }) => void;
}) {
  const { isMobile } = useSidebar();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <div className="flex items-center justify-between mr-3">
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <DialogProject
          openDialog={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onAddProject={onAddProject}
        />
      </div>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                {item.icon && <item.icon className="mr-2" />}
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DeleteProjectMenuItem />
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
