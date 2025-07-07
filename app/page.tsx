import { AppSidebar } from "@/components/app-sidebar";
import { CardsDemo } from "@/components/custom/CardsDemo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartNoAxesGantt, Presentation, ListTodo } from "lucide-react";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0 ml-8 mt-6">
          <Tabs defaultValue="board" className="w-full">
            <TabsList>
              <TabsTrigger value="board">
                <Presentation />
                Board
              </TabsTrigger>
              <TabsTrigger value="timeline">
                <ChartNoAxesGantt />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="list">
                <ListTodo />
                List
              </TabsTrigger>
            </TabsList>
            <TabsContent value="board">
              <CardsDemo />
            </TabsContent>
            <TabsContent value="timeline">
              Change your timeline here.
            </TabsContent>
            <TabsContent value="list">Change your password here.</TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
