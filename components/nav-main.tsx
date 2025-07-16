"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { data } from "./app-sidebar";

type SubItem = {
  title: string;
  url: string;
};

export function NavMain() {
  const pathname = usePathname();

  // Sprawdza, czy link jest aktywny (dokładne dopasowanie)
  const isActive = React.useCallback(
    (url: string) => pathname === url,
    [pathname]
  );

  // Sprawdza, czy którykolwiek z pod-elementów jest aktywny
  const isAnySubItemActive = React.useCallback(
    (items?: SubItem[]) => items?.some((sub) => isActive(sub.url)) ?? false,
    [isActive]
  );

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {data.navMain.map((item) =>
          item.items && item.items.length > 0 ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isAnySubItemActive(item.items)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={
                      isActive(item.url) || isAnySubItemActive(item.items)
                        ? "bg-[var(--sidebar-border)] text-primary font-semibold"
                        : ""
                    }
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a
                            href={subItem.url}
                            className={`flex items-center gap-2 px-2 py-1 rounded ${
                              isActive(subItem.url)
                                ? "bg-[var(--muted)] text-primary font-semibold"
                                : ""
                            }`}
                          >
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                className={
                  isActive(item.url)
                    ? "bg-[var(--sidebar-border)] text-primary font-semibold"
                    : ""
                }
              >
                <a href={item.url} className="flex items-center gap-2">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
