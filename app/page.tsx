import { CardsDemo } from "@/components/custom/CardsDemo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartNoAxesGantt, Presentation, ListTodo } from "lucide-react";

export default function Home() {
  return (
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
      <TabsContent value="timeline">Change your timeline here.</TabsContent>
      <TabsContent value="list">Change your password here.</TabsContent>
    </Tabs>
  );
}
