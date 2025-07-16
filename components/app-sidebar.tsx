"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LayoutGrid,
  Map,
  PieChart,
  Settings2,
  Folder,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Początkowe dane
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Kanban Board",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashobard",
      url: "/",
      icon: LayoutGrid,
      isActive: true,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        { title: "Genesis", url: "#", isActive: false },
        { title: "Explorer", url: "#", isActive: false },
        { title: "Quantum", url: "#", isActive: false },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#", isActive: false },
        { title: "Get Started", url: "#", isActive: false },
        { title: "Tutorials", url: "#", isActive: false },
        { title: "Changelog", url: "#", isActive: false },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "/settings", isActive: false },
        { title: "Team", url: "#", isActive: false },
        { title: "Billing", url: "#", isActive: false },
        { title: "Limits", url: "#", isActive: false },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
      isActive: false,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
      isActive: false,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
      isActive: false,
    },
  ],
};

// Domyślna ikona dla nowych projektów
const DefaultIcon = Folder;

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [projects, setProjects] = React.useState(data.projects);

  const handleAddProject = (project: { name: string }) => {
    setProjects((prev) => [
      ...prev,
      {
        name: project.name,
        url: "#",
        icon: DefaultIcon,
        isActive: false,
      },
    ]);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects projects={projects} onAddProject={handleAddProject} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
